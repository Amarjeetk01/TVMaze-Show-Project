import React from 'react'
import ShowCard from '../components/ShowCard';

const Home = ({data}) => { 
  return (
    <div className='show-container'>
    {data.map((data, index) => (
      <ShowCard key={index} data={data}/>
    ))}
    </div>
  )
}

export default Home