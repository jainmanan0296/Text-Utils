import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    };
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    };
    const handleReverseClick = () => {
        let strArr = text.split("");
        strArr = strArr.reverse();
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Converted reverse","success");
    };
    const handleCapitalizeWordClick = () => {
        let lowercase = text.toLowerCase();
        let words = lowercase.split(" ");
        let newWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        // map is like for loop
        let newText = newWords.join(" ");
        setText(newText);
    };

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleClearTextClick =()=>{
        setText("");
        props.showAlert("Text cleared","success");
    }

    const [text,setText] = useState('Enter text here');
  return (
    <>
    <div class = "container"  style ={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange ={handleOnChange} style ={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled ={text.length===0} className = "btn btn-primary mx-2 my-2" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button disabled ={text.length===0} className = "btn btn-primary mx-2 my-2" onClick = {handleLoClick}>Convert to Lowercase</button>
        <button disabled ={text.length===0} className = "btn btn-primary mx-2 my-2" onClick = {handleReverseClick}>Reverse Text</button>
        <button disabled ={text.length===0} className = "btn btn-primary mx-2 my-2" onClick = {handleCapitalizeWordClick}>Capitalize first Letter</button>
        <button disabled ={text.length===0} className = "btn btn-primary mx-2 my-2" onClick = {handleClearTextClick}>Clear Text</button>
    </div>
   <div class = "container my-3"  style ={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.length===0?0:text.split(" ").filter((element)=>{return (element.length!==0)}).length} words {text.length} characters</p>
    <p>{0.008* text.split(" ").filter((element)=>{return (element.length!==0)}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
   </div>
    </>
  );  
}
