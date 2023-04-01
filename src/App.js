import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsloading] = useState(true)
	const [query, setQuery] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage, setPostsPerPage] = useState(10)

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://hp-api.onrender.com/api/characters?name=${query}`)

			setItems(result.data)
			setIsloading(false)
		}
		fetchItems()
	}, [query])

	return (
		<div className='container'>
			<Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items}/>
		</div>
	)
}

export default App
