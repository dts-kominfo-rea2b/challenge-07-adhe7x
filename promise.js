const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async(emosi) => {
  try {
    
    let rasa = null;

    const bioskopIXX = await promiseTheaterIXX();
    const bioskopVGC = await promiseTheaterVGC();

    bioskopIXX.forEach(arr => {
      if(arr.hasil == emosi) {
        rasa += 1;
      };
    });

    bioskopVGC.forEach(arr => {
      if(arr.hasil == emosi) {
        rasa += 1;
      };
    });

    return rasa;

  } catch (err) {
    console.log(`Terjadi Kesalahan! ${err}`);
  };
};

module.exports = {
  promiseOutput,
};
