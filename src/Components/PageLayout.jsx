import React from 'react'
import Header from './Header'
import Footer from './Footer'

const PageLayout = ({children}) => {
  return (
    <div>
      <div>
        <div>
          <Header />
          <hr className='bg-slate-500 border-none h-[1px] w-full' />
        </div>

        <div className='pt-20'>
          {children}
        </div>
        
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PageLayout