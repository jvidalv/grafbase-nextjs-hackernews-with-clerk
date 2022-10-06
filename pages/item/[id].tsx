import { useRouter } from 'next/router'

const ItemIdPage = () => {
  const { query } = useRouter()

  return <div>{query}</div>
}

export default ItemIdPage
