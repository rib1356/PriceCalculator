<template>
  <label class="text-reader">
    <input type="file" @change="handleFileSelect">
    <button v-on:click="confirmEntry">Confirm Entry</button> <br>
    <button v-on:click="manualEntry">Enter Manually</button> <br>
  </label>
</template>

<script>
export default {
  name: 'TextReader',
  data() {
      return{
        //Nothing
      }
  },  
  methods: {
    handleFileSelect: function(evt) {
     
      var vm = this;
      var files = evt.target.files;  //FileList object

		  // Loop through the FileList 
		  for (var i = 0, f; f = files[i]; i++) {
		    var reader = new FileReader();
		    // Closure to capture the file information.
		    reader.onload = (function(theFile) {
			  return function(e) {
			  //call the parse function with the proper line terminator and cell terminator
        var list = vm.parseCSVtoArrayofObjects(e.target.result, '\n', ',');
        sessionStorage.setItem('myList', JSON.stringify(list)); //Save information as a string to sessionStorage
			};
		  })(f);
		  // Read the file as text
      reader.readAsText(f); 
    }
    },
    parseCSVtoArrayofObjects: function(text, lineTerminator, cellTerminator){
    
    var vm = this;
    var listOfObjects = [];
    var lines = text.split(lineTerminator);  //break the lines apart into individual items
    console.log(lines);

		for(var line = 0; line<lines.length -1; line++) { //CSV has an EOF with an empty line so this removes last row before saving
        if (lines[line] != "") {
		      var newItem = new vm.saleItem();
          var information = lines[line].split(cellTerminator);
          newItem.item_id = line;
		      newItem.name = information[0];
			    newItem.container = information[1];
			    newItem.specification = information[2];
			    newItem.quantity = information[3];
			    newItem.price = information[4];
          newItem.comments = information[5];
			  }
          var length = listOfObjects.push(newItem);
    }
    return listOfObjects;
    },
    saleItem: function(name,container,specification,quantity,price,comments){
      //This function defines a sales item
      var item_id,name,container,specification,quantity,price,comments;
    },   
    confirmEntry: function() {
      console.log("Data saved to session storage");
      this.$router.push('editPage'); //After button press move to next page
    },
    manualEntry: function() {
      sessionStorage.clear(); //Clear the storage because new data will need to be entered
      this.$router.push('editPage');
    }
  },
  mounted(){
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
  }
};
</script>

