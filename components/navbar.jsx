import { e } from 'vaderjs';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/blog'>Blog</a>
                </li>
                <li>
                    <a href='/projects'>Projects</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}