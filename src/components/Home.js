import React from 'react';
import { Container, Row } from 'reactstrap';
import { ToastContainer } from "react-toastify";

import TodosCard from './TodosCard';



const Home = ()=>{
    return (
            <Container>
                      <ToastContainer 
                      position="top-center"
                      autoClose={1000}
                      hideProgressBar={true}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover />
                <Row>
                    <TodosCard/>
                </Row>
            </Container>
    )
}

export default Home;