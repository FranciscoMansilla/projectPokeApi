const supertest = require('supertest-as-promised')(require('../../src/app'))
const expect = require('chai').expect
//const model = require('../models/model')

describe('/types', function(){
  it('GET responde con un array con 20 tipos de pokemones', function () {
    return supertest // supertest nos permite hacer y testear requests HTTP
      .get('/types') // hacemos un request HTTP: GET a '/users'
      .expect(200) // el codigo de status del response
      .expect('Content-Type', /json/) // podemos testear los headers
      .expect(function (res) {
        expect(res.body.length).to.eql(20) // testeamos la respuesta con el body
      })
  })
})

describe('/pokemons', function () {
      // beforeEach(function () {
      //     model.reset()
      //   })
    it('GET inicialmente responde con un array con 40 pokemones', function () {
      return supertest // supertest nos permite hacer y testear requests HTTP
        .get('/pokemons') // hacemos un request HTTP: GET a '/users'
        .expect(200) // el codigo de status del response
        .expect('Content-Type', /json/) // podemos testear los headers
        .expect(function (res) {
          expect(res.body.length).to.eql(40) // testeamos la respuesta con el body
        })
    })

    it('GET /pokemons/:id responde con un pokemon indicado por param id', function () {
      return supertest // supertest nos permite hacer y testear requests HTTP
        .get('/pokemons/25') // hacemos un request HTTP: GET a '/users'
        .expect(200) // el codigo de status del response
        .expect('Content-Type', /json/) // podemos testear los headers
        .expect(function (res) {
          expect(res.body.name).to.eql('pikachu')
          expect(res.body.id).to.eql(25)
          expect(res.body.hp).to.eql(35)
        })
    })
    
    it('GET /pokemons?name=pikachu responde con un pokemon indicado por query', function () {
      return supertest // supertest nos permite hacer y testear requests HTTP
        .get('/pokemons?name=pikachu') // hacemos un request HTTP: GET a '/users'
        .expect(200) // el codigo de status del response
        .expect('Content-Type', /json/) // podemos testear los headers
        .expect(function (res) {
          expect(res.body.name).to.eql('pikachu')
          expect(res.body.id).to.eql(25)
          expect(res.body.hp).to.eql(35)
        })
    })

    it('POST agrega un nuevo pokemon, responde con el pokemon creado con su relacion de tipos y su status correspondiente', function () {
      return supertest
        .post('/pokemons')
        .send({ 
          name: 'henry',
          img: 'https://cdn.theorg.com/d3119e0e-8202-4034-85ce-d0356382515e_thumb.jpg', 
          hp: 15,
          attack: 35,
          defense: 25,
          speed: 70,
          height: 35,
          weight: 74,
          type:[
            'fire',
            'bug'
          ]
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          expect(res.body.name).to.eql('henry')
          expect(res.body.hp).to.eql(15)
          expect(res.body.speed).to.eql(70)
        })
    })
  })