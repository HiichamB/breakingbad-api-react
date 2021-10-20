import Character from './Character'

const ListCharacters = ({ data }) => {
  return (
    <div className="list-char">
      {data.map((char) => {
        return <Character key={char.char_id} data={char}></Character>
      })}
    </div>
  )
}

export default ListCharacters
