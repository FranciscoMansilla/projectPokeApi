const { conn } = require('../../src/db');
const { Pokemon } = require('../../src/models/Pokemon');

describe('Models', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
    console.log('Franco');
  });

  describe('Pokemon model', () => {
    it('No se puede crear el pokemon si no se envia el nombre', async () => {
      expect.assertions(1);
      try {
        await Pokemon.create({hp: 25, speed: 40});
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });
  
    it('should create the Character if all required properties are ok', async () => {
      try {
        const character = await Pokemon.create({
          name: 'henry',
          img,
          hp: 40,
          attack,
          defense: 60,
          speed: 50,
          height,
          weight
        })
        expect(character.toJSON().name).toEqual('henry');
        expect(character.toJSON().img).toEqual(null);
        expect(character.toJSON().hp).toEqual(40);
        expect(character.toJSON().attack).toEqual(null);
        expect(character.toJSON().defense).toEqual(60);
        expect(character.toJSON().speed).toEqual(50);
        expect(character.toJSON().height).toEqual(null);
        expect(character.toJSON().weight).toEqual(null);
      } catch (error) {
        //console.log(error)
      }
    });
  })

  afterAll(async () => {
    await conn.sync({ force: true });
    conn.close();
  })
});