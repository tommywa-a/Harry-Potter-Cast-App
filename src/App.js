import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Pagination from './components/ui/Pagination'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsloading] = useState(true)
	const [query, setQuery] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(8)

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				`https://hp-api.onrender.com/api/characters`, 
			)

			// console.log(result.data)

			setItems(result.data)
			setIsloading(false)
		}
		fetchItems()
	}, [])

	const queryFunction = (q) => {
		if (q.length > 0) {
			console.log(q)
			setQuery(q)
			const character = items.filter((item) => {
				return item.name.toLowerCase().includes(q.toLowerCase()) })
			setItems(character)
			return
		}
		setItems(items)
	}

	// Get current items
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<div className='container'>
			<Header />
			<Search getQuery={queryFunction} />
			<CharacterGrid
				isLoading={isLoading}
				items={currentItems}
			/>
			<Pagination
				itemsPerPage={itemsPerPage}
				totalItems={items.length}
				paginate={paginate}
			/>
		</div>
	)
}

export default App
