
import { React } from 'react'
import {Table,Button} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'

function Cart(props){
    let state = useSelector((state)=>state)
    let dispatch = useDispatch()
    console.log(state)
    return(
        <div className="divPadding"> 
            <Table responsive="md">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                    {
                        state.reducer.map((a,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.quan}</td>
                                    <td><Button variant="primary" size="sm"  active  onClick={()=>{
                                        dispatch({type : 'addCnt' , index : i})
                                    }}>+</Button>&nbsp;
                                    <Button variant="primary" size="sm" active  onClick={()=>{
                                        dispatch({type : 'minusCnt' , index : i})
                                    }}>-</Button></td>
                                </tr>
                            )
                        })
                    } 
                </tbody> 
            </Table>
            {state.reducerAlert ? 
            <div className="my-alert2 divPadding">
                <p>지금 구매하시면 신규할인 20%</p>
                <Button onClick={()=>{
                    dispatch({type : 'closeAlert'})
                }}>닫기</Button>
            </div> : null
            }
        </div>
    )
}
 
 

export default Cart