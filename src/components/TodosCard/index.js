import React, { useEffect, useState } from 'react';
import { Card, CardTitle, Button, Row, Col, Container, Input } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getTodosAsync, updateTodoAsync, addTodoAsync, deleteTodoAsync } from '../../redux/todoReducer'
import { toast } from "react-toastify";



const TodosCard = () => {
    const [todoItemID, setTodoItemID] = useState(null);
    const [todoItem, setTodoItem] = useState(null);
    const [updateStatus, setUpdateStatus] = useState(false);

    const dispatch = useDispatch();

    const selectTodos = state => state.todos

    const todosData = useSelector(selectTodos);

    useEffect(() => {
        dispatch(getTodosAsync());
        console.log("From card", todosData.todos)
    }, [])




    const addTodoToList = () => {
        if (!todoItem) {
            return toast.warning("Please Enter")
        }
        let data = {
            "title": todoItem,
            "status": "pending"
        }
        dispatch(addTodoAsync(data))
        dispatch(getTodosAsync())
        setTodoItem("")
    }


    const setUpdate = (id, title) => {
        toast.info("Update you todo " + title)
        setUpdateStatus(true)
        setTodoItem(title);
        setTodoItemID(id)
        // setUpdateStatus(false)
    }


    const updatetodo = () => {
        let updateData = {
            "id": todoItemID,
            "title": todoItem,
        }
        // dispatch update function
        dispatch(updateTodoAsync(updateData))
        // once the update is done, fetch all data again to update the state
        toast.info("Updated Todo " + todoItem)
        dispatch(getTodosAsync())
        // set input to ""
        setTodoItem("")
        // set update state to false to display Add button 
        setUpdateStatus(false)

    }

    const deleteTodo = (todoId) => {
        dispatch(deleteTodoAsync(todoId))
        dispatch(getTodosAsync())

    }

    return (
        <Container>
            <Row style={{ margin: '1rem' }}>
                <h4>Add Todo Items</h4>
                <Col className='col-sm-12 col-md-6 offset-md-3'>
                    <Input placeholder='Enter todo' name="todo" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
                </Col>

                <Col className='col-sm-12 col-md-6 offset-md-3' style={{ textAlign: 'center' }}>
                    {
                        updateStatus ? (
                            <Button onClick={updatetodo} style={{ margin: '1rem', width: '20rem' }} color='success'>Update</Button>

                        ) : (

                            <Button onClick={addTodoToList} style={{ margin: '1rem' }} color='primary'>Save</Button>
                        )
                    }
                </Col>



            </Row>
            <Row>
                {
                    todosData.todos.map((one) => {
                        return (
                            <Col className='col-6 col-sm-4' style={{ marginTop: '0.2rem' }}>
                                <Card
                                    body
                                    inverse
                                    style={{
                                        backgroundColor: '#333',
                                        borderColor: '#333',
                                        transition: '1s ease'
                                    }}
                                >
                                    <CardTitle tag="h5">
                                        {one.todo.title}
                                    </CardTitle>

                                    <div>


                                        <Button onClick={() => setUpdate(one.id, one.todo.title)}
                                            style={{ margin: '5px' }} color="success">
                                            Update
                                        </Button>

                                        <Button
                                            onClick={() => deleteTodo(one.id)}
                                            color='danger'>
                                            Delete
                                        </Button>

                                    </div>

                                </Card>
                            </Col>
                        )
                    })
                }


            </Row>
        </Container>
    )
}

export default TodosCard;