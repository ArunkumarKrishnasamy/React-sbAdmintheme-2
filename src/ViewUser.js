import React,{ useContext } from 'react'
import { useParams } from 'react-router-dom'
import UserContext from './UserContext'

function ViewUser() {
  let userData = useContext(UserContext);
  let params = useParams()
  return (
    <div>
      ViewUser Details
      <h1> {userData.users[params.id].name}</h1> 
      <h1> {userData.users[params.id].position}</h1> 
      <h1> {userData.users[params.id].office}</h1> 
      </div>
  )
}

export default ViewUser