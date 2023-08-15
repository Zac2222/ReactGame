import useData from "../hooks/useData"
import useGenres, { Genre } from "../hooks/useGeneres"


const GenreList = () => {

    const {genres} = useData<Genre>('/genres')

  return (
    <ul>
      {genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
