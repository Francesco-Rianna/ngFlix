export type Movie = {
  id: number
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  first_air_date: string
  title: string
  vote_average: number
  vote_count: number
}
export type MoviesDto = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
