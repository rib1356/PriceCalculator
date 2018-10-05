<template>
  <transition name="modal-fade">
    <!-- <div class="modal-backdrop"> -->
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h5 class="header-title">
            Sign in to use admin page
            </h5>
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
              x
            </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="left">
              Email:
            </div>
            <div>  
              <input type="text" v-model="email" class="right">
            </div>
            <div class="left">
              Password:
            </div>
            <div>  
              <input type="password" v-model="password" class="right">
            </div>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-green" @click="close" aria-label="Close modal">
              Cancel
            </button>
            <button type="button" class="btn-green" @click="signIn" aria-label="Close modal">
              Sign In
            </button>
          </slot>
        </footer>
      </div>
    <!-- </div> -->
  </transition>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
 

  export default {
    name: 'modal',
    data() {
      return {
        email: '',   
        password: '', 
      }
    },
    methods: {
      close() {
        this.$emit('close');
        this.email = '';
        this.password = '';
      },
      signIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              //alert("connection sucessful");
              console.log("Login Sucessful")
              this.$router.replace('admin');
            },
            (err) => {
              alert("There was an error" + err) //Do more stuff with error handling
            }
          ); 
      }
    }
  }  
</script>

<style>

   .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    height: 50%;
    width: 25%;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-header {
    padding: 1%;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .header-title {
    margin-left: 5px;
    margin-top: 1px;
    margin-bottom: -1px;
  }

  .modal-footer {
    padding: 3%;
    display: flex;
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 15% 10px;
  }

  .btn-close {
    border: none;
    font-size: 17px;
    margin-right: 5px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .left {
    width: 30%;
    float: left;
    text-align: right;
    margin-bottom: 2px;
  }
  .right {
    width: 50%;
    margin-left: 10px;
    float:left;
    border: 1px solid #4AAE9B;
    margin-bottom: 2px;
  }

</style>