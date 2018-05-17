import React from "react";
import Card from '../cards/cards'



 const Body = (props) => {
  console.log('props of body' , props)

    return(
  <section className="body">
  <div className="row">
        <Card cardProps={props.card1} />
        <Card cardProps={props.card2} />
        <Card cardProps={props.card3} />
     
        </div>
     
    
  

  </section>
    )
 };

export default Body;



// import React from "react";
// import Card from '../cards/cards'



//  const Body = (props) => {
//   console.log('props of body' , props)

//     return(
//   <section className="body">
//   <div className="row">
//         <Card
//         heading1={props.heading1}
//         headingText1={props.headingText1} 
//         cardText1={props.cardText1} 
//         cardBody1={props.cardBody1}
//         cardImg1= {props.cardImg1}
//         cardLink1= {props.cardLink1}
        
        
//         />
     
//         </div>
     
    
  

//   </section>
//     )
//  };

// export default Body;
