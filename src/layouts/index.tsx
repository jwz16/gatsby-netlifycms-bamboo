import React from 'react'
import NavBar from '../components/navbar'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar/>
      {props.children}
    </div>
  )
}