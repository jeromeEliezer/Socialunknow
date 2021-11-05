import { NavLink } from 'react-router-dom';

export const LeftNav = () => {
    return (

        <div className="left-nav-container">
            <div className="icons">
                <div className="icons-bis">
                    <NavLink to='/' exact activeClassName='active-left-nav'>
                        <img src="/img/icons/rocket.svg" alt="home" />
                    </NavLink>

                    <NavLink to='/trending' exact activeClassName='active-left-nav'>
                        <img src="/img/icons/rocket.svg" alt="home" />
                    </NavLink>

                    <NavLink to='/profil' exact activeClassName='active-left-nav'>
                        <img src="/img/icons/rocket.svg" alt="home" />
                    </NavLink>

                </div>
            </div>
        </div>
    )
}
