import axios from 'axios';

const randomImageURL = "https://dog.ceo/api/breeds/image/random";

export default {
    searchRandom: function() {
        return axios.get(randomImageURL);
    }
};