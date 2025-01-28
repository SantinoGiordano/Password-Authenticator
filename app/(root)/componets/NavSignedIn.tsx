import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#333' }}>
      <Link href={'./freinds'}><p style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Friends</p></Link>
      <Link href={'/signIn'}><p style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Account</p></Link>
      <Link href={'./'}><p style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Sign Out</p></Link>
    </div>
  )
}

export default Nav