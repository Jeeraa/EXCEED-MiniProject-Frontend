import './App.css'
import Room from './components/Room'





function App() {
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
					<Room />
					<Room />
					<Room />
				</div>
			</header>
		</div>
	)
}

export default App
