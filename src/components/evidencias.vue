<template>
    <div class="image-gallery">
      <h2>Galería de imágenes</h2>
      <div class="row">
        <div class="col-md-4" v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" class="img-fluid">
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        data() {
        return {
            images: [
            { src: "\assets\lab.jpg"},
            { src: "path/to/image2.jpg"},
            { src: "path/to/image3.jpg"},
            { src: "path/to/image4.jpg"},
            ],
        };
        },
    };
  </script>
  
  <style scoped>
  .image-gallery {
    margin-top: 20px;
  }
  </style>
  