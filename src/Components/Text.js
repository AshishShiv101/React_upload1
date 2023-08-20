import React, {useState} from 'react'

export default function Text(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+ text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleloClick=()=>{
    console.log("Lowercase was clicked"+ text); 
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleclearClick=()=>{
    console.log("Lowercase was clicked"+ text);
    let newText= '';
    setText(newText);
  }

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(4);
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const readTxt = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event){
        setText(event.target.result);
    };
    reader.readAsText(file);
}
const handleCopy = () =>{
  var text = document.getElementById("myBox"); 
  text.select();
  navigator.clipboard.writeText(text.value);
}
const handleExtraspaces =()=>{
  let newText =text.split(/[ ]+/);
  setText(newText.join(" "))
}
  // const undo =() =>{
  //   let itm=localStorage.getItem("1")
  //   setText(itm) 
  //   }
  const [text, setText]=useState('');
  // setText("new text");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
<div classname="mb-3">
  <textarea classname="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#C49102':'white', color:'dark'?'black':'black'}} 
  id="myBox" rows="8" cols={102}></textarea>
</div>
<button className="btn btn-warning mx-1" onClick={handleUpClick}>Convert to Uppercase</button>

<button className="btn btn-warning mx-1" onClick={handleloClick}>Convert to lowercase</button>
<button className="btn btn-warning mx-1" onClick={handleclearClick}>Clear Text</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-1">Speak</button>
<button onClick={handleCopy} className="btn btn-warning mx-1">Copy</button>
<button onClick={handleExtraspaces} className="btn btn-warning mx-1">Remove Extra Space</button>
<input type="file" className="btn btn-black mx-3" style={{backgroundColor:props.mode==='dark'?'#1C352D':'white', color:'dark'?'black':'black'}}  onChange = {readTxt}/>
{/* <button className='btn btn-warning mx-1' onClick={undo}>Undo</button> */}
</div>
<div className="container my-2"  style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Your text summary.</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minutes read.</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something int the text box above to preview it to preview it here."}</p>
</div>
</>
  )
}
