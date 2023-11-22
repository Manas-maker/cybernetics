
const Nav = ({props}) => {
    return (
        <div className="Nav">
            <h1>LOGO</h1>
            <ul className="NavList">
                <li className="NavItem" data-value="HOME">
                    HOME
                </li>
                <li className="NavItem" data-value="ABOUT">
                    ABOUT
                </li>
                <li className="NavItem" data-value="ANNOUNCEMENTS">
                    ANNOUNCEMENTS
                </li>
                <li className="NavItem" data-value="CONTACT">
                    CONTACT
                </li>
            </ul>
        </div>
    )
}

export default Nav;