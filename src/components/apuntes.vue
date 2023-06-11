
<template>
  <section class="notes-section">
    <div class="container">
      <h2 class="section-title">Apuntes</h2>
      <div class="notes-list">
        <div class="card" v-for="note in notes" :key="note.id">
          <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text">{{ note.description }}</p>
            <a :href="note.fileUrl" class="btn btn-dark">Ver</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        {
          id: 1,
          title: 'Computo 1',
          description: 'Aqui se incluye los temas importantes del computo',
          fileUrl: 'src/assets/pdfs/Computo1.pdf'
        },
        {
          id: 2,
          title: 'Computo 2',
          description: 'Aqui se incluye los temas importantes del computo',
          fileUrl: 'src/assets/pdfs/Computo2.pdf'
        },
        {
          id: 3,
          title: 'Computo 3',
          description: 'Aqui se incluye los temas importantes del computo',
          fileUrl: 'src/assets/pdfs/Computo3.pdf'
        }
      ]
    };
  }
};
</script>

<style>
.notes-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.section-title {
  font-size:40px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}

.card {
  margin-bottom: 10px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0069d9;
}
</style>






