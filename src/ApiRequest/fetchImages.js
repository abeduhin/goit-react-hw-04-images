import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api`;
const API_KEY = '31796382-452a69c0ad3be9a5c3a287f3e';

export const fetchImg = async (query, page) => {
    const response = await axios.get
        (`/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&safesearch=true`);
  
    return response.data;
    // return response.data.hits.map(image => {
    //     return {
    //         id: image.id,
    //         webformatURL: image.webformatURL,
    //         largeImageURL: image.largeImageURL,
    //         tags: image.tags
    //     };
    // });
};

// Робимо get HTTP- запит з 2 праметрами (те.що ввів юзер, номер сторінки)