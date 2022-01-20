import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '24271792-2ae9c4be49492e469cc4e2f34';
// const REQUEST_PARAMS =
//   'image_type=photo&orientation=horizontal&safesearch=true';

const fetchPictures = searchQuery =>
  axios
    .get(`https://pixabay.com/api/?key=${KEY}&q=${searchQuery}`)
    .then(response => {
      console.log(response);
      return response;
    });

export default fetchPictures;