import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className="headerContainer">
        <h1>Welcome to Coffee Coxala!</h1>
        <Link>
          <button>Make an Order</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
