import Title from '../src/components/title/Title'
import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'

export default function HomePage() {
  const handleLabelClick = () => {
    console.log('HANDLE LABEL CLICK')
  }

  return (
    <>
      <Title onClick={handleLabelClick}>Faça o Login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form>
        <Input type="email" placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <Button>Botão</Button>
      </form>
      <label>LABEL TESTE</label>
    </>
  )
}
