const {Superhero} = require('../db/models');

module.exports.createSuperHero = async (req,res) => {
    try{
        const {body} = req;
        const createdHero = await Superhero.create(body);
        if(createdHero) {
            console.log('Ok');
            return res.status(201).send({data: createdHero});
        }
        res.status(400).send('Bad request');
    } catch(e){
        console.log(e);
    }
};

module.exports.getAll = async (req, res)=>{
    const {params: {pageId}} = req
    try{
        const allHero = await Superhero.findAll({limit: 5, offset: (pageId-1)*5})
        if(allHero){
            return res.status(200).send(allHero)
        }
    }catch(e){
        console.log(e)
    }
}

module.exports.addImageById = async (req, res, next) => {
    const {
      file,
      params: { heroId },
    } = req;
    try {
      const updHero = await Superhero.findByPk(heroId);
      if (updHero) {
        updHero.images.push(file.filename);
        const [updatedRow, [updFoundHero]] = await Superhero.update(
            updHero.get(),
          { where: { id: heroId }, returning: true }
        );
        return res.status(200).send({ data: updFoundHero });
      }
      res.status(404).send('Hero not found');
    } catch (err) {
      console.log(err);
    }
  };
/*
  module.exports.addImageById = async (req, res, next) => {
    const {
      file,
      params: { heroId },
    } = req;
    try {
      const superheroUpdate = await Superhero.findByPk(heroId);
      //console.log('superheroId:', heroId);
      //console.log('superheroUpdate:', superheroUpdate);
      //console.log('model', Superhero);
      if (superheroUpdate) {
        console.log(file.filename)
        superheroUpdate.images.push(file.filename);
        console.log('superheroUpdate:', superheroUpdate);
        const [updatedRow, [updatedSuperheroes]] = await Superhero.update(
          superheroUpdate.get(),
          {
            where: { id: heroId},
            returning: true,
          }
        );
        console.log('UpdatedRow:', updatedRow);
        return res.status(200).send({ data: updatedSuperheroes });
      }
      res.status(404).send('Not found');
    } catch (err) {
      next(err);
    }
  };*/