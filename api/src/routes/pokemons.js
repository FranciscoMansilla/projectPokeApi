const { Router } = require('express');
const {Pokemon,Type} = require('../db');
const axios = require('axios')

const router = Router();

router.get('/', async (req,res,next)=>{
  let {name} = req.query
  if(name){
    let pokeDb = await Pokemon.findAll({
      include: Type
    })
    let findpoke = pokeDb.find(p=> name===p.name )
    try {
      if(!findpoke){
        let findpokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        res.send({
          id: findpokeapi.data.id,
          name: findpokeapi.data.forms[0].name,
          img: findpokeapi.data.sprites.front_default,
          hp: findpokeapi.data.stats[0].base_stat,
          attack: findpokeapi.data.stats[1].base_stat,
          defense:findpokeapi.data.stats[2].base_stat,
          speed:findpokeapi.data.stats[5].base_stat,
          height:findpokeapi.data.height,
          weight:findpokeapi.data.weight,
          type: findpokeapi.data.types.map(t=>{
            return {name:t.type.name}
          })
        })
    
      }else{
        res.send(findpoke)
      }
    } catch (error) {
      next(error)
    }
  } else {
    try {
      let urlPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon')
      let urlPokemon1 = await axios.get(urlPokemon.data.next)
      let pokemonsDatabase = await Pokemon.findAll({
        include: Type
      })
  
      const pokemon =urlPokemon.data.results.map((p)=> axios.get(p.url))
      const pokemon1 =urlPokemon1.data.results.map((p)=> axios.get(p.url))
      
      await Promise.all([...pokemon, ...pokemon1])
      .then(respuesta=>{
            let filteredPoke = respuesta.map(resultado=>{
              return {
                id: resultado.data.id,
                name: resultado.data.forms[0].name,
                img: resultado.data.sprites.front_default,
                hp: resultado.data.stats[0].base_stat,
                attack: resultado.data.stats[1].base_stat,
                defense:resultado.data.stats[2].base_stat,
                speed:resultado.data.stats[5].base_stat,
                height:resultado.data.height,
                weight:resultado.data.weight,
                type: resultado.data.types.map(t=>{
                  return {name:t.type.name}
                })
              }
            })
            //let allpokemons= [...filteredPoke, ...pokemonsPromiseDb]
            res.send([...filteredPoke,...pokemonsDatabase])
          })
    } catch (error) {
      next(error)
    }
  }
    
})

router.post('/',async(req,res,next)=>{
  let {name,img,hp,attack,defense,speed,height,weight,types}=req.body
  if(!name) return res.status(400).json({msg: 'falta el parametro "name"'})
  try {
    let pokemon = await Pokemon.create({
      name,img,hp,attack,defense,speed,height,weight
    })
    let listTypes = await Promise.all(
      types.map((el) =>
        Type.findOne({ where: { name: el } })
      )
    )
    await pokemon.setTypes(listTypes);
    
    res.status(201).json(pokemon)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req,res,next)=>{
  let {id} = req.params
  try {
    if(id>=1 && id<=40){
      let findpokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      res.send({
        id: findpokeapi.data.id,
        name: findpokeapi.data.forms[0].name,
        img: findpokeapi.data.sprites.front_default,
        hp: findpokeapi.data.stats[0].base_stat,
        attack: findpokeapi.data.stats[1].base_stat,
        defense:findpokeapi.data.stats[2].base_stat,
        speed:findpokeapi.data.stats[5].base_stat,
        height:findpokeapi.data.height,
        weight:findpokeapi.data.weight,
        type: findpokeapi.data.types.map(t=>{
          return {name:t.type.name}
        })
      })
    }else{
      let pokeDb = await Pokemon.findByPk(id,{
        include: Type
      })
      res.send(pokeDb)
    }
  } catch (error) {
    next(error)
  }
})


module.exports = router;