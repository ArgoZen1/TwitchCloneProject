import axios from 'axios';

let api = axios.create({
    headers: {
        'Client-ID' : 'pb1g82v75ba53jso7r06dx9hqdlk1y',
        "Authorization": "Bearer bj6kpwvcswltok17sznpncc5jhhmbw"
    }
})

/*
    CLIENT_ID = 'pb1g82v75ba53jso7r06dx9hqdlk1y';
    REDIRECT = 'https://192.168.1.67:3000/';
    LIEN REMPLI = https://id.twitch.tv/oauth2/authorize?client_id=pb1g82v75ba53jso7r06dx9hqdlk1y&redirect_uri=https://192.168.1.67:3000/&response_type=token
    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT}&response_type=token
*/

export default api;