const modelTopup = require("../models/topup");

module.exports = {
  getTopup: (req, res) => {
    topup = modelTopup.getTopup;
    res.json(topup);
  },

  insert: (req, res) => {
    newItem = modelTopup.insert(req);
    res.status(201).json(newItem);
  },

  getTopupbyharga: (req, res) => {
    dataTopup = modelTopup.getTopupbyharga(req);
    if (dataTopup != -1) {
      res.json(dataTopup);
    } else {
      res.send("Item Yang di Cari " + req.params.harga + "tidak ada");
    }
  },

  update: (req, res) => {
    topup = modelTopup.update(req);
    if (topup != -1) {
      res.json(topup);
    }
    res.send("Item tidak ditemukan");
  },
  
  delete: (req, res) => {
    ket = modelTopup.delete(req);
    res.send(ket);
  },
};