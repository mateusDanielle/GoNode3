const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    // listagem
    const ads = await Ad.find()

    return res.json(ads)
  }
  async show (req, res) {
    // mostra somente um
    const ad = await Ad.findById(req.params.id)

    return res.json(ad)
  }
  async store (req, res) {
    // grava
    const ad = await Ad.create({ ...req.body, author: req.userId })

    return res.json(ad)
  }
  async update (req, res) {
    // atualiza
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(ad)
  }
  async destroy (req, res) {
    // deleta
    await Ad.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new AdController()
