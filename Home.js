import React from 'react'
import smile from "../Images/smile five.jpg"
import kid from "../Images/Toto.jpg"
import six from "../Images/smile six.jpg"
import { Body } from "../Dbody/Body";
import "./Home.css"

export const Home = () => {
  return (
    <div className='all'>
       <Body />
      <div className='container'>
      <h3 className='text-center text-bold'>Lucy herbal</h3> 
      <img className='this max-width:100%'src={smile}alt='smile'/>
      </div>
 {/* <div className="card d-block p-3">
  <div className="card-body ">
    <h4 className="card-title">welcome all</h4>
    <p className="card-text text-bg-yellow">Feel free to interact with this site. our herbs are made from pure natural plants.<br></br>
    We have various types of drugs to treat different types of diseases as shown below.</p>
   
  </div>

</div> */}

      <div className='compose d-flex gap-3 p-3'>
    <div className='card'>
      <img className='picha'src={kid}alt='herbal'></img>
      <p>Better health makes everyone to smile for the rest of his/her life.This is a wish everyone wishes to but when<br/>
      sometimes thing go in wrong direction.For this case, doctor lucy is here to restore your smile back.we treat various diseases <br/>
      and mostly the one that are affecting in large number within the society.</p>
    </div>
    <div className='card'>
      <img className='picha'src={six}alt="lucy"></img>
<p>Many have tried to consume chemist drugs but all has fallen in vain.Sometimes our body become resistance <br/> 
to these drugs since we have used them for long time.<br/>Now its time to go back to our natural drugs that are chemical free and they have a huge
healing power .This is were doctor lucy has invested to help you and return back your smile.  </p>
    </div>
    </div>
    </div>
    
  )
}
