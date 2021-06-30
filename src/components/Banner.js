import './banner.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from './axios';

function Banner({option}) {
   const [gif, setgif] = useState([]);

   useEffect(()=> {
       async function  fetchdata() {
         try{
           const request= await axios.get(option)
          setgif(request.data.data)
        
         }
           
            catch(err){
         console.log(err)
       }
          
       }
       fetchdata()

      

   },[option])

 


  return (
    <div className="banner">
   
    {gif.map((loader)=>(
      <div className="bannerborder" key={loader.id}>
     
      <img className="bannerlogo" src={loader.images.downsized.url} alt=""/>
      
      </div>
     
    ))}
      
    </div>
  );
}

export default Banner;
