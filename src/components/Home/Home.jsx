import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Middle from '../Middle/Middle.jsx';
import Below from '../Below/Below.jsx';
import End from '../End/End.jsx';
import SecondLast from '../SecondLast/SecondLast.jsx';
import Last from '../Last/Last.jsx';


const Home = () => {
  return (
    <div>
        <Hero />
        <Middle />
        <Below />
        <End />
        <SecondLast />
        <Last />

    </div>
  )
}

export default Home;