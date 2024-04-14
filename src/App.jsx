import React from 'react'
import Header from './Components/Header'
import CategoryBox from './Components/CategoryBox'
import Footer from './Components/Footer'
import NewCategory from './Components/NewCategory'

const App = () => {
  return (
    <div className='bg-slate-950 min-h-screen'>
      <div>
        <Header />
      </div>
      <div className='pt-20'>
        <div name="tasks" className='px-12 text-slate-50'>
          <NewCategory />
        </div>
        <div className='text-slate-50 px-12'>
          <CategoryBox />
        </div>
        <Footer />
        </div>
    </div>
  )
}

export default App