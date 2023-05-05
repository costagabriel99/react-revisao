import useFetch from '../src/hooks/useFetch'

export default function CustomHookPage() {
  const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/users')

  console.log(data)
  return (
    <div>
      <h4>Exemplo hook customizado:</h4>
      {loading && <p>Carregando...</p>}
      {data?.map(({ id, name }) => (
        <div key={`item-${id}`}>{name}</div>
      ))}
    </div>
  )
}
