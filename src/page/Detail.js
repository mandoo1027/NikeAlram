
import { React , useEffect, useState , useContext } from 'react'
import { Nav } from 'react-bootstrap'
import { useHistory , useParams} from 'react-router-dom' 
import { connect } from 'react-redux'
import '../detail2.scss'

import {CSSTransition} from "react-transition-group"
 
const _ = require("lodash");


function Detail(props){
 
    let [isShow,isChangeShow] = useState(true)
    let { id } = useParams();
    let history = useHistory();
    let [탭,탭변경] = useState(0)
    let [스위치,스위치변경] = useState(false) 
  

    useEffect(()=>{ 
        let timger = setTimeout(()=>{
            isChangeShow(false)
        },2000)
       return ()=>{
          clearTimeout(timger) 
       }
    },[])
  
    let findObject = props.shoes.find(item=>item.id === Number(id))

    return (
        
        <div className="container">
            {
                isShow ? <div className="my-alert" id="my-alert" >
                                    <p>
                                    재고가 얼마 남지 않았습니다.
                                    </p>
                                </div> : null
            }
            
            <div className="row">
                <div className="col-md-6" >
                <img src={findObject.url} width="100%" alt=""/>
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{findObject.title}</h4>
                <p>{findObject.content}</p>
                <p>{findObject.price}</p> 
                <button className="btn btn-danger" onClick={()=>{ 
                }}>주문하기</button> 
                &nbsp;
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack()
                }}>뒤로가기</button> &nbsp;
                <button className="btn btn-danger" onClick={()=>{
                    props.dispatch({type : 'addData' , data : { id : findObject.id, name : findObject.title , quan : 1}})
                    history.push('/cart')
                }}>장바구니담기</button> 
                </div>
                
            </div>

            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{
                        스위치변경(false)
                        탭변경(0)
                    }}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{
                        스위치변경(false)
                        탭변경(1)
                    }}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={스위치} classNames="wow" timeout={500}>
                <TabContent 탭={탭} 스위치변경={스위치변경}/>
            </CSSTransition>
        </div> 
    )
}

function TabContent(props){
    useEffect(()=>{
        props.스위치변경(true)
    })
    const 탭 = props.탭
    if(탭 === 0){
        return  <div>0번째 내용입니다.</div> 
    }else{
        return  <div>1번째 내용입니다.</div> 
    }
    
} 
function bind(state){
    return {
        shoes : state.reducerShoes
        ,damgi : state.reducer
    }
}


export default connect(bind)(Detail)