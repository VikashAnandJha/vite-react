import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const links = [
        {
            id: 1, name: "home", path: "/"
        },
        {
            id: 2, name: "about", path: "/about"
        },
        {
            id: 3, name: "contact", path: "/contact"
        },
    ];

    return (
        <>

            <div className='link-container'>
                {
                    links.map((item, id) => {
                        return <Link key={id} to={item.path} className='nav-link'>{item.name}</Link>
                    })
                }
            </div>




        </>
    );
}

export default NavBar;
