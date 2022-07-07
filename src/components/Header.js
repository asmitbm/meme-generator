import icon from '../images/troll-face.svg'

export default function Header () {
    return (
        <nav className="navbar">
            <img src={icon} alt="app icon" className="header-icon"/>
            <h2 className="header-title">Meme Generator</h2>
        </nav>
    )
}