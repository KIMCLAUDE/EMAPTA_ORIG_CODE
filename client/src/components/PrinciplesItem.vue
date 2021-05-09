<template>
    <div class="Principle-Item" v-bind:class="{'is-modify':principle.is_modify}">
        <p class="Principle-Title">
            <!-- <input class="Principle-markModify" type="checkbox" v-on:click="$emit('mark-modify', principle.id)"> -->
            {{principle.title}}
        </p>
        <div class="principle-buttons">
            <button class="Principle-markModify" @click="$emit('mark-modify', principle.id)" @>UPDATE</button>
            <button class="del-btn" @click="$emit('del-principle', principle.id)">DELETE</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name : 'PrinciplesItem',
    props : ["principle"],
    methods: {
        /*markModify(){
            this.principle.is_modify = !this.principle.is_modify;
        }*/
    }
}
</script>

<style scoped>
    .Principle-Item{
        background-color:navy;
        padding: 20px;
        margin: 30px 0px;
        height: 150px;
        border-bottom: 1px #ccc dotted;
        max-width: 1024px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px;
    }

    .Principle-Title{  
        font-size: 25px;
        font-weight: 300;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color:white;
        text-align: left;
    }

     .is-modify{
        background:black;
    } 

    .Principle-markModify{
        height: 40px;
        width: 75px;
        color:white;
        background:orange;
        border-radius: 20px;
        margin-right: 5px;
    }

    .del-btn{
        height: 40px;
        width: 75px;
        color:white;
        background:red;
        border-radius: 20px;
        margin-left: 5px;  
    }

    .principle-buttons{
        float: right;
    }
</style>