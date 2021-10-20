import { useEffect, useState } from 'react'
import ListCharacters from './ListCharacters'
import SerachBar from './SerachBar'
import useFetch from './useFetch'

let Home = () => {
  const [name, setName] = useState('')
  const { data, loading } = useFetch(
    `https://breakingbadapi.com/api/characters?name=${name}`,
  )
  return (
    <div>
      <h1>Breaking Bad Characters</h1>

      {loading && <div>Loading ...</div>}
      <SerachBar value={name} setName={setName}></SerachBar>
      {data.length == 0 ? <p>Character Unfound</p> : <p></p>}
      {data && <ListCharacters data={data} />}
    </div>
  )
}
export default Home
