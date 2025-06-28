import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <Link to='/'>
          <button>League Games</button>
        </Link>
        <Link to="/team-roster">
          <button>Team Rosters</button>
        </Link>
        <Link to="/add-sub">
          <button>Add Subs</button>
        </Link>
    </div>
  )
}

export default NavBar