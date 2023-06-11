
<template>
   
  <section class="summary-section">
    <div class="container">

      <h2 class="section-title">Contenidos vistos(computo 1)</h2>
      <ul class="list">
        <li class="list-item">-JavaScript - Introducción a JavaScript</li>
        <li class="list-item">-Bootstrap-Vuejs</li>
        <li class="list-item">-Rendering declarativo_Directivas</li>
        <li class="list-item">-Eventos_Clases</li>
        <li class="list-item">-Componentes en vue.js</li>

      </ul>
      
      <h2 class="section-title">Contenidos vistos(computo 2)</h2>
      <ul class="list">
        <li class="list-item">-Introducción al desarrollo con PHP </li>
        <li class="list-item">-loops_arrays_functions</li>
        <li class="list-item">-Introducción a POO</li>
        <li class="list-item">-Clases Abstratas e Interfaces</li>
        <li class="list-item">-Introducción a Laravel</li>
        <li class="list-item">-CRUD con Laravel</li>
        
      </ul>

      <h2 class="section-title">Contenidos vistos(computo 3)</h2>
      <ul class="list">
        <li class="list-item">-Sistemas de Rutas y controladores</li>
        <li class="list-item">-Validación de datos</li>
        <li class="list-item">-API REST con Laravel</li>
        <li class="list-item">-Autenticación API REST con Laravel</li>
        <li class="list-item">-Consumo de API REST</li>
        <li class="list-item">-Autenticacion con proveedores</li>
        
      </ul>
    </div>
  </section>
</template>

<style>
.summary-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.title {
  font-size: 75px;
}
.section-title {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}

.list {
  max-width: 600px;
  margin: 150px;
}

.list-item {
  font-size: 20px;
  font-weight: bold;
  padding: 15px 20px;
  border: none;
  background-color: #fff;
}

.list-item:not(:last-child) {
  border-bottom: 1px solid #e9ecef;
}

.list-item:hover {
  background-color: #f8f9fa;
  cursor: pointer;
}

.list-item.active {
  background-color: #007bff;
  color: #fff;
}

.list-item.active:hover {
  background-color: #0069d9;
}
</style>



  
  