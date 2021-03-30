import { useState, useEffect } from 'react';

import { TitleGenre } from "./TitleGenre";
import { MovieCard } from './MovieCard';

import { api } from '../services/api';

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface MovieListProps {
    genres: GenreResponseProps[],
    selectedGenreId: number;
}

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

export function MovieList({ genres, selectedGenreId } : MovieListProps) {
    
    const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(() => {
        api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
            setMovies(response.data);
        });
    }, [selectedGenreId]);

    return (
        <>
            <TitleGenre genres={genres} selectedGenreId={selectedGenreId} />

            <main>
                <div className="movies-list">
                    {movies.map(movie => (
                        <MovieCard 
                            key ={movie.imdbID} 
                            title={movie.Title} 
                            poster={movie.Poster} 
                            runtime={movie.Runtime} 
                            rating={movie.Ratings[0].Value} 
                        />
                    ))}
                </div>
            </main>
        </>
    )
}