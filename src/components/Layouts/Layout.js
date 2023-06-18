import { NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = ({children}) => {
    return <>
        <header className='header'>
            <h1 className='heading1'>Habit Tracker</h1>
            <nav className='layout-nav'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/archive">Archive</NavLink>
            </nav>
        </header>
        <main className='layout-main'>
            {children}
        </main>
    </>
};

export default Layout;