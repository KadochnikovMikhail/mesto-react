import logo from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" alt="Проект Место" src={logo}/>

        </header>
    );
}

export default Header;