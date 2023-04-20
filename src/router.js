import {createRouter, createWebHistory } from 'vue-router';

import Portada from './components/porta.vue'
import Introduccion from './components/intro.vue'
import Sumario from './components/suma.vue'
import Jornalizacion from './components/jorna.vue'
import Calendarizacion from './components/calen.vue'
import Apuntes from './components/apuntes.vue'
import Tareas from './components/tareasex.vue'
import Evidencias from './components/evidencias.vue'
import ProyectoIntegrador from './components/proyecint.vue'
import Home from './views/home.vue';
import Vista2 from './views/vista2.vue'



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
            name: 'Tareas ex-aula',
            component: Tareas
          },
          {
            path: '/Evidencias',
            name: 'Evidencias de evaluaciones',
            component: Evidencias
          },
          {
            path: '/Proyec',
            name: 'Proyecto integrador',
            component: ProyectoIntegrador
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

/*
listado de vistas. 
    Home -> en esta se mostraran la vista de la portada

    Introduction -> se mostrará la vista de la introducción

    Sumario de Contenidos -> la vista del sumario de contenidos (resumenes)

    Jornalizacion -> Fechas de las actividades

    Apuntes -> capturas de los apuntes tomados durante la clase

    Practicas -> Capturas de las prácticas realizadas

    Tareas Exaula -> Exposición realizada en pareja (agregar asignación, y algunas vistas)

    Investigaciones -> fuentes externas consultadas

    Pepeletas y evidencias eva -> capturas de canvas



*/