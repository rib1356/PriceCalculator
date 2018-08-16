<template>
  <div class="editPage">
    <p>CSV data displayed here</p>
    <textarea cols="25" rows="10" v-model="text"></textarea>
  </div>
</template>

<script>
export default {
  name: 'EditPage',
  data() {
    return {
      text: ''
    }
  },
  mounted(){
    this.text = sessionStorage.getItem('CSVdata');
  }
}
</script>