import { useRouter } from 'next/router'

const ItemCreatePage = () => {
  const { query } = useRouter()

  return <div>{query}</div>
}

export default ItemIdPage
