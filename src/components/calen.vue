
<template>
    <div class="container">
      <h2>Calendario</h2>
      <div class="row">
        <div class="col-md-4" v-for="(week, index) in calendar" :key="index">
          <ul class="list-group">
            <li class="list-group-item" v-for="(item, i) in week" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        data() {
        return {
            calendar: [
            [ "Introducción JavaScript - 16 al 22 de enero" ],
            [ "Bootstrap y VueJS  - 16 al 22 de enero", ],
            [ "Rendering declarativo, Directivas personalizadas y Representación de lista - 16 al 22 de enero", ],
            [ "Manejadores de eventos, Modificadores de eventos, Clases y estilos en tiempo real -  16 al 22 de enero", ],
            [ " Sistema de Componentes, Introducción al sistema de Componentes, Crear Componentes Custom -  13 al 19 de febrero", ],
            ],
        };
        },
    };
  </script>
  
  <style>
  ul {
    margin-bottom: 0;
  }
  </style>  
