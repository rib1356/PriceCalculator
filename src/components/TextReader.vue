<template>
  <div class="textReader">
    <br>
    <b-alert variant="danger"
             dismissible
             fade
             :show="showAlert"
             @dismissed="showAlert=false">
      Please upload CSV files only!
    </b-alert>
     <b-alert variant="danger"
             dismissible
             fade
             :show="showAlert2"
             @dismissed="showAlert=false">
      Quanity/Buy Price may be empty please check the CSV file!
    </b-alert>
    <input type="file" @change="handleFileSelect" ref="fileInput">
    <button v-on:click="confirmEntry" :disabled="disabled">Confirm Entry</button> <br> <br>
    <p>
    <button v-on:click="clearStorage">Clear Storage</button>
    <button v-on:click="adminPage">Admin Page</button>
    <modal v-if="isModalVisible" @close="closeModal"/>
    </p>
    </div>
</template>

<script>
import Modal from './modal.vue';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'TextReader',
  components: {
    modal: Modal,
  },
  data() {
      return{
        showAlert: false,
        showAlert2: false,
        disabled: false,
        isModalVisible: false,
      }
  },
  head: {
    title: {
      inner: 'AHills Price Calculator'
    },
  },   
  methods: {
    handleFileSelect: function(evt) {
     
      var vm = this;
      var files = evt.target.files;  //FileList object
     
      if(files[0].name.includes(".csv")){ //Check to make sure only csv files are uploaded
        this.showAlert = false;
        this.showAlert2 = false;
        this.disabled = false;
		    for (var i = 0, f; f = files[i]; i++) { // Loop through the FileList 
		      var reader = new FileReader();
		      // Closure to capture the file information.
		      reader.onload = (function(theFile) {
			    return function(e) {
            var list = vm.parseCSVtoArrayofObjects(e.target.result, '\n', ','); //call the parse function with the proper line terminator and cell terminator
            sessionStorage.setItem('itemInfo', JSON.stringify(list)); //Save information as a string to sessionStorage
			  };
		    })(f);
        reader.readAsText(f); 
      }
      }else{ //If file is not a csv show an alert and disable to confirmation button
        this.showAlert = true;
        this.disabled = true;
      }
    },
    parseCSVtoArrayofObjects: function(text, lineTerminator, cellTerminator) {
    
    var listOfObjects = [];
    var lines = text.split(lineTerminator);  //break the lines apart into individual items
    
		for(var line = 0; line<lines.length -1; line++) { //CSV has an EOF with an empty line so this removes last row before saving
        if (lines[line] != "") {
		      var newItem = new this.saleItem();
          var information = lines[line].split(cellTerminator);
          newItem.item_id = line;
          newItem.name = information[0];
          if(information[0].includes("�")){ //Used to catch unknown character
            newItem.name = information[0].replace('�', '');
          };
			    newItem.container = information[1];
			    newItem.specification = information[2];
			    newItem.quantity = information[3];
          newItem.price = information[4];
          if(information[3] === "" || information[4] === ""){ //Checks to see if the quantity or prices are empty
            this.showAlert2 = true;
            this.disabled = true;
            this.reset();
          }
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
    clearStorage: function() {
      sessionStorage.clear(); //Clear the storage because new data will need to be entered
      console.log("SessionStorage cleared");
    },
    adminPage: function() {
      var user = firebase.auth().currentUser; //Get current user
      if (user) { //If user is logged in continue to the admin page
          this.$router.push('Admin');
        } else {
          this.showModal();
        }
    },
    reset: function() { //Resets the file input when a file cannot be uploaded
      const input = this.$refs.fileInput
      input.type = 'text'
      input.type = 'file'
    },
    showModal: function() {
      this.isModalVisible = true;
    },
    closeModal: function() {
      this.isModalVisible = false;
    },
  },
  mounted() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
  }
};
</script>



