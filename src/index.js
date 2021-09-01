import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { combineReducers, createStore } from 'redux';

import list from './data'  

let alert초기값 = true

let nikeList = []
let shoes = list



function reducerNikeManager(state = nikeList , action ){
  if(action.type === 'addNike'){
    let copyList = [...state]
    copyList = action.data
    return copyList
  }else{
    return state
  }
}


function reducerAlert(state = alert초기값 , action){
  if(action.type === "closeAlert"){
    state = false
    return state
  }else{
    return state
  }
}

function reducerShoes(state = shoes , action){
  if(action.type === "addShoes"){ 
    let copyData = [...state] 
    copyData.push(...action.data)
    return copyData
  }else{
    return state
  }
}



let 기본state = 
  [
    {id:0, name : '멋진신발' , quan : 2}
   ,{id:1, name : '예쁜신발' , quan : 4}
  ]

function reducer(state = 기본state,action){
  if(action.type === 'addData'){
    let copyData = [...state]
    let findId = action.data.id 
    let findIdx = copyData.findIndex((data)=>data.id === findId)
    if(findIdx === -1){
     copyData.push(action.data)
    }
    return copyData
  }else if(action.type === 'addCnt'){
    let copyData = [...state]
    copyData[action.index].quan++
    return copyData
  }else if(action.type === 'minusCnt'){
    let copyData = [...state]
    if(copyData[action.index].quan > 0){
      copyData[action.index].quan--
    }
    return copyData
  }else{
    return state
  }
  
}
let store = createStore(combineReducers({reducerNikeManager,reducer,reducerAlert,reducerShoes}))
 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
