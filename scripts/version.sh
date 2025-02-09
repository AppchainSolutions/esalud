#!/bin/bash

# Script para gestionar el versionado del proyecto

VERSION_FILE="VERSION"
CHANGELOG_FILE="CHANGELOG.md"

# Función para sugerir la próxima versión basada en commits
suggest_version() {
    current_version=$(cat $VERSION_FILE)
    IFS='.' read -r major minor patch <<< "$current_version"
    
    # Buscar commits desde el último tag
    last_tag=$(git describe --tags --abbrev=0 2>/dev/null || echo "none")
    
    if [ "$last_tag" = "none" ]; then
        commits=$(git log --format=%s)
    else
        commits=$(git log $last_tag..HEAD --format=%s)
    fi
    
    # Analizar commits
    has_breaking=false
    has_feat=false
    has_fix=false
    
    while IFS= read -r commit; do
        if [[ $commit == *"!:"* ]] || [[ $commit == "BREAKING CHANGE:"* ]]; then
            has_breaking=true
        elif [[ $commit == "feat:"* ]]; then
            has_feat=true
        elif [[ $commit == "fix:"* ]]; then
            has_fix=true
        fi
    done <<< "$commits"
    
    # Determinar incremento sugerido
    if [ "$has_breaking" = true ]; then
        echo "$((major + 1)).0.0"
    elif [ "$has_feat" = true ]; then
        echo "$major.$((minor + 1)).0"
    elif [ "$has_fix" = true ]; then
        echo "$major.$minor.$((patch + 1))"
    else
        echo "$major.$minor.$((patch + 1))"
    fi
}

# Función para validar el formato de versión
validate_version() {
    if [[ ! $1 =~ ^[0-9]+\.[0-9]+\.[0-9]+(-((alpha|beta|rc)\.[0-9]+)|)?$ ]]; then
        echo "Error: Formato de versión inválido. Use MAJOR.MINOR.PATCH(-PRERELEASE)"
        exit 1
    fi
}

# Función para incrementar la versión
bump_version() {
    local current_version=$(cat $VERSION_FILE)
    local new_version=$1
    
    validate_version $new_version
    
    # Actualizar VERSION
    echo $new_version > $VERSION_FILE
    
    # Actualizar package.json
    if [ -f "package.json" ]; then
        sed -i "s/\"version\": \".*\"/\"version\": \"$new_version\"/" package.json
    fi
    
    # Actualizar composer.json
    if [ -f "composer.json" ]; then
        sed -i "s/\"version\": \".*\"/\"version\": \"$new_version\"/" composer.json
    fi
    
    # Crear entrada en CHANGELOG.md
    local date=$(date +%Y-%m-%d)
    sed -i "1i\\\n## [$new_version] - $date\n" $CHANGELOG_FILE
    
    # Crear commit y tag
    git add $VERSION_FILE package.json composer.json $CHANGELOG_FILE
    git commit -m "build: bump version to $new_version"
    git tag -a "v$new_version" -m "Release version $new_version"
    
    echo "Version actualizada a $new_version"
}

# Función para crear una rama de release
create_release_branch() {
    local version=$1
    validate_version $version
    
    git checkout develop
    git checkout -b "release/v$version"
    echo "Rama release/v$version creada"
}

# Función para finalizar un release
finish_release() {
    local version=$1
    validate_version $version
    
    # Merge a main
    git checkout main
    git merge --no-ff "release/v$version" -m "Release version $version"
    
    # Merge a develop
    git checkout develop
    git merge --no-ff "release/v$version" -m "Release version $version"
    
    # Eliminar rama de release
    git branch -d "release/v$version"
    
    # Push de cambios y tags
    git push origin main develop "v$version"
    
    echo "Release v$version finalizado"
}

# Mostrar ayuda
show_help() {
    echo "Uso: $0 <comando> [argumentos]"
    echo ""
    echo "Comandos:"
    echo "  bump <version>     - Incrementar versión (ej: 1.2.3)"
    echo "  release <version>  - Crear rama de release"
    echo "  finish <version>   - Finalizar release"
    echo "  help              - Mostrar esta ayuda"
}

# Procesar comandos
case "$1" in
    "suggest")
        suggested=$(suggest_version)
        echo "Versión actual: $(cat $VERSION_FILE)"
        echo "Versión sugerida basada en commits: $suggested"
        echo "
Análisis basado en:"
        echo "- MAJOR: commits con '!' o 'BREAKING CHANGE:'"
        echo "- MINOR: commits que comienzan con 'feat:'"
        echo "- PATCH: commits que comienzan con 'fix:' u otros"
        ;;
    "bump")
        if [ -z "$2" ]; then
            echo "Error: Debe especificar una versión"
            exit 1
        fi
        bump_version $2
        ;;
    "release")
        if [ -z "$2" ]; then
            echo "Error: Debe especificar una versión"
            exit 1
        fi
        create_release_branch $2
        ;;
    "finish")
        if [ -z "$2" ]; then
            echo "Error: Debe especificar una versión"
            exit 1
        fi
        finish_release $2
        ;;
    "help"|*)
        show_help
        ;;
esac
