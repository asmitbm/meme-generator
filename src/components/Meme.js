import React, { useState } from 'react';
import memesData from "../memesData.js"

export default function Meme () {
    
    const [memeImage, setMemeImage] = useState("")

    function getMemeImage () {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    
    return (
        <div className="meme">
            <div className="form">
            <input type="text" id="fname" name="fname" placeholder="Top Text" className="form-input"/>
            <input type="text" id="lname" name="lname" placeholder="Bottom Text" className="form-input"/>
            <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <img src={memeImage} className="meme-image" alt="meme"/>
        </div>
    )
}