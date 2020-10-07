import React from 'react'
import './l.css'
const Hero =({handleLogout},{user})=>{
    return(
        <section className='Hero'>
            <nav>
                {console.log({user})}
                <h1>Welcome</h1>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}
export default Hero