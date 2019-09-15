import React from 'react';

const Resultado = (props) => {
  return (
    <div className="u-full-width resultado">
      <h2>Resultados</h2>
      <p>La cantidad Solicitada fue: $ {props.cantidad}</p>
      <p>A pagar en: ${props.plazo} Meses</p>
      <p>Total a pagar: $ {props.TOTAL}</p>
      <p>Su pago mensual es de: $ {(props.TOTAL / props.plazo).toFixed(2)}</p>
    </div>
  );
}

export default Resultado;