import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    let deleteIcon = (ev) => {
        ev.target.textContent = ev.currentTarget.getAttribute('data-name');
        ev.target.className = '';

    }

    let returnIcon = (ev) => {
        ev.target.textContent = '';
        ev.target.className = `fa fa-${ev.currentTarget.getAttribute('data-class')}`
    }

    return (
        <div className="sidebar">
                <div className="sidebar-logo"></div>
                <ul>
                    <li><Link to='/sokolov' data-class="home" data-name="home"
                            onMouseOver={deleteIcon}
                            onMouseLeave={returnIcon}>
                        <i className="fa fa-home"></i></Link>
                    </li>

                    <li><Link to='/about' data-class="user" data-name="about"
                                onMouseOver={deleteIcon}
                                onMouseLeave={returnIcon}>
                        <i className="fa fa-user"></i></Link>
                    </li>

                    <li><Link to='/skills' data-class="cog" data-name="skills"
                                onMouseOver={deleteIcon}
                                onMouseLeave={returnIcon}>
                        <i className="fa fa-cog"></i></Link>
                    </li>

                    <li><Link to='/projects' data-class="book-open" data-name="projects"
                                onMouseOver={deleteIcon}
                                onMouseLeave={returnIcon}>
                        <i className="fa fa-book-open"></i></Link>
                    </li>

                    <li><Link to='/contacts' data-class="envelope" data-name="contacts"
                                onMouseOver={deleteIcon}
                                onMouseLeave={returnIcon}>
                        <i className="fa fa-envelope"></i></Link>
                    </li>
                </ul>
        </div>
    )
}