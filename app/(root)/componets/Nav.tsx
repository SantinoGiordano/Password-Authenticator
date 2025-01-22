import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#333' }}>
      <Link href={'./'}><p style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Home</p></Link>
      <Link href={'/signIn'}><p style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Sign In</p></Link>
      <Link href={'/signUp'}><p style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Sign Up</p></Link>
    </div>
  )
}

export default Nav
