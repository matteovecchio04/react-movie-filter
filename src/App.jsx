import { useState, useEffect } from 'react'
import './App.css'

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

export default function App() {
  const [selectGenre, setselectGenre] = useState("")

  return (
    <>
      <div className='text-center'>
        <h1>Filtraggio Genere Film 🍿</h1>

        <strong className='mx-2'>Seleziona il genere:</strong>
        <select value={selectGenre} onChange={(e) => setselectGenre(e.target.value)}>
          <option value="">Tutti i generi</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <ul className='list-unstyled'>
          {
            movies.map((film) => (
              <li key={film.title}>
                {film.title} - {film.genre}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}