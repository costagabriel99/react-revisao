import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function useEffectPage() {
  const [userList, setUserList] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('Componente Inicializado')
  }, [])

  useEffect(() => {
    async function fetchData() {
      const request = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await request.json()
      setUserList(data)
    }

    fetchData()
    return function saveData() {
      console.log('Save Data')
    }
  }, [])

  useEffect(() => {
    console.log('Lista Modificada')
  }, [userList])

  useEffect(() => {
    const wheelListener = () => {
      console.log('wheel listener')
    }

    addEventListener('wheel', wheelListener)

    return () => {
      removeEventListener('wheel', wheelListener)
    }
  }, [])

  const handleForm = (event) => {
    event.preventDefault()
    setUserList([
      ...userList,
      {
        name
      }
    ])
    setName('')
  }

  return (
    <div>
      {userList.map((user, key) => {
        return <div key={`user-${key}`}>{user.name}</div>
      })}
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      <div>
        <Link href="/">Salvar Tudo</Link>
      </div>
    </div>
  )
}
