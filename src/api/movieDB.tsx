import axios from "axios";

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key : '06936b5b3c7b5b74bf3aa774d5eeb5e0',
        language:'es-ES'
    }
});

export default movieDB;