import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './components/style.css'

import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

import { BrowserRouter, Link, NavLink, Router, Route, useRoutes } from "react-router-dom";

import { Settings } from './components/Settings'
import  {Home}  from './components/Home'



function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home/>
      
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ]);
}


function App() {
  
  return (
    <>
       <BrowserRouter>
        <div id='menudiv'>
          <NavLink to="/">
            {({ isActive }) => (
              <p style={{ color: isActive ? "red" : "black" }}>Home</p>
            )}
          </NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </div>

        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
