import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../files/brand/logo.svg"
import cloud from "../files/brand/cloud.svg"
export default function Logo() {
  return (
    <Link to='/' className='logo'>
      <img className="absolute-cloud-logo" src={cloud} />
      <img className='logo-brand' src={logo} alt="logo" />
      <h1 className="logo-title">Happy Kids</h1>
    </Link>

  )
}
