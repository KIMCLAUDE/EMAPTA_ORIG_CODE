<template>
    <div class="Main-Values">
        <div class="Title-Values">VALUES of Agile Software Development</div>
        <div class="Content-Values" v-bind:key="value.id" v-for="value in values">
            <ValuesItem v-bind:value="value" v-on:mark-modify="$emit('mark-modify', value.id)" v-on:del-value="$emit('del-value', value.id)"/>
            <!-- <p>{{value.title}}</p> -->
        </div>
    </div>
</template>

<script>

import ValuesItem from './ValuesItem'

export default {
    name:'Value',
    components:{
        ValuesItem
    },
    props: ["values"]
}
</script>

<style scoped>
    .Main-Values{
        margin: 30px;
        padding: 20px;
        max-width: 1024px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;

    }

    .Title-Values{
        font-size: 30px;
        font-weight: 500;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color:crimson;
        text-align: center;
    }

</style>