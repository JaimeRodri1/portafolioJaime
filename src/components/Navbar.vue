<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #91349b;">
    <a class="navbar-brand" >Mi portafolio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Portada</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/intro" class="nav-link">Introduccion</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/suma" class="nav-link">Sumario</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/jorna" class="nav-link">Jornalizacion</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/calen" class="nav-link">Calendarizacion</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Apuntes" class="nav-link">Apuntes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tareas" class="nav-link">Practicas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Evidencias" class="nav-link">Evidencias de evaluaciones</router-link>
        </li>
        
      </ul>
    </div>
  </nav>
</template>




