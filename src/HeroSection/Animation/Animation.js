import React from 'react'
import './styles.css'
import dash from './assets/dash.svg'
import iota from './assets/miota.svg'
import logo from './assets/eth.svg'
import monitor from './assets/monitor.svg'
function Animation() {
  return (
    <div id="home-container">
        <div id="illustration">
            <img src={dash} alt="dash img" id="dash" class="crypto-icons"/>
            <img src={iota} alt="iota img" id="iota" class="crypto-icons"/>
            <img src={logo} alt="eth img" id="eth" class="crypto-icons"/>
            <img src={monitor} alt="monitor img" id="monitor"/>
        </div>
    </div>
  )
}

export default Animation