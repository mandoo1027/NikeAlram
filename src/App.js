/* eslint-disable */
import { Navbar, Container , NavDropdown , Nav , Jumbotron } from 'react-bootstrap'
import React, {lazy, Suspense, useEffect, useState} from 'react'

import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Main from './page/Main' 
let Detail  = lazy(()=>  import ( './page/Detail' ))
import './App.css';

import Cart from './page/Cart'
import { connect } from 'react-redux';
const _ = require("lodash");
 

import {getNikeList} from './db/firebase' 


function App(props) { 

  let [nikeList,changeList] = useState([])

  function callbackData(newData){ 
    let copyData = nikeList
    copyData.push([...newData])
    changeList(copyData)
    console.log()
  } 
  useEffect(()=>{  
      getNikeList(callbackData)    
  })

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
           <>
          {cardPrint(nikeList)}
          </>
          <button className="btn btn-primary" onClick={()=>{ 

          }}>더보기</button>
        </Route>

        <Route exact path="/detail/:id">
           
            <Suspense fallback={<div>로딩중이에요</div>}>
            <Detail  shoes={props.shoes} />
            </Suspense> 
        </Route>

        <Route exact path="/cart">
            <Cart/>
        </Route>
 
      </Switch>
    </div>
  );
}
function cardPrint(nikeList){
  console.log(nikeList)
  let arrayList = []
  for(let i=0;i<nikeList.length;i++){
    let divObject = 
    <div className="col-md-4" key={i} onClick={()=>{
      history.push('/detail/'+nikeList[i].key)
    }}>
      <img src={nikeList[i].imageSrc} width="100%" alt="" />
      <h4>{nikeList[i].productName}</h4>
      <p>{nikeList[i].eventDateText} & {nikeList[i].price}</p>
    </div>
    
   arrayList.push(divObject)
  }
  return arrayList
}
 
function bind(state){
  return{
      shose : state.reducerShoes 
  }
}

export default connect(bind)(App);
