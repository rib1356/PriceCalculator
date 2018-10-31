<template>
  <div class="editPage">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table bordered condensed"
      style="border:2px solid #dcdfe6"
      max-height="700px"
      :fixed-header="true"
      :search-options="{ enabled: true }"
      :group-options="{ enabled: true, headerPosition: 'bottom' }">
     </vue-good-table>
     <br>
     <button v-on:click="confirmEntry">Confirm Entry</button>
   
  </div>    
</template>

<script>

import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'EditPage',
  data() {
    return {
      rows: [
        {
          specification: 'Column Totals',
          quantity: '',
          buyPrice: '',
          children: []
        }
      ],
      items: [],
      columns: [
        {
          label: 'Id',
          field: 'id',
          type: 'number',
          width: '25px'
        },
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Container',
          field: 'container',       
        },
        {
          label: 'Specification',
          field: 'specification'        
        },
        {
          label: 'Quantity',
          field: 'quantity',
          type: 'number',
          headerField: this.totalQuantity
        },
        {
          label: 'Buy Price',
          field: 'buyPrice',
          type: 'decimal',
          headerField: this.totalBuyPrice
        },
        {
          label: 'Substitutes',
          field: 'comments',
          sortable: false,
          globalSearchDisabled: true
        }
      ]   
    }
  },
  head: {
    title: {
      inner: 'AHills Price Calculator'
    },
  }, 
  methods: {
    displayItems: function(itemList) {
      for(var i = 0; i < itemList.length; i++) { //Loop through the item list
          //Using "Rows[0]" to first access the parent array so running totals work
          this.rows[0].children.push({ //Push the items into an array and then display them on the table above
            id: parseInt(itemList[i].item_id),
            name: itemList[i].name, 
            container: itemList[i].container,
            specification: itemList[i].specification,
            quantity: parseInt(itemList[i].quantity), //Saving as an integer for table sorting etc
            buyPrice: parseFloat(itemList[i].price),
            comments: itemList[i].comments
      });
    }
    }, //Cant find a way around having these two functions as duplicates as they need to display on seperate columns
    totalQuantity: function(rowObj) { //Calculate the column totals
      let totalQuantity = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        totalQuantity += rowObj.children[i].quantity;
    }
    return totalQuantity;
    },
    totalBuyPrice: function(rowObj) {
      let totalBuyPrice = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        totalBuyPrice += (rowObj.children[i].quantity * rowObj.children[i].buyPrice);
    }
    return totalBuyPrice;
    },
    createSalesPrices: function() {
        var ref = firebase.database().ref("GPM/");
        var itemList = JSON.parse(sessionStorage.getItem('itemInfo'));
        var listOfObjects = [];
      
      for(var i = 0; i < itemList.length; i++) { //Loop through the item list
        var newItemPrices = new this.saleItemPrices();
        var rowTotal = (itemList[i].quantity*itemList[i].price).toFixed(2); //Calculate the row total so that the price band can be chosen
        newItemPrices.rowTotal = rowTotal; //Add the RowTotal to the object to be saved in sessionStorage
        //Firebase function to loop through each of the possible price bands
        ref.on("value", function(snapshot) {
              snapshot.forEach(function(child){   
                    if(rowTotal >= child.val().rowMin && rowTotal <= child.val().rowMax) //Check where RowTotal falls to decide what GPM to apply to the price
                        {
                            newItemPrices.estimatedPrice = (itemList[i].price/((100-child.val().gpm)/100)).toFixed(2); //Calculate the estimated price by finding which GPM band it should be using then applying the formula
                            newItemPrices.gpm = child.val().gpm; //Set the GPM to be = to whichever band it falls into    
                        }
            }); 
            }, function (error) {
                console.log("Error: " + error.code);
        });
        listOfObjects.push(newItemPrices);
      }
        return listOfObjects
    },
    saleItemPrices: function(rowTotal, estimatedPrice, gpm) {
      var rowTotal, estimatedPrice, gpm; //Defines the set price bands an item can have
    },
    confirmEntry: function() { //Handle the button press
      var salePricesObject = this.createSalesPrices();
      sessionStorage.setItem('itemSalePrices', JSON.stringify(salePricesObject))
      this.$router.push('finalPage'); //After button press move to next page
    },
  },
  mounted() {
    var itemList = JSON.parse(sessionStorage.getItem('itemInfo'));
    this.displayItems(itemList);
  }
}
</script>

<style>
/* Vue Good Table OVERRIDES */
/* PAGE NEEDS TO BE REFRESHED IF CHANGING SCREENS */
table.vgt-table.vgt-fixed-header {
    position: relative !important;
}

table.vgt-table.vgt-fixed-header th:last-child {
    /* Offset for the scrollbar */
    width: calc(100% + 20px) !important;
}

table.vgt-table:not(.vgt-fixed-header) > thead {
    /* Collapse the first row which is the un-fixed table header */
    visibility: collapse !important;
}

</style>
