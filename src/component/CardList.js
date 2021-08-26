
function Card(props){

    function cardPrint(){
      let arrayList = []
      for(let i=0;i<props.shoes.length;i++){
        let divObject = 
        <div className="col-md-4" key={i}>
          <img src={props.shoes[i].url} width="100%" alt="" />
          <h4>{props.shoes[i].title}</h4>
          <p>{props.shoes[i].content} & {props.shoes[i].price}</p>
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
  
  export default Card;