import React from 'react';
import axios from 'axios';

export default props => {
    const { productId, successCallback, buttonName } = props;

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
        .then(res => {
            successCallback();
        })
    }

    let classAdds = "";
    buttonName === "Delete" ?
        classAdds += 'btn btn-danger' :
        classAdds += 'btn btn-danger'

    return (
        <button onClick={deleteProduct} className={`${classAdds} m-3 fw-bold text-white`}>{buttonName}</button>
    )
}