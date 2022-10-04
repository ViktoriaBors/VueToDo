import {ref, shallowRef, toDisplayString} from "vue"

const getToDos = ()=>{
    const todos = shallowRef("")
    const error = ref(null)
    
    const loadData = async ()=>{          
            try{
                let data = await fetch("https://jsonplaceholder.typicode.com/todos")
                console.log("load data")
                if(!data.ok){
                    throw new Error ("no data found")
                }
                todos.value = await data.json()
            }
            catch(error){
                error.value = error.message
            }
            todos.value = todos.value.splice(0,5)
            console.log(todos.value)
        }

    loadData()

    return {todos, error, loadData}
}

export default getToDos