<template>
    <div class="Main-Add">
        <form @submit="addValue(titleString)">
                <select name="Value" v-model="titleString" id="Value">
                    <option value="None" selected>...</option>
                    <option value="Individuals and interactions over processes and tools">Individuals and interactions over processes and tools</option>
                    <option value="Working product over comprehensive documentation">Working product over comprehensive documentation</option>
                    <option value="Customer collaboration over contract negotiation">Customer collaboration over contract negotiation</option>
                    <option value="Responding to change over following a plan">Responding to change over following a plan</option>
                </select>
                <!-- <input type="text" v-model="titleString" name="title" placeholder="Add Value..."> -->
                <input type="submit" value="Submit" class="btn_add">
        </form>
    </div>
</template>

<script>
export default {
    name : 'AddValue',
    components:{
       
    },
    data(){
         return{
             failed : false
        }
    },
    props: ["values"],
    methods: {
         addValue(titleString){
             console.log(titleString)
             for(let i =0; i<this.values.length; i++){
                 if(titleString == this.values[i].title){
                     alert('Value already existing!');
                     this.failed = true;
                 }
             }

           //e.preventDefault();
           if(this.failed == false){
                if(titleString == "None" || titleString == null){
                    alert('Please Enter Valid Values!');
                } 
                else {
                    const newValue = {
                            //id : this.id,
                            title: titleString,
                            is_modify: 0
                    }

                    this.$emit('add-value', newValue);
                    //alert('Successfully Stored!!');
                }
            }
        }
    }
}
</script>

<style scoped>

    .Main-Add{
        max-width: 1024px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }
    form{
        display: flex;
        align-items: center;
    }

    select {
        width: 800px;
        height: 40px;
        padding: 5px;
    }

    .Value-Select{
        padding: 5px;
        width: 50px;
    }

    .btn_add{
        height: 40px;
        width: 200px;
        margin-left: 20px;
    }

    .btn_add:hover{
        background-color: #777777;
        color: white;
    }

</style>