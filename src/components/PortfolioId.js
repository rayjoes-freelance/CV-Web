import React from 'react';
import {Link} from 'react-router-dom';

const  PortfolioId = (props) =>{
 
    if (props.match.params.id == 1){
            return (
                <div>
                    <h1>Indecision-App</h1>    
                </div>
            );
    }

    if (props.match.params.id == 2){
        return (
            <div>
                <h1>Expensify</h1>    
            </div>
        );
    }

    return(
        <div>
            <h3>Vous n'avez selectionné aucun projets</h3>
            <p>Retourner à la <Link to="/">page d'accuielle</Link></p>
        </div>

    );
}

export default PortfolioId; 