import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =   ()  =>  {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange =  ()  =>  {
        console.log("Uppercase was clicked");
        setText(EventTarget.value);
    }
    const [text, setText]   =   useState('Enter text here');
    return (
        <div>
            <h1>{ props.heading }</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="3" value={text}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    )
}

