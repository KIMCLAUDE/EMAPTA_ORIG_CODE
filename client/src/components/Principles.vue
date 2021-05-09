<template>
    <div class="Main-Principles">
        <div class="Title-Principles">PRINCIPLES of Agile Software Development</div>
        <div class="Content-Principles" v-bind:key="principle.id" v-for="principle in principles">
            <PrinciplesItem v-bind:principle="principle" v-on:mark-modify="$emit('mark-modify', principle.id)" v-on:del-principle="$emit('del-principle', principle.id)"/>
            <!-- <p>{{principle.title}}</p> -->
        </div>
    </div>
</template>

<script>

import PrinciplesItem from './PrinciplesItem'

export default {
    name:'Principle',
    components:{
        PrinciplesItem
    },
    props: ["principles"]
}
</script>

<style scoped>
    .Main-Principles{
        margin: 30px;
        padding: 20px;
        max-width: 1024px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;

    }

    .Title-Principles{
        font-size: 30px;
        font-weight: 500;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color:crimson;
        text-align: center;
    }

</style>