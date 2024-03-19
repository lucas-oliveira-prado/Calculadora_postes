import './style.css'
import React, { useState } from 'react';

function Input({ label, value, onChange }) {
    const handleInputChange = (e) => {
      // Chama a função onChange passada como prop para atualizar o estado no componente pai
      onChange(e.target.value);
    };
  
    return (
      <div className="container-input">
        <label className="label-input">{label}</label>
        <input className="decimal-input" value={value} onChange={handleInputChange} />
      </div>
    );
  }
  
  export default Input;