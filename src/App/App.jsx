import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/templates/logo/Logo'
import Nav from '../components/templates/nav/Nav'
import Main from '../components/templates/main/Main'
import Footer from '../components/templates/footer/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div className="app">
        <Logo/>
        <Nav/>
        <Main icon="home" title="Início"
            subtitle="Segundo Projeto Em React"/>
        <Footer/>
    </div>