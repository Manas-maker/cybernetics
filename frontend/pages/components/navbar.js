import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'


const Nav = ({props}) => {
    return (
        <div className="Nav">
            <h1><Image priority src={logo} alt="Cybernetics" height={100}/></h1>
            <ul className="NavList">
                <li className="NavItem" data-value="HOME">
                    <Link href='/'>HOME</Link>
                </li>
                <li className="NavItem" data-value="ABOUT">
                    <Link href='/about' id="aboutNav">ABOUT</Link>
                </li>
                <li className="NavItem" data-value="ANNOUNCEMENTS">
                    <Link href='/blog'>CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
