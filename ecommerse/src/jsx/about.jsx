import { useState } from "react"



export function About(){
    // console.log(props)
   
    const [isHover,setisHover] = useState(false)
    // const styles = props.setisHover?{backgroundColor:'red'} : {backgroundColor:"yellow"}

//     function active(){
// setisHover(true)
//     }
//     function deactive(){
//       setisHover(false)
//     }

    return(
        <div className="about">
            <div className="about-head">
              <img src={require("../image/Saly-13.svg").default} alt="" />
            </div>
            <div className="about-text">
              <h1 >Hey there 👋  I am Amirhossein</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="about-buttons">
              <button className="aboutmebtn" 
              // onMouseEnter={active}
              //  onMouseLeave={deactive}
              //  style={styles}
              //  style={{backgroundColor: setisHover(true)? "red" :"blue"}}
               >About me</button>
              <button className="letbtn">😮 Let’s see portfolios</button>
            </div>
            <div className="about-foot">
              <img src={require("../image/Saly-8.svg").default} alt="" />
            </div>
        </div>
    )
 }