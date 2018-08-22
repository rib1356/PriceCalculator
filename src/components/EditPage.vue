<template>
  <div class="editPage">
    <!-- <input type="text" v-model="search" class="form-control"> -->
    <!-- <b-table striped hover :items="items" :fields="fields"></b-table> -->
    <table-component :data="items" class="table table-hover" show-filter="false">
     <table-column show="id" label="Id" data-type="numeric"></table-column>
     <table-column show="name" label="Name"></table-column>
     <table-column show="container" label="Container"></table-column>
     <table-column show="specification" label="Specification"></table-column>
     <table-column show="quantity" label="Quantity" data-type="numeric"></table-column>
     <table-column show="buyPrice" label="Buy Price" data-type="numeric"></table-column>
     <table-column show="comments" label="Comment" :sortable="false" :filterable="false"></table-column>
     <template slot="tfoot" slot-scope="{ rows }">
        <tr>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>Total Quantity: {{ rows.reduce((sum, value) => { return sum + value.data.quantity; }, 0) }}</th>
          <th>Total Buy Price: {{ rows.reduce((sum, value) => { return sum + value.data.buyPrice; }, 0) }}</th>
          <th>&nbsp;</th>
        </tr>
    </template>
 </table-component>
  </div>
</template>

<script>
export default {
  name: 'EditPage',
  data() {
    return {
      items: [],
    }
  },
  methods: {
    displayItems: function(itemList){
      for(var i = 0; i < itemList.length; i++) { //Loop through the item list
          this.items.push({ //Push the items into an array and then display them on the table above
            id: parseInt(itemList[i].item_id),
            name: itemList[i].name, 
            container: itemList[i].container,
            specification: itemList[i].specification,
            quantity: parseInt(itemList[i].quantity), //Saving as an integer for table sorting etc
            buyPrice: parseFloat(itemList[i].price),
            comments: itemList[i].comments
      });
    }
    }
  },
  mounted(){
    var itemList = JSON.parse(sessionStorage.getItem('myList'));
    this.displayItems(itemList);
  }
}
</script>

<style>
*,
*:after,
*:before {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.table-component {
  display: flex;
  flex-direction: column;
  margin: 4em 0;
}

.table-component__filter {
  align-self: flex-end;
}

.table-component__filter__field {
  padding: 0 1.25em 0 .75em;
  height: 2.5em;
  border: solid 2px #e0e0e0;
  border-radius: 2em;
  font-size: inherit;
}

.table-component__filter__clear {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  color: #007593;
  font-weight: bold;
  cursor: pointer;
}

.table-component__filter__field:focus {
  outline: 0;
  border-color: #007593;
}

.table-component__table-wrapper {
  overflow-x: auto;
  margin: 1em 0;
  width: 100%;
  /* border: solid 1px #ddd; */
  border-bottom: none;
}

.table-component__table {
  min-width: 100%;
  border-collapse: collapse;
  /* border-bottom: solid 1px #ddd; */
  table-layout: fixed;
}

.table-component__table__caption {
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

.table-component__table th,
.table-component__table td {
  padding: .75em 1.25em;
  vertical-align: top;
  text-align: left;
}

.table-component__table th {
  background-color: #e0e0e0;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: .85em;
}

/* .table-component__table tbody tr:nth-child(even) {
  background-color: #f0f0f0;
} */

.table-component__table a {
  color: #007593;
}

.table-component__message {
  color: #999;
  font-style: italic;
}

.table-component__th--sort,
.table-component__th--sort-asc,
.table-component__th--sort-desc {
  text-decoration: underline;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.table-component__th--sort-asc:after,
.table-component__th--sort-desc:after {
  position: absolute;
  left: .25em;
  display: inline-block;
}

.table-component__th--sort-asc:after {
  content: '↑';
}

.table-component__th--sort-desc:after {
  content: '↓';
}
</style>

