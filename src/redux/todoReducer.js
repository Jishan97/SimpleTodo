import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {db} from '../firebase'
import {collection, addDoc,doc, updateDoc, getDocs, deleteDoc} from 'firebase/firestore'

// add 
export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {

       await addDoc(collection(db, 'tasks'), {
            title: payload.title,
            status: payload.status,
          })

	}
);
// get 
export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {

        let data = [];
        const querySnapshot = await getDocs(collection(db, "tasks"));
        // console.log(querySnapshot)
        querySnapshot.forEach((one)=>{
            data.push({
                id:one.id,
                todo:one.data()
            })
        //    data.push(one.data())
        })  
			return {data} ;
	
	}
);

// update

export const updateTodoAsync = createAsyncThunk(
	'todos/updateTodoAsync',
	async (payload) => {
        const todoRef = doc(db, 'tasks', payload.id)
       await updateDoc(todoRef, {
            title: payload.title
                  })
                  }
        
);

// Delete

export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync',
    async(payload)=>{
        const todoRef = doc(db, 'tasks', payload)
        await deleteDoc(todoRef)

    }
)



const todosSlice = createSlice({
    name: 'todos',
    initialState:{
        todos:[]
    },
    extraReducers: {
        [getTodosAsync.fulfilled]: (state, action) => {     
        state.todos = action.payload.data;
        console.log(action.payload.data)
		}
	},

  })
  
  
  export default todosSlice.reducer
