const { Router } = require('express');
const {Pokemon} = require('../db');
const axios = require('axios')

const router = Router();

router.get('/', async (req,res,next)=>{
  let {name} = req.query
  
  let pokeDb = await Pokemon.findAll()
  let findpoke = pokeDb.find(p=> name===p.name )
  if(!findpoke){
    let findpokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    res.send({
      id: findpokeapi.data.id,
      name: findpokeapi.data.forms[0].name,
      hp: findpokeapi.data.stats[0].base_stat,
      attack: findpokeapi.data.stats[1].base_stat,
      defense:findpokeapi.data.stats[2].base_stat,
      speed:findpokeapi.data.stats[5].base_stat,
      height:findpokeapi.data.height,
      weight:findpokeapi.data.weight
    })

  }else{
    res.send(findpoke)
  }
      //res.status(404).json({msg:'No se encontro pokemon con id: '+})
})


router.get('/',async (req,res,next)=>{
  try {
    let urlPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon')
    let urlPokemon1 = await axios.get(urlPokemon.data.next)
    let pokemonsDatabase = await Pokemon.findAll()

    const pokemon =urlPokemon.data.results.map((p)=> axios.get(p.url))
    const pokemon1 =urlPokemon1.data.results.map((p)=> axios.get(p.url))
    
    await Promise.all([...pokemon, ...pokemon1])
    .then(respuesta=>{
          let filteredPoke = respuesta.map(resultado=>{
            return {
              id: resultado.data.id,
              name: resultado.data.forms[0].name,
              hp: resultado.data.stats[0].base_stat,
              attack: resultado.data.stats[1].base_stat,
              defense:resultado.data.stats[2].base_stat,
              speed:resultado.data.stats[5].base_stat,
              height:resultado.data.height,
              weight:resultado.data.weight
            }
          })
          //let allpokemons= [...filteredPoke, ...pokemonsPromiseDb]
          res.send([...filteredPoke,...pokemonsDatabase])
        })
  } catch (error) {
    next(error)
  }
})




router.post('/',async(req,res,next)=>{
  let {name,hp,attack,defense,speed,height,weight}=req.body
  if(!name) return res.status(400).json({msg: 'falta el parametro "name"'})
  try {
    let pokemon = await Pokemon.create({
      name,hp,attack,defense,speed,height,weight
    })
    res.status(201).json(pokemon)
  } catch (error) {
    next(error)
  }
})
router.get('/:id', async (req,res,next)=>{
  let {id} = req.params
  if(id>=1 && id<=40){
    let findpokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //console.log(findpokeapi.data.name)
    res.send({
      id: findpokeapi.data.id,
      name: findpokeapi.data.forms[0].name,
      hp: findpokeapi.data.stats[0].base_stat,
      attack: findpokeapi.data.stats[1].base_stat,
      defense:findpokeapi.data.stats[2].base_stat,
      speed:findpokeapi.data.stats[5].base_stat,
      height:findpokeapi.data.height,
      weight:findpokeapi.data.weight
    })
  }else{
    let pokeDb = await Pokemon.findAll()
    //console.log(pokeDb)
    let findpoke = pokeDb.find(p=> id===p.id )
    if(findpoke){
      res.send(findpoke)
    }else{
      res.status(404).json({msg:'No se encontro pokemon con id: '+id})
    }
  }
})


module.exports = router;