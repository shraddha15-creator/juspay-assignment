import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const SayMessageWithTimer = ({ character, comp_id }) => {
	const [state, setState] = useState({
		show_msg: false,
		timer_message: "",
		timer_for_msg: 0,
	});

	/* Display Message with Timer */
	const displayMessage = () => {
		const el = document.getElementById(`${character.active}-message-box`);
		const el2 = document.getElementById(`${character.active}-message-box1`);
		el2.style.display = "none";
		if (state.show_msg) {
			setState({ ...state, show_msg: false });
			el.style.display = "none";
			return;
		}
		setState({ ...state, show_msg: true });

		el.style.display = "block";
		el.style.position = "relative";

		el.innerHTML = state.timer_message;
		window.setTimeout(() => {
			setState({ ...state, show_msg: false });
			el.style.display = "none";
		}, state.timer_for_msg * 1000);
	};

	return (
		<Paper elevation={3}>
			<div className="text-center rounded bg-purple-100 border border-purple-400 py-2 my-2 text-xs cursor-pointer">
				<div className="grid grid-cols-2 my-2">
					<div className="text-xs">Message</div>
					<input
						className="mx-2 p-1 py-0 text-center"
						type="text"
						value={state.timer_message}
						onChange={(e) => {
							e.target.value.length > 0 &&
								setState({ ...state, timer_message: e.target.value });
						}}
					/>
				</div>
				<div className="grid grid-cols-2">
					<div className="text-xs">Timer:</div>
					<input
						className="mx-2 p-1 py-0 text-center"
						type="number"
						value={state.timer_for_msg}
						onChange={(e) => {
							parseInt(e.target.value) > 0 &&
								setState({ ...state, timer_for_msg: parseInt(e.target.value) });
						}}
					/>
				</div>
				<div
					id={comp_id}
					className="flex bg-purple-400 my-2 mx-6 p-2 rounded text-xs cursor-pointer text-center"
					onClick={() => displayMessage()}
				>
					{`Say ${state.timer_message} for ${state.timer_for_msg} seconds`}
				</div>
			</div>
		</Paper>
	);
};

// mapping state to component
const mapStateToProps = (state) => {
	return {
		character: state.character,
	};
};

export default connect(mapStateToProps)(SayMessageWithTimer);
