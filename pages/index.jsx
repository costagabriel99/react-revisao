import { useState } from 'react'

import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function HomePage() {
  const handleLabelClick = () => {
    console.log('HANDLE LABEL CLICK')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('HANDLE SUBMIT')
    console.log({ email, password })
  }

  const [email, setEmail] = useState()
  const [password, setPasword] = useState()

  const handleChangeInput = (event, onChange) => {
    onChange(event.target.value)
  }
  return (
    <>
      <Title onClick={handleLabelClick}>Faça o Login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input
          type="email"
          placeholder="Digite seu email"
          onChange={(event) => handleChangeInput(event, setEmail)}
        />
        <p>O email digitado foi: {email}</p>
        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(event) => handleChangeInput(event, setPasword)}
        />
        <Button type="submit">Botão dentro do form</Button>
      </form>
      <Button onClick={handleLabelClick}>Botão fora do form</Button>
      <label>LABEL TESTE</label>
    </>
  )
}
