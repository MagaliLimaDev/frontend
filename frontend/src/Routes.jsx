import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
const Routes = () => {
  return (
    
    <BrowserRouter>
    
    <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Produtos/>}/>
        <Route path='/' element={<ProdutoIndividual/>}/>

    </Switch>
    </BrowserRouter>
  )
}

export default Routes