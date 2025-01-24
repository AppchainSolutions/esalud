<!-- DebugExample.vue -->
<template>
  <div class="debug-example">
    <h2>Ejemplos de Debug</h2>
    <div class="buttons">
      <button @click="testInfo" class="btn btn-info">Test Info</button>
      <button @click="testSuccess" class="btn btn-success">Test Success</button>
      <button @click="testWarning" class="btn btn-warning">Test Warning</button>
      <button @click="testError" class="btn btn-danger">Test Error</button>
      <button @click="testApi" class="btn btn-primary">Test API</button>
      <button @click="testCompleteFlow" class="btn btn-dark">Test Complete Flow</button>
    </div>
  </div>
</template>

<script setup>
import { debugHelpers, debugApi, debugComponents, debugStore } from '@/utils/debug';

const testInfo = () => {
  debugHelpers.info('Esto es un mensaje informativo', { 
    user: 'John Doe',
    action: 'login',
    timestamp: new Date()
  });
};

const testSuccess = () => {
  debugHelpers.success('Operación completada exitosamente', {
    operation: 'save_patient',
    id: 123,
    duration: '2.3s'
  });
};

const testWarning = () => {
  debugHelpers.warning('Datos incompletos detectados', {
    missing_fields: ['phone', 'address'],
    severity: 'medium'
  });
};

const testError = () => {
  debugHelpers.error('Error al procesar la solicitud', {
    error: new Error('Network timeout'),
    request_id: 'abc-123',
    status: 500
  });
};

const testApi = () => {
  debugApi.log('Realizando petición API', {
    method: 'GET',
    url: '/api/pacientes/search',
    params: { query: 'test' }
  });
};

const testCompleteFlow = async () => {
  // Simular un flujo completo de operación
  debugComponents.info('Iniciando flujo de búsqueda');
  
  debugStore.info('Verificando estado actual', { 
    currentView: 'search',
    filters: { active: true }
  });
  
  debugApi.info('Preparando petición API');
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  debugApi.success('Respuesta recibida', {
    status: 200,
    data: { items: [1, 2, 3] }
  });
  
  debugStore.success('Estado actualizado');
  
  debugComponents.success('Flujo completado exitosamente');
};
</script>

<style scoped>
.debug-example {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;
}

.btn-info { background-color: #3498db; }
.btn-success { background-color: #2ecc71; }
.btn-warning { background-color: #f1c40f; }
.btn-danger { background-color: #e74c3c; }
.btn-primary { background-color: #9b59b6; }
.btn-dark { background-color: #34495e; }

.btn:hover {
  opacity: 0.9;
}
</style>
