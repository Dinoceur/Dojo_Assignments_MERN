import React from 'react';
import { useParams } from 'react-router-dom';

const Routes = () => {
    const { value, color1, color2 } = useParams();

    const style = {
        color: `${color1}`,
        backgroundColor: `${color2}`
    }

    return (
        <div>
        <h2 className='m-2 p-2' style={style}>
            {
            isNaN(value) ?
                `Word: ${value}` :
                `Number: ${value}`
            }
        </h2>
        </div>
    )
}

export default Routes