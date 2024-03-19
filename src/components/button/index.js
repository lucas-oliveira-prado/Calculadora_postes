import React from 'react';
import './style.css';

function Button({ onClick, children }) {
    return (
        <div className="container-button">
            <button className="button" onClick={onClick}>{children}</button>
        </div>
    );
}
// <label className="label-button">Não é possível calcular o tamanho do meu amor por você S2</label>
export default Button;