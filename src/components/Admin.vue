<template>
    <div>
        <table class="minimalistBlack">
            <thead>
                <tr>
                    <th>Band</th>
                    <th>GPM Percent</th>
                    <th>Markup Percent</th>
                    <th>Row Minimum</th>
                    <th>Row Maximum</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="gpm of gpms" v-bind:key="gpm['.key']">
                    <template v-if="!gpm.edit">
                        <td>{{gpm.name}}</td>
                        <td>{{gpm.gpm}}%</td>
                        <td>{{(gpm.gpm/(100-gpm.gpm)*100).toFixed(2)}}%</td>
                        <td>{{gpm.rowMin}}</td>
                        <td>{{gpm.rowMax}}</td>
                        <td><button v-on:click="setEdit(gpm['.key'])">Edit GPM</button></td>
                    </template>
                    <template v-else> 
                        <td>{{gpm.name}}</td>
                        <td><input type="text" v-model="gpm.gpm" ></td>
                        <!-- <span v-if="errors.has('GPMs')">{{ errors.first('GPM') }}</span> name="GPM" v-validate="'numeric'" -->
                        <!-- <p v-if="errors.has('GPM')" class="alert-danger">{{ errors.first('gpm') }}</p> -->
                        <td><input type="text" v-model="gpm.gpm"></td>
                        <td><input type="text" v-model="gpm.rowMin"></td>
                        <td><input type="text" v-model="gpm.rowMax"></td>
                        <td><button v-on:click="saveEdit(gpm)">Save</button>
                            <button v-on:click="cancelEdit(gpm['.key'])">Cancel</button></td> 
                    </template>
                </tr>      
            </tbody>
        </table>   
    <button v-on:click="logout">Logout</button>
    <h4>Admin Page - Things to know</h4>
    <ul>
        <li>This page will still be accessable until you have logged out</li>
        <li>To see a change in markup value the GPM value needs to be changed </li>
        <li>When setting row values the Minimum value needs to be +1p on the previous row maximum</li>
        <li>BandI - When checking which gpm it will look between the min and max rowTotal values, 
            meaning the maximum it needs to be a high value</li>
    </ul>
    </div>
</template>

<script>
import { gpmRef } from '../main'
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    name: 'Admin',
    data() {
        return{
            gpm2: '',
        }
    },
    firebase() {
        return {
        gpms: gpmRef,
        }
    },
    methods: {
        submitGpm(){//:class="{'has-error': errors.has('GPM')}"
            gpmRef.push({name: this.gpm, edit: false, rowMin: 0, rowMax: 0});
        },
        setEdit(key){
            console.log("Edit Pressed");
            gpmRef.child(key).update({edit: true});
        },
        cancelEdit(key) {
            gpmRef.child(key).update({edit: false});
        },
        saveEdit(gpmValue){
            const key = gpmValue['.key']; //Get the unique id of the row thats been saved
            //Update the row 
            gpmRef.child(key).update({gpm: parseInt(gpmValue.gpm), edit: false, rowMin: parseFloat(gpmValue.rowMin), rowMax: parseFloat(gpmValue.rowMax)});
        },
        logout: function() { 
            firebase.auth().signOut().then(() => {
                console.log("Signed out");
                this.$router.replace('/');
            });
        },
    }
}
</script>

<style>
table.minimalistBlack {
  border: 1px solid #000000;
  width: 80%;
  text-align: left;
  border-collapse: collapse;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
table.minimalistBlack td, table.minimalistBlack th {
  border: 1px solid #000000;
  padding: 5px 4px;
}
table.minimalistBlack tbody td {
  font-size: 13px;
}
table.minimalistBlack thead {
  background: #CFCFCF;
  background: -moz-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
  background: -webkit-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
  background: linear-gradient(to bottom, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
  border-bottom: 1px solid #000000;
}
table.minimalistBlack thead th {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  text-align: left;
}
table.minimalistBlack tfoot td {
  font-size: 14px;
}

.alert-danger {
  color: red;
}
.has-error {
  border-color: red;
}
ul {
    text-align: center;
    list-style-position: inside;
}

</style>

