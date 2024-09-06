export type similarMovies = {
  original_title: string
  original_language: string
  id: number
  overview: string
}
export type similarMoviesDto = {
  page: number
  results: similarMovies[]
  total_pages: number
  total_results: number
}
export type Genre = {
  id: string
  name: string
}
