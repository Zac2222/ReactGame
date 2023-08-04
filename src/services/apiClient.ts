import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '896e6d00c62c4cf4b2c04c363fc3f235'
    }
})