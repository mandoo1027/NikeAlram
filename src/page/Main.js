import { connect, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function Main(){

  let shoes = useSelector((state)=>state.reducerShoes)
  const history = useHistory()

  function cardPrint(){
    let arrayList = []
    for(let i=0;i<shoes.length;i++){
      let divObject = 
      <div className="col-md-4" key={i} onClick={()=>{
        history.push('/detail/'+shoes[i].id)
      }}>
        <img src={shoes[i].url} width="100%" alt="" />
        <h4>{shoes[i].title}</h4>
        <p>{shoes[i].content} & {shoes[i].price}</p>
      </div>
      
     arrayList.push(divObject)
    }
    return arrayList
  }

  return( 
    <>
    {cardPrint()}
    </>
  )
}
 

export default Main