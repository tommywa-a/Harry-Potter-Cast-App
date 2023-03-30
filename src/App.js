import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import './App.css'

const App = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsloading] = useState([])

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://hp-api.onrender.com/api/characters`)

			console.log(result.data)
			setItems(result.data)
			setIsloading(false)
		}
		fetchItems()
	}, [])

	return (
		<div className='container'>
			<Header />
		</div>
	)
}

export default App
