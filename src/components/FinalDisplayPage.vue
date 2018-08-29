<template>
  <div class="editPage">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table bordered condensed"
      max-height="500px"
      :fixed-header="true"
      :search-options="{ enabled: true }"
      :group-options="{ enabled: true, headerPosition: 'bottom' }">
     </vue-good-table>
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
          width: '250px'
        },
        {
          label: 'Container',
          field: 'container',      
          width: '60px' 
        },
        {
          label: 'Specification',
          field: 'specification',
          width: '50px'   
        },
        {
          label: 'Quantity',
          field: 'quantity',
          type: 'number',
          width: '35px', 
          headerField: this.totalQuantity
        },
        {
          label: 'Buy Price',
          field: 'buyPrice',
          type: 'decimal',
          width: '120px',
          headerField: this.totalBuyPrice
        },
        {
          label: 'Substitutes',
          field: 'comments',
          sortable: false,
          width: '150px',
          globalSearchDisabled: true
        },
        {
          label: 'Sell price A (50%)',
          field: 'sellPriceA',
          type: 'number',
        },
        {
          label: 'Sell price B (40%)',
          field: 'sellPriceB',
          type: 'number',
        },
        {
          label: 'Sell price C (25%)',
          field: 'sellPriceC',
          type: 'number',
        },
      ]   
    }
  },
  methods: {
    displayItems: function(itemList, itemSalePrices){
      for(var i = 0; i < itemList.length; i++) { //Loop through the item list
          //Using "Rows[0]" to first access the parent array so running totals work
          this.rows[0].children.push({ //Push the items into an array and then display them on the table above
            id: parseInt(itemList[i].item_id),
            name: itemList[i].name, 
            container: itemList[i].container,
            specification: itemList[i].specification,
            quantity: parseInt(itemList[i].quantity), //Saving as an integer for table sorting etc
            buyPrice: parseFloat(itemList[i].price),
            comments: itemList[i].comments,
            //Index of item Sale Prices will always be the same at the items data therefor you are able,
            //To loop through the different array using the same index to populate the table
            sellPriceA: itemSalePrices[i].bandA,
            sellPriceB: itemSalePrices[i].bandB,
            sellPriceC: itemSalePrices[i].bandC,
      });
    }
    }, //Cant find a way around having these two functions as duplicates as they need to display on seperate columns
    totalQuantity: function(rowObj) {
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
  },
  mounted(){
    var itemList = JSON.parse(sessionStorage.getItem('itemInfo'));
    var itemSalePrices = JSON.parse(sessionStorage.getItem('itemSalePrices'));
    this.displayItems(itemList, itemSalePrices);
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
