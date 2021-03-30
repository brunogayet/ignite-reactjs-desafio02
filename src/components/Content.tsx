import { MovieList } from "./MovieList";
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface ContentProps {
  genres: GenreResponseProps[],
  selectedGenreId: number;
}

export function Content({ genres, selectedGenreId } : ContentProps) {
  
  return (
    <div className="container">
      <MovieList 
        genres={genres}
        selectedGenreId={selectedGenreId}
      />     
    </div>
  )
}