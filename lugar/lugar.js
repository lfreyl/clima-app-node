const axios = require('axios');

//Sin Async Await
// const getLugarLatLng = (direccion) => {
//     const encodedUrl = encodeURI(direccion);
//     const instance = axios.create({
//         baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
//         timeout: 5000,
//         headers: { 'X-RapidAPI-Key': '8843d0562bmsh3a9f9239023e21dp153461jsn7893828a9814' }
//     });

//     instance.get()
//         .then(resp => {
//             console.log(resp.data.Results[0]);
//         })
//         .catch(err => {
//             console.log('ERROR!!!!!!!', err);
//         });
//     return {
//         direccion,
//         lat,
//         lng
//     }    
// }
// Con Asyn y Await
const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 5000,
        headers: { 'X-RapidAPI-Key': '8843d0562bmsh3a9f9239023e21dp153461jsn7893828a9814' }
    });

    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}