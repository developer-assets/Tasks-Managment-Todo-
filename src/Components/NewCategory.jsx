import React from 'react'

const NewCategory = () => {
  return (
    <div className='w-full flex justify-stretch gap-2 pt-14'>
      <input type="text" className='bg-transparent outline-none border border-gray-500 w-full pl-3 focus:pl-7 duration-200 rounded-lg' placeholder='New category name' />
      <button className='bg-fuchsia-700 px-6 py-2 rounded-lg text-black'>NEW</button>
    </div>
  )
}

export default NewCategory