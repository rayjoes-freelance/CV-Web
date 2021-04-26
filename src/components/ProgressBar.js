import React from "react";


const ProgressBar = (props) =>{
    const {bgcolor, completed} = props;

    const containerStyles = {
        height: 15,
        width: '65%',
        backgroundColor: "#e0e0de",
        borderRadius: 65,
        marginLeft: '15px'
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
        
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    
    return (
    <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
    </div>
    );
};

export default ProgressBar;