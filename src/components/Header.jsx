import React from 'react';
import module from './Header.module.scss'


function Header(props) {
    return (
        <header className={module.header}>
            <div className={module.header_content}>
                <ul>
                    <li>
                        Главное
                    </li>

                    <li>
                        Контакты
                    </li>
                    
                    <li>
                        Помощь
                    </li>

                </ul>
            </div>
        </header>
    );
}

export default Header;