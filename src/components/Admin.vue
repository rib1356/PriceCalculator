<template>
    <div>
        <p>This page will be used for the admin preferences!</p>
        <p>Currently just populating the page navigation</p>
        <!-- <li v-bind:key="gpm" v-for="gpm in gpms">
            {{gpm}}
        </li> -->
        <label>GPM:</label>
        <input type="text" v-model="gpm">
        <button v-on:click="submitGpm">add</button>
        <table class="minimalistBlack">
            <thead>
                <tr>
                    <th>Band</th>
                    <th>GPM Percent</th>
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
                        <td>{{gpm.rowMin}}</td>
                        <td>{{gpm.rowMax}}</td>
                        <td><button v-on:click="setEdit(gpm['.key'])">Edit GPM</button></td>
                    </template>
                    <template v-else> 
                        <td>{{gpm.name}}</td>
                        <td><input type="text" v-model="gpm.gpm"></td>
                        <td><input type="text" v-model="gpm.rowMin"></td>
                        <td><input type="text" v-model="gpm.rowMax"></td>
                        <td><button v-on:click="saveEdit(gpm)">Save</button>
                            <button v-on:click="cancelEdit(gpm['.key'])">Cancel</button></td> 
                    </template>
                </tr>      
            </tbody>
        </table>
        <!-- <div>
            <ul>
            <li v-for="gpm of gpms" v-bind:key="gpm['.key']">
                <div v-if="!gpm.edit">
                {{gpm.name}} - {{gpm.gpm}}%
                <button v-on:click="setEdit(gpm['.key'])">Edit GPM</button>
                </div>
                <div v-else>
                    <input type="text" v-model="gpm.gpm">
                    <button v-on:click="saveEdit(gpm)">Save</button>
                    <button v-on:click="cancelEdit(gpm['.key'])">Cancel</button>
                </div>
            </li>
            </ul>
        </div> -->
    </div>
     
</template>

<script>

import { gpmRef } from '../main'

export default {
    name: 'Admin',
    data() {
        return{
            gpm: '',
        }
    },
    firebase() {
        return {
        gpms: gpmRef,
        }
    },
    methods: {
        submitGpm(){
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
            const key = gpmValue['.key'];
            gpmRef.child(key).update({gpm: gpmValue.gpm, edit: false, rowMin: gpmValue.rowMin, rowMax: gpmValue.rowMax});
        }
    }
}
</script>

<style>
table.minimalistBlack {
  border: 2px solid #000000;
  width: 80%;
  text-align: center;
  border-collapse: collapse;
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
  border-bottom: 2px solid #000000;
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
</style>

