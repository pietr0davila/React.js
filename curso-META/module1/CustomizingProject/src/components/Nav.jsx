import '../App.css'
export default function Nav(props) {
    return (
        <nav className="nav-bar">
            <h1> { props.content } </h1>
            <ol>
                <li className='link'>home</li>
                <li className='link'>Contact</li>
                <li className='link'>Support</li>
                <li className='link'>About Us</li>
            </ol>
        </nav>
    )
}