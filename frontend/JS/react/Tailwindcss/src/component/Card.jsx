import { Star } from 'lucide-react'
import React from 'react'

const Card = () => {
  return (
    <div className='w-80 border m-10 rounded-2xl border-gray-400 p-4' >
        <img src="https://sipalaya.com/wp-content/uploads/2024/03/UI-UX.png" alt="UIUX" />
        <div className='flex gap-2 my-4'>
        <Star color="#c2cc33" />
        <Star color="#c2cc33" />
        <Star color="#c2cc33" />
        <Star color="#c2cc33" />
        <Star color="#c2cc33" />
        </div>
        <h1 className='text-3xl font-semibold'>UI/UX Design </h1>
        <p>By <span className='hover:text-blue-600'>Sipalaya Infotech</span> </p>
        <div className='flex justify-between'> 
        <h2 className='text-2xl text-amber-600'>Rs 10000</h2>
        <button className='bg-blue-800 rounded-sm text-white active:scale-90 p-2'>Add to cart</button>
        </div>

    </div>
  )
}

export default Card
