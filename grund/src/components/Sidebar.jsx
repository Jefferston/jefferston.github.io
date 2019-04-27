import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    return (
        <div className="sidebar">
                <div className="sidebar-logo"></div>
                <ul>
                    <li><Link to='/sokolov' data-class="home" data-name="home">
                        <i className="fa fa-home"><p>Home</p></i></Link>
                    </li>

                    <li><Link to='/about' data-class="user" data-name="about">
                        <i className="fa fa-user"><p>About</p></i></Link>
                    </li>

                    <li><Link to='/skills' data-class="cog" data-name="skills">
                        <i className="fa fa-cog"><p>Skills</p></i></Link>
                    </li>

                    <li><Link to='/projects' data-class="book-open" data-name="projects">
                        <i className="fa fa-book-open"><p>Projects</p></i></Link>
                    </li>

                    <li><Link to='/contacts' data-class="envelope" data-name="contacts">
                        <i className="fa fa-envelope"><p>Contacts</p></i></Link>
                    </li>
                </ul>
        </div>
    )
}