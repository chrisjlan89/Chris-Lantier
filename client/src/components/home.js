import React, { Component } from "react";
import stylesheets from "../stylesheets/main.scss"
import  Header from '../components/header/header'
import Body from '../components/body.js/body'
import Card from './cards/cards'
import Footer from './footer/footer'



class Home extends Component {

    state = {
        card1: {
            heading: "card__heading-span card__heading-span--1",
            headingText : "Life Overflow",
            cardText : ["Fully Featured Full-Stack App", "mySQL database with associations", "Intergrated Facebook Authentication, weeding out user's without integrity"],
            cardBody: "card__side card__side--front--1",
            cardImg : "card__picture card__picture--1",
            cardLink : "http://lifeoverflow.us/"

        },

        card2: {
            heading: "card__heading-span card__heading-span--2",
            headingText : "ESPN Article Scraper",
            cardText: ['Retrieves up to date articles', "Simple UI for accesibilty", 'MongoDB wtih "associations" allowing user to save and edit notes'],
            cardBody: "card__side card__side--front--2",
            cardImg : "card__picture card__picture--2",
            cardLink : "https://chrislan-mongo-scrape.herokuapp.com/"

        },

        card3: {
            heading: "card__heading-span card__heading-span--3",
            headingText : "Genuine Gaming Gurus",

            cardBody: "card__side card__side--front--3",
            cardText: ["Built On React", "MongoDB", "Dynamic Twitch Components & Authentication"], 

            cardImg : "card__picture card__picture--3",
            cardLink : "https://gaminggurus.herokuapp.com/"

        }
    }

render() {

   

    return (
                
                
        <div className="container-fluid page">   
        <div>
        <Header/>
       
        <Body card1={this.state.card1} card2={this.state.card2} card3={this.state.card3}/>
        <Footer/>
        
      </div>
      </div>
    )
  }
}

export default Home;





// import React, { Component } from "react";
// import stylesheets from "../stylesheets/main.scss"
// import  Header from '../components/header/header'
// import Body from '../components/body.js/body'
// import Card from './cards/cards'
// import Footer from './footer/footer'



// class Home extends Component {

//     state = {
//            heading1: "card__heading-span card__heading-span--1",
//             headingText1 : "Life Overflow",
//             cardText1 : ["Fully Featured Full-Stack App", "mySQL database with associations", "Intergrated Facebook Authentication, weeding out user's without integrity"],
//             cardBody1: "card__side card__side--front--1",
//             cardImg1 : "card__picture card__picture--1",
//             cardLink1 : "http://lifeoverflow.us/",

       

      
//             heading2: "card__heading-span card__heading-span--2",
//             headingText2 : "ESPN Article Scraper",
//             cardText2: ['stuff here feature', "Simple UI for accesibilty", 'MongoDB wtih "associations" allowing user to save and edit notes'],
//             cardBody2: "card__side card__side--front--2",
//             cardImg2: "card__picture card__picture--2",
//             cardLink2 : "https://chrislan-mongo-scrape.herokuapp.com/",

        

        
//             heading3: "card__heading-span card__heading-span--3",
//             headingText3 : "Genuine Gaming Gurus",

//             cardBody3: "card__side card__side--front--3",
//             cardText: ["Built On React", "MongoDB", "Dynamic Twitch Components & Authentication"], 

//             cardImg3 : "card__picture card__picture--3",
//             cardLink3 : "https://gaminggurus.herokuapp.com/"

        
//     }

// render() {

   

//     return (
                
                
//         <div className="container-fluid page">   
//         <div>
//         <Header/>
       
//         <Body cards={this.state}/>
//         <Footer/>
        
//       </div>
//       </div>
//     )
//   }
// }

// export default Home;