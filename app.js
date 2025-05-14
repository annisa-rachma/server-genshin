// if(process.env.NODE_ENV !== "production") {
//   require('dotenv').config();
// }
const express = require('express')
const app = express()
// const port = process.env.PORT || 3000;
const port = 3000;

const { EnkaClient, TextAssets, DynamicTextAssets, ImageAssets,} = require("enka-network-api");
const enka = new EnkaClient();

const cors = require ('cors');
const { createSlug } = require('./helper/slug');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/characters', async(req, res) => {
  try {
    let characters = await enka.getAllCharacters().map((character, index) => {
      return  {
        id : createSlug(character.name.get("en")),
        name : character.name.get("en"),
        rarity : character.stars,
        charImage : character.icon.url,
        vision : new TextAssets(character.details.vision.id, enka).toString(),
      }
    })
    
    res.status(200).json(characters)
  } catch (error) {
    console.log(error)
    res.status(500).json({message : 'Internal Server Error'})
  }
})


app.get('/characters/:id', async(req, res) => {
  try {
    let characters = await enka.getAllCharacters().map((character, index) => {
      return character = {
        id : index+1,
        name : character.name.get(),
        rarity : character.stars,
        splashImage : character.splashImage.url,
        charImage : character.icon.url,
        birthday : character.details.birthday,
        location : new TextAssets(character.details.location.id, enka).toString(),
        vision : new TextAssets(character.details.vision.id, enka).toString(),
        constellation : new TextAssets(character.details.constellation.id, enka).toString(),
        constellationIcon : new ImageAssets(character.details.constellationIcon.name, enka).url,
        title : new TextAssets(character.details.title.id, enka).toString(),
        charDescription : new TextAssets(character.details.description.id, enka).toString(),
        normalAttack : {
          name : new TextAssets(character.normalAttack.name.id, enka).toString(),
          description : new DynamicTextAssets(character.normalAttack.description.id, character.normalAttack.description , enka).getReplacedData().text.replace(/<[^>]+>/g, ""),
          icon : new ImageAssets(character.normalAttack.icon.name, enka).url
        },
        elementalSkill : {
          name : new TextAssets(character.elementalSkill.name.id, enka).toString(),
          description : new DynamicTextAssets(character.elementalSkill.description.id, character.elementalSkill.description , enka).getReplacedData().text.replace(/<[^>]+>/g, ""),
          icon : new ImageAssets(character.elementalSkill.icon.name, enka).url,
          cooldown : character.elementalSkill.cooldown,
          maxCharge : character.elementalSkill.maxCharge
        },
        elementalBurst : {
          name : new TextAssets(character.elementalBurst.name.id, enka).toString(),
          description : new DynamicTextAssets(character.elementalBurst.description.id, character.elementalBurst.description , enka).getReplacedData().text.replace(/<[^>]+>/g, ""),
          icon : new ImageAssets(character.elementalBurst.icon.name, enka).url,
          cooldown : character.elementalBurst.cooldown,
          maxCharge : character.elementalBurst.maxCharge
        }
      }
    })

    let characterById
    characters.forEach((char) => {
      if(char.id == req.params.id) {
        characterById = char
      }
    })

    res.status(200).json(characterById)
  } catch (error) {
    console.log(error)
    res.status(500).json({message : 'Internal Server Error'})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})