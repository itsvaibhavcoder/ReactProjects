import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText);

    }

    const handleOnChange = (event)=>{
         console.log("On Change");
         setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    //text = "new text"; // Wrong way to change the state
    //setText("new text"); // Correct way to change the state 
  return (
    <>
    
<div className="container">
  <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
     <button className ="btn btn-primary mx-2" onClick={handleUpClick}>Convert to  Uppercase </button>
     <button className ="btn btn-primary mx-2" onClick={handleLowClick}>Convert to  Lowercase </button>
     <button className ="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>

    </div>
    <div className ="container my-3">
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes required to read </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>

  )
}
