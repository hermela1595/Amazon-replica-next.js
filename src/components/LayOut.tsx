
import React, {ReactElement} from 'react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Footer from './footer/Footer'


interface Props {
    children: ReactElement;
}
const LayOut = ({children}: Props ) => {
  return (
    <>
        <Header/>
        <Nav/>
        {children}
        
        <Footer/>
    </>
  )
}

export default LayOut