/* eslint-disable */
import { Navbar, Container , NavDropdown , Nav , Jumbotron } from 'react-bootstrap'
import React, {lazy, Suspense, useEffect, useState} from 'react'
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'


import Main from './page/Main' 
import {getNikeList} from './db/firebase' 
let Detail  = lazy(()=>  import ( './page/Detail' ))
import Cart from './page/Cart'
import { connect } from 'react-redux';
const _ = require("lodash");

export let 재고context = React.createContext() 

function App(props) {

  useEffect(()=>{ 
    getNikeList()
  },[])

  let [재고,재고변경] = useState([10,11,12])

  return (
    <div className="App"> 
    
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NikeDDalng</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron className="background">
        <h1>8월의 나이키</h1>
        <p>나이키 응모 리스튼
        </p>
        
      </Jumbotron>

      <Switch>
        <Route exact  path="/">
            <Main />
          <button className="btn btn-primary" onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              
              const newData = result.data 
              newData.map((data)=>{
                
                data.url = "https://codingapple1.github.io/shop/shoes2.jpg"
              })
              props.dispatch({type : 'addShoes' , data : [...newData]})
            })
            .catch((e)=>{ 
            }) 

          }}>더보기</button>
        </Route>

        <Route exact path="/detail/:id">
          
          <재고context.Provider value={재고}>
            <Suspense fallback={<div>로딩중이에요</div>}>
            <Detail  shoes={props.shoes} 재고변경={재고변경}/>
            </Suspense>
          </재고context.Provider>
        </Route>

        <Route exact path="/cart">
            <Cart/>
        </Route>
 
      </Switch>
    </div>
  );
}
 
function bind(state){
  return{
    shose : state.reducerShoes
  }
}

export default connect(bind)(App);
