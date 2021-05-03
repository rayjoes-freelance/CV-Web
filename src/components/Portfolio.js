import React from 'react';
import {Link} from 'react-router-dom';

const  Portfolio = () =>{
     return (
         <div id='home'>
            <h1>Mes projets</h1>
            <p>Voici les projets sur lesquelles j'ai travaillé</p>
            <br/>
            <ul>
                <li><Link to="/portfolio/1">Indecision-app</Link></li>
                <li><Link to="/portfolio/2">Depensify</Link></li>
            </ul>
        </div>
    );
}

export default Portfolio;