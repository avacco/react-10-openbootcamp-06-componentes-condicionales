import React, { Component } from "react";
import PropTypes from 'prop-types'

/**
 * Ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida
 */

class LifeCycleExample extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log("Will mount: Antes del montaje del componente")
  }

  componentDidMount() {
    console.log("Did mount: Justo al acabar el montaje del componente, antes de ser renderizado")
  }

  componentWillReceiveProps() {
    console.log("Will receive props: Si va a recibir nuevas props")
  }
  

  shouldComponentUpdate(nextProps, nextState) {
    /**
     *  Controla si el componente debe o no actualizarse, retornando true o false
     */
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Will update: Antes de actualizar el componente")
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Did update: Despues de actualizar el componente")
  }

  componentWillUnmount(){
    console.log("Will unmount: Justo antes de desaparecer")
  }


}