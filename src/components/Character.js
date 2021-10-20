const Character = ({ data }) => {
  return (
    <div className="card">
      <img alt="character" className="card-image" src={data.img}></img>
      <div>
        <h2 className="title-char">{data.name}</h2>
        <p className="text-char">{data.birthday}</p>
        <p className="text-char bold">{data.portrayed}</p>
      </div>
    </div>
  )
}

export default Character
