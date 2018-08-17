<template>
  <label class="text-reader">
    <input type="file" @change="loadTextFromFile">
    <!-- <textarea rows="15" v-model="text"></textarea> -->
    <button v-on:click="confirmEntry">Confirm Entry</button> <br>
    <button v-on:click="manualEntry">Enter Manually</button> <br>
  </label>
</template>

<script>
export default {
  name: 'TextReader',
  data() {
      return{
          text: ''
      }
  },  
  methods: {
    loadTextFromFile : function(ev) {
      //The view model - allows for accessing data when in another scope
      var vm = this;
      const file = ev.target.files[0]; //Read the file passed from the input
      const reader = new FileReader();

      reader.onload = function(e) {
        sessionStorage.setItem('CSVdata', e.target.result); //Saves the uploaded data into sessionStorage
        vm.csvEditor(e.target.result);
      } 
      reader.readAsText(file);
    },
    csvEditor: function(csvText){
      //Creates an array of elements from the csv file
      var array = csvText.replace(/\n/g, " ").split(" "); //Replaces a newline with whitespace so a new element can be created for each row
      console.log("The Array: " + array);
      console.log(array[0]);

      sessionStorage.setItem('Array', JSON.stringify(array));

      // const [name, container, size, quantity, price] = array[0].split(',');
      // console.log(name);
      // console.log(container);
      // console.log(size);
      // console.log(quantity);
      // console.log(price);
      // var array2 = array[0].split(',');
      // console.log(array2[1]);

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
  mounted() { //Part of the view life cycle - Allows for code execution before load
    this.text = sessionStorage.getItem('CSVdata'); //Sets the text box to data saved in sessionStorage
  }
};
</script>

