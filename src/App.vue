<template >
	<div id="app">
    <link rel="icon" src="./assets/AHillandSonsLogo.png">
    <div>
      <b-nav tabs>  
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/editPage">Edit Page</b-nav-item>
        <b-nav-item to="/finalPage">Final Page</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-nav>
    </div>
  <router-view/>
	</div>
</template>

<script>
import TextReader from "@/components/TextReader";
import EditPage from "@/components/EditPage";       //Does this need to be added here?
import About from "@/components/About";
import FinalDisplayPage from '@/components/FinalDisplayPage'

export default {
  name: "app",
  data() {
    return {
      text: ""
    }
  },
  head: {
    title: {
      inner: 'AHills Price Calculator'
    },
    link: [
      // { rel:"icon", type:"image/png", href:"/assets/logo.png" }
    ]
  },   
  components: {
    TextReader,
    EditPage,
    About,
    FinalDisplayPage
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
  margin-top: 10px;
}
</style>
