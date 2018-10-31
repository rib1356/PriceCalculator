<template>
  <div class="editPage">
    <vue-good-table id="table"
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table bordered condensed"
      style="border:1px solid #dcdfe6"
      max-height="700px"
      :fixed-header="true"
      :search-options="{ enabled: true }"
      :group-options="{ enabled: true, headerPosition: 'bottom' }">
    </vue-good-table>
    <div style="margin-top:10px">
      <p><button v-on:click="calcProfit">Calculate Profit</button> Total Profit: {{profit}} </p>
      <iframe name="print_frame" width="0" height="0" src="finalPage:blank"></iframe>
      <button v-on:click="printTable">Print Table</button>
    </div>  
  </div>    
</template>

<script>
export default {
  name: 'FinalPage',
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
          label: 'Row Total',
          field: 'rowTotal',
          type: 'number',
        },
        {
          label: 'GPM%',
          field: 'gpm',
          type: 'number',
          headerField: this.totalGPM
        },
        {
          label: 'Estimated Sell Price (based off rowTotals)',
          field: 'estimatedPrice',
          type: 'number',
          headerField: this.totalSellPrice
        },
      ],
      profit: 'Press button',
    }
  },
  head: {
    title: {
      inner: 'AHills Price Calculator'
    },
    link: [
      { rel:"stylesheet", type:"text/css", href:"/static/print.css", media: "print" },
    ]
  },  
  methods: {
    displayItems: function(itemList, itemSalePrices) {
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
            rowTotal: itemSalePrices[i].rowTotal,
            gpm: itemSalePrices[i].gpm,
            estimatedPrice: itemSalePrices[i].estimatedPrice,
      });
    }
    }, //Cant find a way around having these two functions as duplicates as they need to display on seperate columns
    totalQuantity: function(rowObj) {
    let totalQuantity = 0;
    for (let i = 0; i < rowObj.children.length; i++) { //Loops through the quantity column and displays on the footer
      totalQuantity += rowObj.children[i].quantity;
    }
    return totalQuantity;
    },
    totalBuyPrice: function(rowObj) {
    let totalBuyPrice = 0;
    for (let i = 0; i < rowObj.children.length; i++) {
      totalBuyPrice += (rowObj.children[i].quantity * rowObj.children[i].buyPrice);
    }
    this.totalBuyPrice = totalBuyPrice.toFixed(2);
    return totalBuyPrice;
    },
    totalSellPrice: function(rowObj) {
    let totalSellPrice = 0;
    for (let i = 0; i < rowObj.children.length; i++) {
      totalSellPrice += (rowObj.children[i].quantity * rowObj.children[i].estimatedPrice);
    }
    this.totalSellPrice = totalSellPrice.toFixed(2);
    return totalSellPrice.toFixed(2);
    },
    totalGPM: function(rowObj) {
    let totalGPM = 0;
    for (let i = 0; i < rowObj.children.length; i++) {
      totalGPM += (rowObj.children[i].gpm / rowObj.children.length) ;
    }
    return totalGPM.toFixed(2);
    },
    calcProfit: function() {
      this.profit = (this.totalSellPrice - this.totalBuyPrice).toFixed(2);
    },
    printTable: function() {
      
      //document.getElementById("print_frame").contentWindow.print();
      // var printContents = document.getElementById(divName).innerHTML;
      // var originalContents = document.body.innerHTML;
      // document.body.innerHTML = printContents;

      // window.print();

      // document.body.innerHTML = originalContents;
      window.frames["print_frame"].document.body.innerHTML = document.getElementById("table").innerHTML;
      window.frames["print_frame"].window.focus();
      window.frames["print_frame"].window.print();
    },
  },
  mounted() {
    var itemList = JSON.parse(sessionStorage.getItem('itemInfo'));  
    var itemSalePrices = JSON.parse(sessionStorage.getItem('itemSalePrices'));
    this.displayItems(itemList, itemSalePrices);
  }
}
</script>

<style type="text/css">

@media screen {
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
}
</style>


