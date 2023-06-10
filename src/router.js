import {createRouter, createWebHistory } from 'vue-router';

import Portada from './components/porta.vue'
import Introduccion from './components/intro.vue'
import Sumario from './components/suma.vue'
import Jornalizacion from './components/jorna.vue'
import Calendarizacion from './components/calen.vue'
import Apuntes from './components/apuntes.vue'
import Evidencias from './components/evidencias.vue'
import Tareas from './components/tareas.vue'
import Home from './views/home.vue';
import Vista2 from './views/vista2.vue';



export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Portada',
            component: Portada
          },
          {
            path: '/intro',
            name: 'Introduccion',
            component: Introduccion
          },
          {
            path: '/suma',
            name: 'Sumario',
            component: Sumario
          },
          {
            path: '/jorna',
            name: 'Jornalizacion',
            component: Jornalizacion
          },
          {
            path: '/calen',
            name: 'Calendarizacion',
            component: Calendarizacion
          },
          {
            path: '/Apuntes',
            name: 'Apuntes',
            component: Apuntes
          },
          {
            path: '/tareas',
            name: 'Tareas',
            component: Tareas
          },
          {
            path: '/Evidencias',
            name: 'Evidencias de evaluaciones',
            component: Evidencias
          },
          {
            path: '/',
            name: 'Home',
            component: Home
          }, 
          {
            path: '/vista2',
            name: 'Vista2',
            component: Vista2
          }

    ]
});

