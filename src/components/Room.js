import '../components/Room.css'

function Room({ toilet }) {
	return (
		<div className="block">
			<div className="roomnum">
				<p>Room Number</p>
				<p>{toilet.roomNumber}</p>
			</div>
			<div className="status">
				<p>{toilet.status}</p>
			</div>
			<div className="time">
				<p>Time Begin</p>
				<p>{toilet.timeStart}</p>
			</div>
			<div>
				<p>Time Usage</p>
				<p>{toilet.timeUsage} นาที</p>
			</div>
			<div className="iscoming">
				<p>Waiting</p>
				<p>{toilet.timeWaiting} นาที</p>
			</div>
		</div>
	)
}

export default Room
