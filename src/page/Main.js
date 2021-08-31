import { useEffect, useState } from "react"
import { connect, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function Main(props){
   

  useEffect(() => { 
    console.log(props.nikeList,";11111111111111111111")
    return () => { 
      
    };
  }); 
  
  const history = useHistory()

  function cardPrint(){
    let arrayList = []
    // for(let i=0;i<nikeList.length;i++){
    //   let divObject = 
    //   <div className="col-md-4" key={i} onClick={()=>{
    //     history.push('/detail/'+nikeList[i].key)
    //   }}>
    //     <img src={nikeList[i].imageSrc} width="100%" alt="" />
    //     <h4>{nikeList[i].productName}</h4>
    //     <p>{nikeList[i].eventDateText} & {nikeList[i].price}</p>
    //   </div>
      
    //  arrayList.push(divObject)
    // }
    return arrayList
  }

  return( 
    <>
    {cardPrint()}
    </>
  )
}
 

export default Main