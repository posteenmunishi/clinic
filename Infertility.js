import React from 'react'
import { Body } from '../Dbody/Body'
import infer from "../Images/pregnancy.jpg"
// import "./Infertility.css"

export const Infertility = () => {
  return (
    <div className='container'> 
      <Body/>
      <div className='container'>
        <div className='card w-100'>
      <h3 className='font-italic'>A family is well known when childrens exist. But sometimes the wishes go in hell due to some reasons like infertility.
        Its awesome when this issue is sorted for the couples. lets start the process of fertility restoration.
      </h3>
      </div></div>
      <div className='container w-100 pt-10 '>
      <img className='img 'src={infer}alt='infer'></img>
      </div>
      <div className='container'>
        <div className='row'>
        <div className='card'>
      <h2 className='card-header text-white bg-dark'>Infertility</h2>
      In general, infertility is defined as not being able to get pregnant (conceive) after one year (or longer) of unprotected sex. Because fertility in women is known to decline steadily with age, some providers evaluate and treat women aged 35 years or older after 6 months of unprotected sex. Women with infertility should consider making an appointment with a reproductive endocrinologist—a doctor who specializes in managing infertility. Reproductive endocrinologists may also be able to help women with recurrent pregnancy loss, defined as having two or more spontaneous miscarriages.

Pregnancy is the result of a process that has many steps. <br/>
</div>
<div className='card'>
<h5 className='card-header text-white bg-dark'>To get pregnant:</h5>

<li>A woman’s body must release an egg from one of her ovaries.</li>
<li>A man’s sperm must join with the egg along the way (fertilize).</li>
<li>The fertilized egg must go through a fallopian toward the uterus (womb).</li>
<li>The embryo must attach to the inside of the uterus (implantation).</li>
<li>Infertility may result from a problem with any or several of these steps.</li>

Impaired fecundity is a condition related to infertility and refers to women who have difficulty getting pregnant or carrying a pregnancy to term.</div>
</div>
</div>
</div>
  )
}
