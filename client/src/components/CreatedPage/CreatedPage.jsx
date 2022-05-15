
export default function CreatedPage (pokemon){
  let {id,img,name,type} = pokemon
  console.log('ahora en en el componente ',pokemon)
  return(
    <div>
      <h1>Created Pokemon</h1>
        <div>
          <img src={img} alt="pokeImg" />
          <p>{name}</p>
        </div>
    </div>
  )
}