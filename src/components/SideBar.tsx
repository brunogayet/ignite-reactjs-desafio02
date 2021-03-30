import { Header } from '../components/Header';
import { MenuItem } from '../components/MenuItem';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface sideBarProps {
  genres: GenreResponseProps[],
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, setSelectedGenreId } : sideBarProps) {

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <Header />
      
      <div className="buttons-container">
        {genres.map(genre => {
          return <MenuItem 
                    key={genre.id} 
                    genre={genre} 
                    itemSelected={selectedGenreId === genre.id}
                    onClick={() => handleClickButton(genre.id)}
                  />
        })}
      </div>
    </nav>
  )
}