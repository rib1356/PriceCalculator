<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
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
            <button type ="button" class="btn-green" @click="resetPass">Reset Password </button>
            <button type="button" class="btn-green" @click="close">
              Cancel
            </button>
            <button type="button" class="btn-green" @keyup.enter="signIn" @click="signIn">
              Sign In
            </button>
          </slot>
        </footer>
      </div>
    </div>
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
        modalOpen: false,
      }
    },
    methods: {
      close: function() {
        this.$emit('close');
        this.email = '';
        this.password = '';
        this.modalOpen = false;
        console.log("Modal closing:" + this.modalOpen);
      },
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              console.log("Login Sucessful")
              this.$router.replace('admin');
            },
            (err) => {
              alert("There was an " + err) //Do more stuff with error handling
            }
          ); 
      },
      enterKeyListener: function(evt) { //Function to allow for the enter key to be pressed to sign in
        if(this.modalOpen && evt.keyCode === 13) {
          this.signIn();
        }
      },
      resetPass: function() {
        if(this.email === ''){
          alert("There was an Error: Email field empty, please enter email and then press reset password");
        } else {
        firebase.auth().sendPasswordResetEmail(this.email).then(function() {
          alert("A reset password email has been sent")
        }).catch(function(error) {
          alert("There was an " + error);
        });
      }
      }
    },
    mounted() {
        this.modalOpen = true;
        console.log("Modal loaded on click:" + this.modalOpen)
    },
    created: function() {
        document.addEventListener('keyup', this.enterKeyListener);
    },
    destroyed: function() {
        document.removeEventListener('keyup', this.enterKeyListener);
    },
  }  
</script>

<style>

   .modal {
    background: #FFFFFF !important;
    box-shadow: 2px 2px 20px 1px !important;
    overflow-x: auto !important;
    display: flex !important;
    height: 50% !important;
    width: 25% !important;
    flex-direction: column ;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto ;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3) !important; 
    display: flex ;
    justify-content: center;
    align-items: center;
  }

  .modal-header {
    padding: 1% !important;
    display: flex;
    border-bottom: 1px solid #eeeeee !important;
    color: #4AAE9B !important;
    justify-content: space-between;
  }

  .header-title {
    margin-left: 5px;
    margin-top: 1px;
    margin-bottom: -1px;
  }

  .modal-footer {
    padding: 3%  !important;
    display: flex ;
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 15% 10px !important;
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