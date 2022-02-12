import './App.css'
import Room from './components/Room'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
	const [toilet1, setToilet1] = useState()
	const [toilet2, setToilet2] = useState()
	const [toilet3, setToilet3] = useState()
	useEffect(() => {
		const interval = setInterval(() => {
			axios
				.get('https://ecourse.cpe.ku.ac.th/exceed13/api/toilet/get-info')
				.then(function (response) {
					setToilet1(response.data.result[0])
					setToilet2(response.data.result[1])
					setToilet3(response.data.result[2])
				})
		}, 2000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<img
					src="https://cdn.pixabay.com/photo/2013/04/01/21/32/restroom-99226_1280.png"
					className="App-logo"
					alt="logo"
				/>
				<h1>Toilet Status</h1>
				<div className="line">
					{toilet1 && <Room toilet={toilet1} />}
					{toilet2 && <Room toilet={toilet2} />}
					{toilet3 && <Room toilet={toilet3} />}
				</div>
			</header>
		</div>
	)
}

export default App
