import React from 'react';

export default function Skills() {
    return (
        <div className="contacts">
            <h1>Contacts</h1>

            <ul>
                <li>
                    <i className="fa fa-envelope contacts-mail"></i>                   
                </li>

                <li>
                    <a href="https://www.instagram.com/sokololoev/" 
                        target="_blank" rel="noopener noreferrer" className="contacts-inst">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/Jefferston" 
                        target="_blank" rel="noopener noreferrer" className="contacts-git">
                        <i className="fab fa-github"></i>
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/dmitrii-zhigalev-b34934184/" 
                        target="_blank" rel="noopener noreferrer" className="contacts-link">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
            </ul>

        </div>
    )
}