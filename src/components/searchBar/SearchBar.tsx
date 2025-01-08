import { Link } from 'react-router-dom';
import { API_KEY } from '../../utils/fetches/getAllGenres';
import './SearchBar.css'

import React, { useState, useEffect } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            fetchMovies(query);
        }
    }, [query]);

    const fetchMovies = async (searchQuery: string) => {
        //const API_KEY = 'VITE_API_KEY';
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
        const data = await response.json();
        setMovies(data.results);
    };
    
    const removeSearch = () => {
        setQuery('');
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <>
            <div className="search-box">
                <input type="text" placeholder="Search Movies by Title" onChange={handleSearch} />
            </div>
            <div className="movie-results">
                {movies.map((movie: any) => (
                    <div key={movie.id}>
                        <Link onClick={removeSearch} to={`/detail/${movie.id}`}>
                            <h2>{movie.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SearchBar;
