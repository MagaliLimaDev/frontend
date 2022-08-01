import React from 'react'
import {Link} from 'react-router-dom'
import S from './Header.module.css'
const Header = () => {
  return (
    <Header className={S.container}>
        <h1>Resilia Store</h1>

        <nav>
<Link to='/'>Home</Link>
<Link to='/'>Prddutos</Link>
<Link to='/'>Produto Individual</Link>
        </nav>
    </Header>
  )
}

export default Header