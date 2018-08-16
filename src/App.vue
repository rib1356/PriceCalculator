<template>
	<div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/editPage">Edit Page</router-link>
    </nav>    
    <br>
    <router-view/>
	</div>
  
</template>

<script>
import TextReader from "@/components/TextReader";
import EditPage from "@/components/EditPage";       //Does this need to be added here?

export default {
  name: "app",
  data() {
    return {
      text: ""
    }
  }, 
  components: {
    TextReader,
    EditPage
  }
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
