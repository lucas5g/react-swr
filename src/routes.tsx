import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import UserList from './pages/UserList'
import UserDetails from './pages/UserDetails'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' component={UserList}  exact />
      <Route path='/users/:id' component={UserDetails}  />
    </BrowserRouter>
  )
}