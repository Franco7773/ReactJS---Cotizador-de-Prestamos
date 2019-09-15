import React, { Component, Fragment } from 'react';
import './App.css';
import './normalize.css';
import './skeleton.css';

import Formulario from './components/Formulario';
import { calcularTotal } from './helpers';
import Resultado from './components/Resultado';
import Mensaje from './components/Mensaje';
import Spinner from './components/Spinner';

class App extends Component {

  state = {
    TOTAL: '',
    cantidad: '',
    plazo: '',
    cargando: false
  }

  datosPrestamo = (cantidad, plazo) => {

    const TOTAL = calcularTotal(cantidad, plazo);
    // Colocar el resultado en el state junto a la cantidad y el plazo
    this.setState({
      cargando: true
    }, () => {
      setTimeout(() => {
        this.setState({
          TOTAL,
          cantidad,
          plazo,
          cargando: false
        })
      }, 3000);
    });
  }

  render() {
    let { TOTAL, plazo, cantidad, cargando } = this.state;
    // Cargar un Componente condicionalmente
    let componente;

    if (TOTAL === '' && !cargando) {

      componente = <Mensaje/>;
    } else if (cargando) {

      componente = <Spinner/>;
    } else {

      componente = <Resultado TOTAL={TOTAL} plazo={plazo} cantidad={cantidad}/>;
    }
    return (
      <Fragment>
        <h1>Cotizador de Prestamos</h1>
        <div className="container">
          <Formulario datosPrestamo={this.datosPrestamo}/>
          <div className="mensajes">
            { componente }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
