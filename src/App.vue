<template >
	<div id="app">
    <link rel="icon" src="./assets/AHillandSonsLogo.png">
    <div>
      <b-nav tabs>  
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/editPage">Edit Page</b-nav-item>
        <b-nav-item to="/finalPage">Final Page</b-nav-item>
        <b-nav-item disabled:true to="/Admin">Admin</b-nav-item>
      </b-nav>
    </div>
  <router-view/>
	</div>
</template>

<script>
import TextReader from "@/components/TextReader";
import EditPage from "@/components/EditPage";
import Admin from "@/components/Admin";
import FinalDisplayPage from '@/components/FinalDisplayPage';
import modal from '@/components/modal';

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
    Admin,
    FinalDisplayPage,
    modal
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
  a.nav-link {
    color: #4AAE9B;
  }

</style>
