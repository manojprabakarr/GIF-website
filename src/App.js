import React, { useState } from 'react';

import Banner from './components/Banner';
import Header from './components/Header';
import request from './components/request';

function App() {
  const [option, setoption] = useState(request.Trending);
  return (
    <div className="App" >
    <Header setoption={setoption} />

    <Banner  option ={option}/>

     
    </div>
  );
}

export default App;
