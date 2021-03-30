interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface TitleGenreProps {
    genres: GenreResponseProps[],
    selectedGenreId: number;
}

export function TitleGenre({ genres, selectedGenreId } : TitleGenreProps) {

    const selectedGenre = genres.filter(genre => genre.id === selectedGenreId)[0];
    
    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenre?.title}</span></span>
        </header>
    )
}