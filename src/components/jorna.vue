<template>
  <section class="topics-section">
    <div class="container">
      <h2 class="section-title">Lista de Temas</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="topic in topics" :key="topic.id">
          {{ topic.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 1,
          name: 'Tema 1'
        },
        {
          id: 2,
          name: 'Tema 2'
        },
        {
          id: 3,
          name: 'Tema 3'
        }
      ]
    };
  }
};
</script>

<style>
.topics-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.section-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}

.list-group-item {
  font-size: 20px;
  font-weight: bold;
  padding: 15px 20px;
  border: none;
  background-color: #fff;
}

.list-group-item:not(:last-child) {
  border-bottom: 1px solid #e9ecef;
}
</style>