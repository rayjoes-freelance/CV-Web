import React from "react";
import ProgressBar from './ProgressBar';
//import background from './background';

const bgColors = ['#3C1874','#ACE1E3','#12232E', '#707070','#164A41'];
const complArray= [85, 60, 85, 90, 60];

const Home = () =>(
    <div id='home'>
        <h1>Georges Raivire</h1>
        <p>
        Bonjour je m'appelle Georges, <br/> je suis
        développeur front-end junior en react
        </p>
        <br/>
        <div id='home3Title'>
            <h3>Mes compétences</h3>
        </div>
        <div id='home-list'>
            <ul>
                <li>HTML5   :    {<ProgressBar completed={complArray[0]} bgcolor={bgColors[0]}/>}</li>
                <li>CSS3    :    {<ProgressBar completed={complArray[1]}  bgcolor={bgColors[1]}/>}</li>
                <li>Javascript:    {<ProgressBar completed={complArray[2]}  bgcolor={bgColors[2]}/>}</li>
                <li>React   :    {<ProgressBar completed={complArray[3]}  bgcolor={bgColors[3]}/>}</li>
                <li>Redux   :    {<ProgressBar completed={complArray[4]}  bgcolor={bgColors[4]}/>}</li>
            </ul> 
        </div>
            <div id='home3Title'>
                <h3>Mes centres d'intérêts</h3>
            </div>
            <div id='home-list'>
                 <ul>
                    <li>La science fondamentale (Math & Physique)</li>
                    <li>La finance et l'économie</li>
                    <li>La data sciences </li>
                    <li>Le sport</li>
                </ul>
            </div>
    </div>
);

export default Home;