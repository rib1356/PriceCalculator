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
      PriceBands: { //These will become changable in the future (hopefully this can be done)
        priceBandA: 46, //These values are coming from the priceCalculator spreadsheet
        priceBandB: 42,
        priceBandC: 35,
        priceBandD: 33,
        priceBandE: 29,
        priceBandF: 24,
        priceBandG: 21,
        priceBandH: 20,
        priceBandI: 19,
      },
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

      var itemList = JSON.parse(sessionStorage.getItem('itemInfo'));
      var listOfObjects = [];
      
      for(var i = 0; i < itemList.length; i++) { //Loop through the item list
        var newItemPrices = new this.saleItemPrices();
        //Create a new object to hold each of the different price bands of an item
        //This is going to be some repetitive code -- Is it possible to loop through the PriceBands?
        //But how to loop through and add to different items in the object?
        newItemPrices.bandA = (itemList[i].price/((100-this.PriceBands.priceBandA)/100)).toFixed(2);
        newItemPrices.bandB = (itemList[i].price/((100-this.PriceBands.priceBandB)/100)).toFixed(2);
        newItemPrices.bandC = (itemList[i].price/((100-this.PriceBands.priceBandC)/100)).toFixed(2);  
        newItemPrices.bandD = (itemList[i].price/((100-this.PriceBands.priceBandD)/100)).toFixed(2);  
        newItemPrices.bandE = (itemList[i].price/((100-this.PriceBands.priceBandE)/100)).toFixed(2);  
        newItemPrices.bandF = (itemList[i].price/((100-this.PriceBands.priceBandF)/100)).toFixed(2);  
        newItemPrices.bandG = (itemList[i].price/((100-this.PriceBands.priceBandG)/100)).toFixed(2);  
        newItemPrices.bandH = (itemList[i].price/((100-this.PriceBands.priceBandH)/100)).toFixed(2);  
        newItemPrices.bandI = (itemList[i].price/((100-this.PriceBands.priceBandI)/100)).toFixed(2);  

        var rowTotal = (itemList[i].quantity*itemList[i].price); //Calculate the row total so that the price band can be chosen
        newItemPrices.rowTotal = rowTotal.toFixed(2); //Sets the estimated price to be where the row total aligns -- Shows which GPM has been chosen for that row
        if (rowTotal > 0 && rowTotal <= 10)   { newItemPrices.estimatedPrice = newItemPrices.bandA, newItemPrices.gpm = this.PriceBands.priceBandA } else //If statements are pretty quick in Chrome
        if (rowTotal >= 10.01 && rowTotal <= 20) { newItemPrices.estimatedPrice = newItemPrices.bandB, newItemPrices.gpm = this.PriceBands.priceBandB } else
        if (rowTotal >= 20.01 && rowTotal <= 35) { newItemPrices.estimatedPrice = newItemPrices.bandC, newItemPrices.gpm = this.PriceBands.priceBandC } else
        if (rowTotal >= 35.01 && rowTotal <= 90) { newItemPrices.estimatedPrice = newItemPrices.bandD, newItemPrices.gpm = this.PriceBands.priceBandD } else
        if (rowTotal >= 90.01 && rowTotal <= 190) { newItemPrices.estimatedPrice = newItemPrices.bandE, newItemPrices.gpm = this.PriceBands.priceBandE } else
        if (rowTotal >= 190.01 && rowTotal <= 300) { newItemPrices.estimatedPrice = newItemPrices.bandF, newItemPrices.gpm = this.PriceBands.priceBandF } else
        if (rowTotal >= 300.01 && rowTotal <= 600) { newItemPrices.estimatedPrice = newItemPrices.bandG, newItemPrices.gpm = this.PriceBands.priceBandG } else
        if (rowTotal >= 600.01 && rowTotal <= 900) { newItemPrices.estimatedPrice = newItemPrices.bandH, newItemPrices.gpm = this.PriceBands.priceBandH } else
        { newItemPrices.estimatedPrice = newItemPrices.bandI, newItemPrices.gpm = this.PriceBands.priceBandI }
        listOfObjects.push(newItemPrices);
      }
        return listOfObjects
    },
    saleItemPrices: function(bandA, bandB, bandC, bandD, bandE, bandF, bandG, bandH, bandI, rowTotal, estimatedPrice, gpm) {
      var bandA, bandB, bandC, bandD, bandE, bandF, bandG, bandH, bandI, rowTotal, estimatedPrice, gpm; //Defines the set price bands an item can have
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
