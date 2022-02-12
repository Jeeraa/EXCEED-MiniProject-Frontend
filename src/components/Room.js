import '../components/Room.css'

function Room() {
	return (
		<div className="block">
			<div className="roomnum">
				<p>Room Number</p>
			</div>
			<div className="status">
				<p className='busy'>Busy</p>
				<p className='empty'>Empty</p>
			</div>
			<div className="tbegin">
				<p>Time Begin</p>
			</div>
			<div className="tusage">
				<p>Time Usage</p>
			</div>
			<div className="iscoming">
				<p>Waiting</p>
			</div>
		</div>
	)
}

export default Room
