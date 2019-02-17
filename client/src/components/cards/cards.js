import React from "react";



 const Card = (props) =>  {
     console.log('card props', props)

     
    return (
       
          
                <div className="col-sm-3">
                <a href={props.cardProps.cardLink}>
                    <div className={props.cardProps.card ? props.cardProps.card : 'card'}>
                    <div className={props.cardProps.cardBody}>
                    <div className={props.cardProps.cardImg}>
                     &nbsp;
                 </div>
                        <h4 className="card__heading">
                            <span className={props.cardProps.heading}>{props.cardProps.headingText}</span>
                                    
                        </h4>
                        <div className="card__details">
                        <ul>
                        {  props.cardProps.cardText.map((text, index) => (
                                <li key={text}>{text}</li>
                        ))
                      

                        }
                        </ul>       
                                     </div>
             
                    </div>

                    
                    </div>
                    </a>
            
            
            
            
            
                    </div>
        
       

      

    )
}




 
 

 export default Card;




