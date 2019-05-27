import React from 'react';
import { Link } from "react-router-dom";

const applinks = [
    {
        name: "На главную",
        linkTo: ""
    },
    {
        name: "Новости",
        linkTo: "news"
    },
    {
        name: "Профиль",
        linkTo: "profile"
    },
];

const Header = () => {
    const menuItems = applinks.map((applink, key) => {
        return (<li key={key} className="m-2 nav-item font-weight-bold">
            <Link className="nav-link" to={"/" + applink.linkTo}>
                {applink.name}
            </Link>
        </li>)
    });

    return (<header className="header">
        <nav>
            <ul className="p-2 nav list-unstyled">
                { menuItems }
            </ul>
        </nav>
    </header>);
};

export default Header;