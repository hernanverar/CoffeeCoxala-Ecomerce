import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className="headerContainer">
        <h1>Welcome to Coffee Coxala!</h1>
        <Link to="/menu">
          <button>check out our Menu</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
