import React from 'react'
import { Body } from '../Dbody/Body'
import ulcer from "../Images/Ulcers 1.jpg"
import ulce from "../Images/Ulcers 2.jpg"
export const Ulcers = () => {
  return (
    <div> <Body/>
    
    <div className=' container h-50'>
   
    <img className='w-50 h-40vh'src={ulcer}alt='ulcer'/>
    <img className='w-50 flex-end'src={ulce}alt='ulcer'/>
    
    </div>
    <div className='container '>
      <div className='row'>
        <div className='card w-100'>
    <h2 className='card-header border-primary'>  What is ulcers.</h2>
    
    Ulcers are sores that are slow to heal or keep returning. They can take many forms and can appear both on the inside and the outside of your body.

    They can be found on places of your body you can see, such as a leg ulcer found on the skin, or in places you can’t see, such as a peptic ulcer in the lining of your stomach or upper intestine. From your eye to your foot, you can get them just about anywhere on your body.
    
    Injuries, diseases, and infections can cause them. What they look like depends on where you have them and how you got them. While some go away on their own, others cause serious problems if you don’t treat them.
    If a person has an ulcer, they may feel a burning sensation in their stomach. This burning sensation often:

<li>lasts a few minutes or several hours</li>
<li>eases after taking antacids or stopping food intake</li>
<li>starts in the middle of the night or during meals</li>
<li>occurs off and on for several weeks</li>
<p>If your experience such kind of symptoms visist the nearest health center or contact Doctor lucy for more information and medication.</p>
</div>
</div>
</div>
</div>
  )
}
