import React from 'react'

export default function About(props) {
    let myStyle = {
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'#042743':'white'
    }
    // const[btntext,setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle =()=>{
    //     if(myStyle.color ==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor: 'black',
    //             border:'1px soid white'
    //         });
    //         setBtnText("Enable Light Mode");
    //     }else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor: 'white',
    //             border:'1px soid white'
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
  return (
    <div classNameName = "container" style ={myStyle}>
        <h1 className ="my-3">About Us</h1>
       <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button"  style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong>Analyze Your text</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style ={myStyle}>
                   TextUtils gives you a way to analyze your text quickly and efficiently,Be it word count,character count etc.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style ={myStyle}>
                   TextUtils iss a free character counter tool that provides instant character count and word count statistics for a given text.Textutils reports the number of words and characters.thus it is suitable for writing text with words/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style = {myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style ={myStyle} >
                    This word counter software works in any web browsers such as chrome,firefox,internet explorer,safri,opera.it suits to count characters in facebook,blog,blocks,excel document,pdf document,essays,etc.
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}
