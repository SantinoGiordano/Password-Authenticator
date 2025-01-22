import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#333' }}>
      <Link href={'./'}><a style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Home</a></Link>
      <Link href={'/signIn'}><a style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Sign In</a></Link>
      <Link href={'/signUp'}><a style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Sign Up</a></Link>
    </div>
  )
}

export default Nav
