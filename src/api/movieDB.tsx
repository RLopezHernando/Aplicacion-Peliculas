import axios from "axios";

const movieDB = axios.create({
    baseURL: 'http://api.themoviedb.org/3/movie',
    params: {
        api_key: 'b086b555066556ae405d4d7947a9df9f',
        language: 'es-ES'
    }
})

export default movieDB;