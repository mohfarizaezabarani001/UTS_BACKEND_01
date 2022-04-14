let topup = [
    {
      harga: "25.000",
      item: "Diamond 100",
      sisa: "375 items",
      diskon : "20%",
      create: new Date(),
    },
    {
      harga: "60.000",
      item: "Diamond 400",
      sisa: "175",
      diskon : "20%",
      create: new Date(),
    },
    {
      harga: "100.000",
      item: "Diamond 800",
      sisa: "99",
      diskon : "20%",
      create: new Date(),
    },
  ];
  
  cariconst  = (arrData, harga) => {
    ketemu = -1;
    indeks = 0;
    while (ketemu == -1 && indeks < arrData.length) {
      if (arrData[indeks].harga == harga) {
        ketemu = indeks;
        return indeks;
      }
      indeks++;
    }
    return -1;
  };
  
  module.exports = {
    getTopup: topup,
  
    insert: (req) => {
      const newItem = {
        harga: req.body.harga,
        item: req.body.item,
        sisa: req.body.sisa,
        diskon: req.body.diskon,
      };
      topup.push(newItem);
      return newItem;
    },
    getTopupharga: (req) => {
      harga = req.params.harga;
      indeks = cari(topup, harga);
      if (indeks != -1) {
        const datatopup = {
          harga: topup[indeks].nim,
          item: topup[indeks].item,
          sisa: topup[indeks].sisa,
          diskon: topup[indeks].diskon,
        };
        return datatopup;
      }
      return indeks;
    },
  
    update: (req) => {
      harga = req.params.harga;
      indeks = cari(topup, harga);
      if (indeks != -1) {
        topup[indeks].harga = harga;
        topup[indeks].item = req.body.item;
        topup[indeks].sisa = req.body.sisa;
        topup[indeks].diskon = req.body.diskon;
        
  
        return topup[indeks];
      }
      return -1;
    },
  
    delete: (req) => {
      harga = req.params.harga;
      indeks = cari(topup, harga);
      ket = "Item Kosong";
      if (indeks != -1) {
        topup.splice(indeks, 1);
        ket = "Item" + harga + "Di Hapus";
      }
      return ket;
    },
  };