import React,{useState} from 'react';
import logo from './logo.svg';
import './home-dashboard.scss';
import Mainproduct from '../Component/product/main-product'
import Headerdashboard from '../Component/Header/header-dashboard'
import Divider from '@mui/material/Divider';
import Drawer  from '../Component/drawer/drawer';
function Homedashboard() {
  const [drawer, setdrawer] = useState(false);
  let a=0;
  const updateClick=(e:any)=>{  
    console.log("prasadnn123",1)
setdrawer(!drawer);
e.preventDefault()
  }
  return (
    <div className="App">
      <Headerdashboard drawerbutton={updateClick} />
      <div className='dashboard-split'>
      {drawer&&<Drawer/>}
        <Divider orientation="vertical" flexItem/>
      <Mainproduct/>
      </div>
    </div>
  );
}

export default Homedashboard;
