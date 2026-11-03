import { API_KEY } from "./API_KEY.js";

const api = {
    async getMovies() {
        try {
            const API_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
            const response = await fetch(API_URL, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            });
            return response.json();
        } catch (error) {
            alert("Error");
            throw error;
        }
    }
}

export default api;