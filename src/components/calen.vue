
<template>
  <section class="data-section">
    <div class="container">
      <h2 class="section-title">Calendarizacion</h2>
      <div class="row">
        <div class="col-md-4">
          <h4 class="data-title">Computo 1</h4>
          <ul class="data-list">
            <li v-for="item in data.comp1" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4 class="data-title">Computo 2</h4>
          <ul class="data-list">
            <li v-for="item in data.comp2" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4 class="data-title">Computo 3</h4>
          <ul class="data-list">
            <li v-for="item in data.comp3" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {
        comp1: [
          { id: 1, name: 'SEMANA 1 (DEL 16 AL 22 DE ENERO)' },
          { id: 2, name: 'SEMANA 2 (DEL 23 AL 29 DE ENERO)' },
          { id: 3, name: 'SEMANA 3 (DEL 30 DE ENERO AL 05 DE FEBRERO)' },
          { id: 4, name: 'SEMANA 4 (DEL 06 AL 12 DE FEBRERO)' },
          { id: 5, name: 'SEMANA 5 (DEL 13 AL 19 DE FEBRERO)' },
          { id: 6, name: 'SEMANA 6 (DEL 20 AL 26 DE FEBRERO)' }
        ],
        comp2: [
        { id: 1, name: 'SEMANA 7 (DEL DE FEBRERO A 05 DE MARZO)' },
          { id: 2, name: 'SEMANA 8 (DEL 06 AL 12 DE MARZO)' },
          { id: 3, name: 'SEMANA 9 (DEL 13 AL 19 DE MARZO)' },
          { id: 4, name: 'SEMANA 10 (DEL 20 AL 26 DE MARZO)' },
          { id: 5, name: 'SEMANA 11 (DEL 27 DE MARZO AL 02 DE ABRIL)' },
          { id: 6, name: 'SEMANA 12 (DEL 10 AL 16 DE ABRIL)' },
          { id: 7, name: 'SEMANA 13 (DEL 17 AL 23 DE ABRIL)' }
        ],
        comp3: [
        { id: 1, name: 'SEMANA 14 (DEL 24 AL 30 DE ABRIL)' },
          { id: 2, name: 'SEMANA 15 (DEL 02 AL 07 DE MAYO )' },
          { id: 3, name: 'SEMANA 16 (DEL 08 AL 14 DE MAYO )' },
          { id: 4, name: 'SEMANA 17 (DEL 15 AL 21 DE MAYO )' },
          { id: 5, name: 'SEMANA 18 (DEL 22 AL 28 DE MAYO )' },
          { id: 6, name: 'SEMANA 19 (DEL 29 DE MAYO AL 04 DE JUNIO)' }
        ]
      }
    };
  }
};
</script>

<style>
.data-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.section-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}

.data-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.data-list {
  list-style: none;
  padding: 0;
}

.data-list li {
  margin-bottom: 10px;
}
</style>




