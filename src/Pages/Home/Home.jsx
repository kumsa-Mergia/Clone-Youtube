import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <>
    <div className="flex">
    <Sidebar sidebar={sidebar}/>
    <div className={`  ${sidebar?"": ""}`}>
      <Feed/>
    </div>  
    </div>
  
    </>
  )
}

export default Home