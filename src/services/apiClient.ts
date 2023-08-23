import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ae9263a2b6464e6da79a57d28b44112e'
    }
})