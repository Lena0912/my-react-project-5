import axios from "axios";

export const API_BASE_URL = "https://api.themoviedb.org/3";
export const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGM3YjAyN2Y1Y2RlYmQ5NzdkNGEyY2IzZWNkZGMzZCIsIm5iZiI6MTY5OTc0NzkxOS41MDgsInN1YiI6IjY1NTAxODRmNDFhNTYxMzM2ODg3YzZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fa4uMnaKfG5VkzsuTg0YbHU6-SdXGWG9BADoJX--89M";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchTrendigMovies = async () => {
    const response = await apiClient.get('/trending/movie/day');
    return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await apiClient.get(`/search/movie`, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
};
export const fetchMovieDetails = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};

