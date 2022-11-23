<template>
  <div>
    <NavBar v-if="showMenu"/>
    <RouterView />
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
export default {
  computed: {
    showMenu() {
      return this.$route.name !== 'Login' && this.$route.name !== 'Register';
    }
  },
  components: {
    NavBar,
  },
}

</script>

<style lang="scss" scoped></style>
