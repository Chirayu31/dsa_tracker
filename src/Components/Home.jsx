import React from 'react'
import FlexContainer from './FlexContainer'
import { categories } from '../data'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <FlexContainer>
      {categories.map((cat,idx) =>(
        <div className="box" key={idx}>
          <Link to={`/${cat}`}>
            <p>{cat}</p>
          </Link>
        </div> 
      ))}
          
    </FlexContainer>
  )
}

export default Home