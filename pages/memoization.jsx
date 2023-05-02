import { useState, useCallback, memo } from 'react'

const Button = memo(({ handleClick, name }) => {
  console.log(`Renderizado botão: ${name}`)
  return <button onClick={handleClick}>{name}</button>
})

Button.displayName = 'Memo Buton'

export default function MemoizationPage() {
  console.log('renderizado contador')
  const [contadorUm, setContadorUm] = useState(0)
  const [contadorDois, setContadorDois] = useState(0)

  const memoizedContadorUm = useCallback(() => {
    setContadorUm(contadorUm + 1)
  }, [contadorUm])

  const memoizedContadorDois = useCallback(() => {
    setContadorDois(contadorDois + 1)
  }, [contadorDois])

  return (
    <div>
      <div>
        {contadorUm}-{contadorDois}
      </div>
      <Button handleClick={memoizedContadorUm} name="Botão 1"></Button>
      <Button handleClick={memoizedContadorDois} name="Botão 2"></Button>
    </div>
  )
}
