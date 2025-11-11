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
      <div>
        <h1>Filtraggio Genere Film 🍿</h1>


      </div>
    </>
  )
}

