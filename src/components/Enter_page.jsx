import React from 'react'
import { Link } from 'react-router-dom'
export const Enter_page = () => {
  return (
    <><div className='grid grid-cols-3  space-x-4p-4 m-4'>
        <Link to="enter"><div className='border-2 border-solid border-black shadow-black shadow-md bg-slate-300 p-4 mx-2 rounded-md '>Please Enter</div></Link></div>
  </>)
}
