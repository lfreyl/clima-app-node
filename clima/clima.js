const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=27fabaff7fa1696b8214d54638f9c330&units=metric`)

    return resp.data.main.temp;
}



module.exports = {

    getClima
}