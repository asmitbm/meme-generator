export default function Meme () {
    return (
        <div className="meme">
            <div className="form">
            <input type="text" id="fname" name="fname" placeholder="Top Text" className="form-input"/>
            <input type="text" id="lname" name="lname" placeholder="Bottom Text" className="form-input"/>
            <button className="form-button">Get a new meme image 🖼️</button>
            </div>
        </div>
    )
}