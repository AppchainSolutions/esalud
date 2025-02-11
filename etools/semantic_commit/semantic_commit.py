#!/usr/bin/env python3
import os
import re
import subprocess
import sys
from typing import List, Dict

def run_command(command: str) -> str:
    """Ejecutar comando de shell y devolver salida"""
    return subprocess.check_output(command, shell=True, text=True).strip()

def get_git_diff() -> str:
    """Obtener diff de git"""
    return run_command("git diff")

def classify_changes(diff: str) -> Dict[str, List[str]]:
    """Clasificar cambios por tipo"""
    classifications = {
        'feature': [],
        'fix': [],
        'docs': [],
        'refactor': [],
        'style': [],
        'test': [],
        'chore': []
    }
    
    # Patrones para clasificación
    patterns = {
        'feature': [r'add\s', r'implement\s', r'create\s', r'new\s'],
        'fix': [r'fix\s', r'correct\s', r'resolve\s', r'repair\s'],
        'docs': [r'doc\s', r'comment\s', r'readme\s', r'changelog\s'],
        'refactor': [r'refactor\s', r'optimize\s', r'improve\s'],
        'test': [r'test\s', r'spec\s', r'testing\s'],
        'chore': [r'config\s', r'setup\s', r'dependency\s']
    }
    
    # Analizar cada línea del diff
    for line in diff.split('\n'):
        if line.startswith('+') and not line.startswith('+++'):
            line_lower = line[1:].lower()
            for category, pattern_list in patterns.items():
                if any(re.search(pattern, line_lower) for pattern in pattern_list):
                    classifications[category].append(line[1:])
                    break
    
    return classifications

def generate_commit_description(classifications: Dict[str, List[str]]) -> tuple:
    """Generar descripción de commit y tipo semántico"""
    # Prioridad de clasificación
    priority_order = ['fix', 'feature', 'docs', 'refactor', 'test', 'chore']
    
    for category in priority_order:
        if classifications[category]:
            # Seleccionar tipo semántico
            semantic_type = {
                'feature': 'feat',
                'fix': 'fix',
                'docs': 'docs',
                'refactor': 'refactor',
                'test': 'test',
                'chore': 'chore'
            }[category]
            
            # Generar descripción
            description = f"Cambios principales:\n"
            for change in classifications[category][:3]:  # Limitar a 3 cambios
                description += f"- {change.strip()}\n"
            
            return semantic_type, description
    
    return 'chore', 'Cambios varios en el proyecto'

def suggest_scope(diff: str) -> str:
    """Sugerir ámbito basado en rutas modificadas"""
    files = run_command("git diff --name-only").split('\n')
    
    # Mapeo de rutas a ámbitos
    scope_mapping = {
        'app/': 'backend',
        'resources/': 'frontend',
        'tests/': 'test',
        'config/': 'config',
        'database/': 'database',
        'routes/': 'routes',
        'docs/': 'docs'
    }
    
    for path_prefix, scope in scope_mapping.items():
        if any(path_prefix in file for file in files):
            return scope
    
    return 'general'

def main():
    # Obtener diff
    diff = get_git_diff()
    
    # Clasificar cambios
    classifications = classify_changes(diff)
    
    # Generar descripción de commit
    semantic_type, description = generate_commit_description(classifications)
    
    # Sugerir ámbito
    scope = suggest_scope(diff)
    
    # Mostrar información
    print(f"🔍 Análisis de Cambios:\n{diff}\n")
    print(f"✨ Tipo Semántico Sugerido: {semantic_type}")
    print(f"🏷️  Ámbito Sugerido: {scope}")
    print(f"📝 Descripción:\n{description}")
    
    # Preguntar confirmación
    try:
        confirm = input("\n¿Confirmar commit? (s/n): ").lower().strip()
        if confirm in ['s', 'si', 'y', 'yes']:
            commit_msg = f"{semantic_type}({scope}): {description.split(':\n')[0]}\n\n{description}"
            run_command(f"git add . && git commit -m '{commit_msg}'")
            print("✅ Commit realizado exitosamente")
        else:
            print("❌ Commit cancelado")
    except (KeyboardInterrupt, EOFError):
        print("\n❌ Commit cancelado")

if __name__ == '__main__':
    main()
