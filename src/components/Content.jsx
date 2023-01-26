import React from 'react';
import module from './Content.module.scss'
import Weather from '../assets/clouds.gif'
import Search from './Search'
import WeatherCard from './WeatherCard'

function Content(props) {
    return (
        <main style={{
            // backgroundImage: `url(${Weather})`,
            // backgroundRepeat: 'no-repeat', 
            // backgroundSize: 'cover'
        }}>
            <div className={module.main}>
                <h1>Прогноз Погоды</h1>
                <Search />
                <WeatherCard />
                {/* <WeatherCard></WeatherCard> */}
            </div>
        </main>
    );
}

export default Content;