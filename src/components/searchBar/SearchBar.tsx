import { Link } from 'react-router-dom';
import './SearchBar.css'

import React, { useState, useEffect } from 'react';
import { ITrendingMovie } from '../../../interfaces/ITrendingMovies';
import fetchMovies from '../../utils/fetches/fetchMovies';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<ITrendingMovie[]>([]);

    useEffect(() => {
        if (query) {
            fetchMovies(query, setMovies);
        }
    }, [query]);
    
    const removeSearch = () => {
        setQuery('');
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <>
            <div className="search-box">
                <input value={query} type="text" placeholder="Search Movies by Title" onChange={handleSearch} />
            </div>
            {query.length > 0 && <div className="movie-results">
                {movies.map((movie: ITrendingMovie) => (
                    <div key={movie.id}>
                        <Link onClick={removeSearch} to={`/detail/${movie.id}`}>
                            <h2>{movie.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>}
        </>
    );
}

export default SearchBar;
