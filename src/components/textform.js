import React,{useState} from "react";

export default function (props) {
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const HandleUpperCase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const HandleLowerCase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const [text,setText]= useState('');     
  return (
    <div style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",height:"100vh"}}>
  <div className="container mt-0 my-4 mb-3" >
    <label htmlFor="exampleFormControlTextarea1" className="form-label py-3"><h2>Enter Text:</h2></label>
    <textarea className="form-control " id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="7"></textarea>
    <button type="button" className="btn btn-dark btn-lg my-3" onClick={HandleUpperCase}>To Uppercase</button>
    <button type="button" className="btn btn-dark btn-lg my-3 mx-2" onClick={HandleLowerCase}>To Lowercase</button>
    <h2 className="my-3">Your text summary:</h2>
    <strong>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</strong>
    <br></br>
    <strong>{0.005*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</strong>
    <h2 className="my-3">Preview:</h2>
    {text}
  </div>
  </div>
  )
}
