import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/", // 기본 주소
  params: {
    api_key: "063c7b0b0ab59e4bdb073ee8b3322ecc",
    language: "en-US",
  }, // 데이터를 불러오기 위해 조건에 맞춰 설정
});

// axios.create의 url에 주소 덧붙임
// https://developers.themoviedb.org/3에 맞춰서 작성
export const tvApi = {
  topRated: () => api.get("tv/top_rated"), // '/'시작하면 절대경로여서 반드시 상대경로로 적어야 함
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }), // Detail 작업시 따로 조건 붙여 데이터 호출
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term), // space나 &등 같은 특정 문자들은 URI가 읽을수 있게 변환
      },
    }),
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term), // space나 &등 같은 특정 문자들은 URI가 읽을수 있게 변환
      },
    }),
};
