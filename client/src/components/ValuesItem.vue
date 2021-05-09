<template>
    <div class="Value-Item" v-bind:class="{'is-modify':value.is_modify}">
        <p class="Value-Title">
            <!-- <input class="Value-markModify" type="checkbox" v-on:click="$emit('mark-modify', value.id)"> -->
            {{value.title}}
        </p>
        <div class="value-buttons">
            <button class="Value-markModify" @click="$emit('mark-modify', value.id)" @>UPDATE</button>
            <button class="del-btn" @click="$emit('del-value', value.id)">DELETE</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name : 'ValuesItem',
    props : ["value"],
    methods: {
        /*markModify(){
            this.value.is_modify = !this.value.is_modify;
        }*/
    }
}
</script>

<style scoped>
    .Value-Item{
        background-color: orange;
        padding: 20px;
        margin: 30px 0px;
        height: 120px;
        border-bottom: 1px #ccc dotted;
        max-width: 1024px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px;
    }

    .Value-Title{  
        font-size: 25px;
        font-weight: 300;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color:white;
        text-align: left;
    }

     .is-modify{
        background:black;
    } 

    .Value-markModify{
        height: 40px;
        width: 75px;
        color:white;
        background:navy;
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

    .value-buttons{
        float: right;
        margin-bottom: auto;
        padding-bottom: auto;
    }
</style>