



<template>
    <header id="header" class="fixed-top">
      <Navbar/>
    </header>
    <router-view />

</template>

<script>
  import Navbar from "../src/components/Navbar.vue";

  export default {
    components: {
      Navbar,
    },
  };
</script>
