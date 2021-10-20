const SerachBar = ({ name, setName }) => {
  return (
    <form className="form">
      <input
        onChange={(e) => {
          setName(e.target.value)
        }}
        value={name}
        type="text"
        placeholder="Search for Character"
      />
    </form>
  )
}

export default SerachBar
