import React, { useState } from 'react';
import memesData from "../memesData.js"

export default function Meme () {
    
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/ibij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage () {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    return (
        <div className="meme">
            <div className="form">
            <input type="text" id="fname" name="fname" placeholder="Top Text" className="form-input"/>
            <input type="text" id="lname" name="lname" placeholder="Bottom Text" className="form-input"/>
            <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <img src={meme.randomImage} className="meme-image" alt="meme"/>
        </div>
    )
}