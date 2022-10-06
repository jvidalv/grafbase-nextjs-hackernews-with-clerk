import { useRouter } from 'next/router'

const UserIdPage = () => {
  const { query } = useRouter()

  return <div>{query}</div>
}

export default UserIdPage
