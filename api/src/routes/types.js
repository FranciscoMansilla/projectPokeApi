const { Router, response } = require('express');
const {Type} = require('../db');
const axios = require('axios')

const router = Router();

router.get('/',async(req,res,next)=>{
  try {
    let typeDatabase = await Type.findAll()
    if(typeDatabase.length===0){
      let resultTypes = await axios.get('https://pokeapi.co/api/v2/type')
      let types = resultTypes.data.results.map(r=>{
        return{
          name: r.name
        }
      })
      let typeCreated = types.map((t)=>{
        return Type.create({name:t.name})
      }) 
      await Promise.all(typeCreated).then(response=>{
        res.send(response)
      })
    } else{
      res.send(await Type.findAll())
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router;