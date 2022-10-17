import React, { useState } from "react";
import { connect } from "react-redux";
import { setWait } from "../../redux/events/eventActions";
import Paper from "@material-ui/core/Paper";

const Wait = ({ events, comp_id, set_wait }) => {
	const [wait, setStateWait] = useState(0);

	// Set Wait value for current component
	function handleChange(e) {
		let val = parseInt(e.target.value);
		setStateWait(val);
		let curr = events.wait;
		curr[comp_id] = val;
		set_wait(curr);
	}
	return (
		// Wait Component
		<Paper elevation={3}>
			<div className=" text-center rounded bg-red-100 border border-red-400 py-2 my-2 text-xs cursor-pointer">
				<div className="grid grid-cols-2">
					<div className="text-xs">Wait</div>
					<input
						className="mx-2 p-1 py-0 text-center"
						type="number"
						value={wait}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div
					id={comp_id}
					className="flex bg-red-400 my-2 mx-6 p-2 rounded text-xs cursor-pointer text-center"
				>
					Wait {wait} seconds
				</div>
			</div>
		</Paper>
	);
};

// map state to component
const mapStateToProps = (state) => {
	return {
		events: state.event,
	};
};

// map function to component
const mapDispatchToProps = (dispatch) => {
	return {
		set_wait: (value) => dispatch(setWait(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wait);
