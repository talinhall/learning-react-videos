//https://developers.google.com/youtube/v3/docs/search/list
//get key from console.developers.google.com

import axios from 'axios';


// const KEY = 'AIzaSyBH1IdbkfEnWUTz8yfr5lZZ-mz35TcR1_A';
const KEY = 'AIzaSyAKdKAzbCXwN0ZDTn-0WDouB_IyBKjplmU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});