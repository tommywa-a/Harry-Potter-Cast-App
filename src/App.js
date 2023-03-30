import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsloading] = useState([])

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://hp-api.onrender.com/api/characters`)

			setItems(result.data)
			setIsloading(false)
		}
		fetchItems()
	}, [])

	return (
		<div className='container'>
			<Header />
      <Search />
      <CharacterGrid isLoading={isLoading} items={items}/>
		</div>
	)
}

export default App
