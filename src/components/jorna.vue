<template>
   
  <section class="summary-section">
    <div class="container">

      <h2 class="section-title">Programación de Evaluaciones Computo I</h2>
      <ul class="list">
        <li class="list-item">Semana 3- Laboratori 1-70% </li>
        <li class="list-item">Semana 4- Laboratorio 2- 80%</li>
        <li class="list-item">Semana 5- Entrega de repositorio GIT- Laboratorio 1-30% - Autoevaluación - Laboratorio 2- 10% - Coevaluación- Laboratorio 2- 10%</li>
        <li class="list-item">Semana 6- Parcial Computo I</li>

      </ul>
      
      <h2 class="section-title">Programación de Evaluaciones Computo II</h2>
      <ul class="list">
        <li class="list-item">Semana 10 - Laboratorio 1 - 70%</li>
        <li class="list-item">Semana 11 - Laboratorio II - 70%</li>
        <li class="list-item">Semana 12 - Autoevaluación (10% - Parcial II)</li>
        <li class="list-item">Semana 13 - Parcial Computo II (90% - parcial II) - Repositorio de Practicas (30% - Laboratorio I) - Portafolio del estudiante, continuación de proyecto con Vuejs (30% - Laboratorio II)</li>
        
      </ul>

      <h2 class="section-title">Programación de Evaluaciones Computo III</h2>
      <ul class="list">
        <li class="list-item">Semana 16 - Laboratorio I (30%)</li>
        <li class="list-item">Semana 18 - Evaluación práctica 40% (Laboratorio II)</li>
        <li class="list-item">Semana 20 - Proyecto parcial (90%) - Autoevaluación (10% parcial) - Portafolio computo III (70% - Laboratorio I) - Repositorio de practicas (60% - Laboratorio II)</li>
        
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