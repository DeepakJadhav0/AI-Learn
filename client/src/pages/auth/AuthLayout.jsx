import React from 'react'
import AuthNavbar from './navbar/AuthNavbar'
import AuthFooter from './footer/AuthFooter'
import { Outlet} from "react-router-dom"

export default function AuthLayout() {
  return (
    <>
    <AuthNavbar/>
    <Outlet/>
    <AuthFooter/>
    </>
  )
}
