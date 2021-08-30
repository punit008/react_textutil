import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =   ()  =>  {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =   ()  =>  {
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange =  (event)  =>  {
        console.log("Uppercase was clicked");
        setText(event.target.value);
    }
    const [text, setText]  = useState('');
    return (
        <>
            <div className="container">
                <h1>{ props.heading }</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="3" value={text}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button> &nbsp;
                <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p> {text.split(" ").length} words,{text.length} characters </p>
                <p> {0.008 * text.split(" ").length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

