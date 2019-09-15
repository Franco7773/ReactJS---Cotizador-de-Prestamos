import React, { Component } from 'react';

class Formulario extends Component {
  state = {
    cantidad: '',
    plazo: '' 
   }

   calcularPrestamo = (e) => {
    e.preventDefault();
    // Aplicar destructuring
    let { cantidad, plazo } = this.state;

    // Pasarlo al componente padre
    this.props.datosPrestamo(cantidad, plazo);
   }

   actualizarStage = (e) => {
     // Leer los datos del formulario
    let { name, value } = e.target;
     // Actualizar el State
     this.setState({
       [name]: Number(value)
     })
   }

   habilitarSubmit = () => {
     // Aplicar destructuring
    let { cantidad, plazo } = this.state;
     // Leer las variables
    let noValido = !cantidad || !plazo;
     //return res
    return noValido;
   }

  render() {
    return (
      <form onSubmit={this.calcularPrestamo}>
        <div>
          <label>Cantidad Prestamo:</label>
          <input onChange={this.actualizarStage} type="number" name="cantidad" className="u-full-width" placeholder="Ejemplo 3000"/>
        </div>
        <div>
          <label>Plazo para pagar</label>
          <select onChange={this.actualizarStage} name="plazo" className="u-full-width">
            <option value="">Seleccionar</option>
            <option value="3">3 Meses</option>
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            <option value="24">24 Meses</option>
          </select>
        </div>
        <div>
          <input disabled={this.habilitarSubmit()} type="submit" value="Calcular" className="u-full-width button-primary"/>
        </div>
      </form>
    );
  }
}

export default Formulario;