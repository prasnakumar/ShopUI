import React from 'react'
import './drawer.scss'
import { Divider } from '@mui/material'

function Drawer() {
    const value=['vegetable','fruits','drawer']
  return (
    <div className='drawer-header'>
        <h1>Main content</h1>
        <div>
        {value.map((val:any,key:any)=>{
return(<p>{val}<Divider/></p>)
        })}</div>
        </div>
  )
}

export default Drawer