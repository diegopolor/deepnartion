import React from 'react';
import './index.css'
import Header from './components/Header'
import NFT from './components/NFT';
import WhoYouAre from './components/WhoWeAre';
import RoadMap from './components/RoadMap';

const App = () => {
  return (
    <>
      <Header />
      <NFT /> 
      <WhoYouAre/>
      <RoadMap />
    </>
  )
};

export default App;
