import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api`;
const API_KEY = '31796382-452a69c0ad3be9a5c3a287f3e';

export const fetchImg = async (input, pageNr, perPage) => {
    const response = await axios.get
        (`/?key=${API_KEY}&q=${input}&page=${pageNr}&image_type=photo&orientation=horizontal&per_page=${perPage}&safesearch=true`);
  
    return response.data;
};

// Робимо get HTTP- запит з 3 праметрами (те.що ввів юзер, номер сторінки, кількість елементів на сторінці)