import React from 'react'
import { Body } from '../Dbody/Body'
import skin from "../Images/skin.jpg"
import "./Skin.css"

export const Skin = () => {
  return (
    <div>
    <div className='container '>
        <Body/>
        <div className='card w-100'>
        <div className='card-header text-bold'>
          <h2 className='text-uppercase font-weight-bold'>Skin diseases</h2></div>

        <div className='card-text'>Skin diseases are of various type. lets discuss them down here. </div>
        </div>
        <div className='card w-8rem justify-content-center'>
        <img className='img 'src={skin}alt="skin"/>
        </div>
        </div>
       
          <div  className='row'>
          <div className='col-6'>
        <div className=' skin d-flex gap-3 justify-content-center'>

</div>
</div>
<div className='card'>
<h3 className='card-header bg-dark text-white'>Alopecia Areata</h3> 
What is alopecia areata? It is a condition that attacks your hair follicles (they make hair). In most cases, hair falls out in small, round patches.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>Atopic Dermatitis</h3>
What is atopic dermatitis? It is a skin disease causing much itchiness. Scratching leads to redness, swelling, cracking, weeping clear fluid, crusting, and scaling.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>Epidermolysis Bullosa</h3>
What is epidermolysis bullosa? It is a group of diseases causing painful blisters to form on the skin. These blisters can cause problems if they become infected.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>Hidradenitis Suppurativa (HS)</h3>
Hidradenitis suppurativa (also known as acne inversa) is a chronic, noncontagious, inflammatory condition characterized by pimple-like bumps or boils and tunnels or tracts on and under the skin.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>chthyosis</h3>
What is ichthyosis? It is a disorder that causes dry, thickened skin that may look similar to fish scales.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>Pachyonychia Congenita</h3>
What is pachyonychia congenita? It is a rare disorder causing thick nails and painful calluses on the bottoms of the feet and other symptoms.
 </div>
 <div className='card'>
<h3 className='text-white card-header bg-dark'>Pemphigus</h3>
What is pemphigus? It is a disease where the immune system attacks healthy cells in the top layer of skin, resulting in blisters.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>Psoriasis</h3>
Psoriasis is a skin disease that causes red, scaly skin that may feel painful, swollen, or hot. Learn more about the types and what causes psoriasis.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>Raynaud’s Phenomenon</h3>
What is Raynaud’s phenomenon? It is a disease that affects blood vessels. It causes your body to not send enough blood to the hands and feet for a period of time.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>Rosacea</h3>
What is rosacea? It is a long-term disease that causes reddened skin and pimples, usually on the face. It can also make the skin thicker and cause eye problems.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>Scleroderma</h3>
Scleroderma causes patches of tight, hard skin, but can also harm your blood vessels and organs. Learn the causes and treatments of this skin disease.
</div>
<div className='card'>
<h3 className='text-white card-header bg-dark'>Vitiligo</h3>
Vitiligo is a disorder that causes patches of skin to become white. It happens because cells that make color in your skin are destroyed.
</div>
</div>
</div>

  )
}
