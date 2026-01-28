import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-grey-600'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum sunt dicta nihil labore optio ratione culpa ipsam? Debitis accusamus exercitationem aliquid tenetur provident praesentium obcaecati doloribus veritatis alias quibusdam!
            </p>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className="flex flex-col gap-1 text-grey-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-grey-600'>
                <li>+254 720 664 125</li>
                <li>asugam9gmail.com</li>
            </ul>
        </div>      


      </div>
      <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyrigt 2026@ moses.com - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer
