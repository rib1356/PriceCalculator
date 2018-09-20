<template >
	<div id="app">
    <link rel="icon" src="./assets/AHillandSonsLogo.png">
    <div>
      <b-nav tabs>  
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/editPage">Edit Page</b-nav-item>
        <b-nav-item to="/finalPage">Final Page</b-nav-item>
        <b-nav-item to="/Admin">Admin</b-nav-item>
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
// import Firebase from 'firebase/app';
// import 'firebase/database';

// //Firebase Config
// let config = {
//     apiKey: "AIzaSyD84mR8U4ovC_raqYd6o_b9KDy3E8zQMks",
//     authDomain: "ahills-price-calculator.firebaseapp.com",
//     databaseURL: "https://ahills-price-calculator.firebaseio.com",
//     projectId: "ahills-price-calculator",
//     storageBucket: "ahills-price-calculator.appspot.com",
//     messagingSenderId: "607541047201"
//   }; 
// Firebase.initializeApp(config)
// export const db = Firebase.database()
// export const gpmRef = db.ref('GPM')

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
