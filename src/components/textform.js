import React,{useState} from "react";

export default function (props) {
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const foralert=(message)=>{
      document.getElementById('alerts').innerHTML=`<div class="alert alert-success" role="alert">
        ${message}
        </div>`;
        setTimeout(()=>{
        document.getElementById('alerts').innerHTML=``;
        },2000)
    }
    const HandleUpperCase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        if(text!="") foralert('Success!Converted To Uppercase.');
    }
    const HandleLowerCase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        if(text!="") foralert('Success!Converted To Lowecase.');
    }
    const HandleCopy=()=>{
      navigator.clipboard.writeText(text);
      if(text!="") foralert('Success!Copied To Clipboard.');
    }
    const HandleSpace=()=>{
      let newtext=text.replace(/\s+/g,' ')
      setText(newtext);
    }
    const [text,setText]= useState('');     
  return (
    <div style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",height:"100vh"}}>
      <div id="alerts" >
    </div>
  <div className="container mt-0 my-4 mb-3" >
    <label htmlFor="exampleFormControlTextarea1" className="form-label py-3"><h2>Enter Text:</h2></label>
    <textarea className="form-control " id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="7"></textarea>
    <button type="button" className="btn btn-dark btn-lg my-3" onClick={HandleUpperCase}>To Uppercase</button>
    <button type="button" className="btn btn-dark btn-lg my-3 mx-2" onClick={HandleLowerCase}>To Lowercase</button>
    <button type="button" className="btn btn-dark btn-lg my-3" onClick={HandleCopy}>Copy Text</button>
    <button type="button" className="btn btn-dark btn-lg my-3 mx-2" onClick={HandleSpace}>Extra Spaces</button>
    <h2 className="my-3">Your Text Summary:</h2>
    <strong>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</strong>
    <br></br>
    <strong>{0.005*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</strong>
    <h2 className="my-3">Preview:</h2>
    {text}
  </div>
  </div>
  )
}
