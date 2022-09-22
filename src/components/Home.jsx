import React from 'react'
import logo from './logo-Happy-Cake.png';

const Home = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 my-5'>
      <div>
        <h1>Bienvenido a <strong>Happy Cake</strong></h1>
      </div>
      <div>
        <h5>El lugar de los pasteles felices</h5>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Home