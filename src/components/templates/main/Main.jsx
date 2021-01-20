import React from 'react'
import './Main.css'
import Header from '../header/Header'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <React.Fragment>
        <Header {...props}/>
        <main className="content">
            Conteudo
        </main>
    </React.Fragment>