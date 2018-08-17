<template>
  <div class="editPage">
    <p>CSV data displayed here</p>
    <textarea cols="25" rows="10" v-model="text"></textarea>
    <table id="changeMeTable">
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Root Type</th>
          <th>Height/Girth</th>
          <th>Quantity</th>
          <th>Buying Price</th>
          <th>Comment</th>
        </tr>
      </thead>
      <!-- <tbody>
        <tr v-bind:key="row" v-for="row in rows">
          <td>{{row.id}}</td>
          <td>{{row.name}}</td>
          <td>{{row.rootType}}</td>
          <td>{{row.height}}</td>
          <td>{{row.quantity}}</td>
          <td>{{row.buyPrice}}</td>
          <td>{{row.comments}}</td>
        </tr>
      </tbody> -->
    </table>
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
  methods: {

  },
  mounted(){
    this.text = sessionStorage.getItem('CSVdata');  //Displays data stored in sessionStorage
  }
}
</script>

<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(0, 0, 0, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>
