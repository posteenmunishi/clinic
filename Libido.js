import React from 'react'
import libi from "../Images/libido img.jpg"
import { Body } from '../Dbody/Body'

export const Libido = () => {
  return (
    <div className='pl-5px'>
      
  <Body/>
  <div className='container'>
  
    <div className='header text-info'> <h2>Low libido </h2></div>
    <img className='libii h-50 w-100'src={libi}alt='libii'/>
    </div>
<div className='container'>
  <div className='row'>
    <div className='card'>
     
   <div className='card-header border-primary text-primary'><h4>What Is Low Libido?</h4></div> 
Low libido is a decrease in sex drive that can interfere with sexual activity. Low sex drive in men should not be confused with erectile dysfunction (ED), although the two conditions can co-exist.

It's essential for couples to communicate honestly with each other while identifying possible causes. Treatments can vary and may involve psychotherapy, hormone replacement, lifestyle changes, and/or adjustment of medications.
</div>
<div className='card'>
<h4 className='card-header border-primary text-primary'>Causes of Low Libido in Men</h4>
Low libido can be caused by a single factor but is more often related to a combination of several.<br/> These might include:
</div>
<li>Low testosterone level</li>
<li>Medications</li>
<li>Depression</li>
<li>Chronic illness</li>
<li>Stress</li>

<p>Restore back your personal or family happiness by contacting Doctor Lucy for more information. </p>
    </div>
    </div>
    </div>
  )
}
