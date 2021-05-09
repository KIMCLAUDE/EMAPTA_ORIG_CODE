 <template>
    <div class="Main-Add">
        <form @submit="addPrinciple(titleString)">
                <select name="Principle" v-model="titleString" id="Principle">
                    <option value="None" selected>...</option>
                    <option value="Customer satisfaction through continuous delivery of the product">Customer satisfaction through continuous delivery of the product</option>
                    <option value="Divide large chunks of work into smaller and achievable tasks for quicker completion and easier integration of changes">Divide large chunks of work into smaller and achievable tasks for quicker completion and easier integration of changes</option>
                    <option value="Adhere to the decided timeframe for the delivery of a working product">Adhere to the decided timeframe for the delivery of a working product</option>
                    <option value="All stakeholders must frequently collaborate to ensure that the project is going in the correct direction">All stakeholders must frequently collaborate to ensure that the project is going in the correct direction</option>                   
                    <option value="Create a supportive environment to motivate team members and encouraging them to get the job done">Create a supportive environment to motivate team members and encouraging them to get the job done</option>
                    <option value="Prefer face-to-face communication over other methods">Prefer face-to-face communication over other methods</option>
                    <option value="Working software is the primary measure of progress">Working software is the primary measure of progress</option>
                    <option value="Try to maintain a constant pace of development">Try to maintain a constant pace of development</option>
                    <option value="Maintain the quality of the product by paying attention to technical details">Maintain the quality of the product by paying attention to technical details</option>
                    <option value="Maintain simplicity">Maintain simplicity</option>
                    <option value="Promote self-organization in the team">Promote self-organization in the team</option>
                    <option value="Regularly reflect on your performance for continuous improvement">Regularly reflect on your performance for continuous improvement</option>
                    
                </select>
                <!-- <input type="text" v-model="titleString" name="title" placeholder="Add Principle..."> -->
                <input type="submit" principle="Submit" class="btn_add">
        </form>
    </div>
</template>

<script>
export default {
    name : 'AddPrinciple',
    components:{
       
    },
    data(){
         return{
             failed : false
        }
    },
    props: ["principles"],
    methods: {
         addPrinciple(titleString){
             console.log(titleString)
             for(let i =0; i<this.principles.length; i++){
                 if(titleString == this.principles[i].title){
                     alert('Principle already existing!');
                     this.failed = true;
                 }
             }

           //e.preventDefault();
           if(this.failed == false){
                if(titleString == "None" || titleString == null){
                    alert('Please Enter Valid Principles!');
                } 
                else {
                    const newPrinciple = {
                            //id : this.id,
                            title: titleString,
                            is_modify: 0
                    }

                    this.$emit('add-principle', newPrinciple);
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

    .Principle-Select{
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