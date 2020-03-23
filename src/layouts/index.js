import React from 'react'
import { Normalize } from 'styled-normalize'
import GlobalStyles from '../styles/GlobalStyles'

const Layout = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyles />
    {children}
  </>
)

export default Layout
