import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

interface User {
  id: number,
  name: string
}

const UserDetails = () => {

  const { id } = useParams()
  const { data } = useFetch<User>(`users/${id}`)

  if(!data){
    return <p>Carregando...</p>
  }
  return (
    <div>
      <h1>detalhes do usuário</h1>
      <ul>
        <li>ID: {data?.id}</li>
        <li>Name: {data?.name}</li>
      </ul>
    </div>

  )
}

export default UserDetails