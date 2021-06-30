import './header.css';

import React from 'react';

import request from './request';

function Header({setoption}) {
  return (
    <div className="header">
     <div className="headerleft">
     <img src="https://www.rickrungood.com/wp-content/uploads/2019/02/Slack.png" alt="" />
     <h3>Tonors</h3>
    
     
    </div>

    <div className="headercenter">
    <h1 onClick={()=>setoption(request.Trending)} >Animated gifs</h1>

    <h1 onClick={()=>setoption(request.Human)}>Human gifs</h1>
    
    </div>

    <div className="headerright">
    
    
    <input type="text" placeholder="search"/>
    <button>Search</button>

    
    </div>
      
    </div>
  );
}

export default Header;
