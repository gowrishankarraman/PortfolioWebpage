import { useEffect } from "react";
import About from "./adcomponents/About";
import Experience from "./adcomponents/Experience";
import Projects from "./adcomponents/Projects";


export default function Body(){
    useEffect(()=>{
        const observer=new IntersectionObserver((entrys)=>{
              entrys.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('animaz')

                }
           
             
              })
             
        })
        const hidden=document.querySelectorAll(".hidden")
        hidden.forEach((el)=>observer.observe(el))
    },[])
    return(
        <div className="container mt-5 " id="Home">
            <div className="">
            <h3 className="text-center "><b>CAREER OBJECTIVE</b></h3>
            <hr></hr>
            <h5 className="">To work hard and utilize my best of the opportunity to seek total
fulfillment of the concern in every movement of life .I will be work dedicative
for the concern, and also to cultivate my skills and knowledge.</h5>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
            </div>
          

            
        </div>
    )
}