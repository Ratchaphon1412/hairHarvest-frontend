<template>
  <!--  Multi Select-->
    <VueMultiselect
        v-model="multiValue"
        :options="options"
        :multiple="true"
        :close-on-select="true"
        placeholder="Pick some"
        label="name"
        track-by="name"
    />
</template>

<script>
import VueMultiselect from 'vue-multiselect'
export default {
  components: { VueMultiselect },
  data () {
    return {
      multiValue: [],
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
