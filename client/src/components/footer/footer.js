import React from "react";



 const Footer = (props) =>  {
     console.log('footer props ?', props)
    return (
       
       
                <div className="footer--main">
                   
                    <section className="footer--main__resume">
                    <a href ="https://www.dropbox.com/s/8ne2k76d94m3qtc/Resume.docx?dl=1">
                    <i class="fa fa-file-text-o" aria-hidden="true">
                        
                      </i>
                      </a>
                      <div className="resume-text">
                        Resume
                      </div>
                    </section>

                    <section className="footer--main__github">
                    <a href ="https://github.com/chrisjlan89?tab=repositories">
                    <img src="/src/assets/img/GitHub-Mark/PNG/GitHub-Mark-64px.png">
                                         
                    </img>
                    </a>    
                    </section>
                       
                    <section className="footer--main__linkedin">
                    <a href ="https://www.linkedin.com/in/chris-lantier/">
                    <img src="/src/assets/img/linkedin-in-for-screen/LinkedIn [in] for Screen/2-Color/In-2C-66px-R.png">
                    
                      
                    </img>
                    </a>    
                    </section>



                    
                 
                    
            
            
            
                    </div>
                   
        
       

      

    )
}




 
 

 export default Footer;




