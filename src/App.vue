<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
</script>

<style lang="scss"></style>
