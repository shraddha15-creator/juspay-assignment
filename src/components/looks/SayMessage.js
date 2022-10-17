import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const SayMessage = ({ character, comp_id }) => {
	const [state, setState] = useState({
		show_msg: false,
		message: "",
		character_id: "",
	});
	/* Display Message */
	const displayMessage = () => {
		const el = document.getElementById(`${character.active}-message-box`);
		const el2 = document.getElementById(`${character.active}-message-box1`);

		if (state.show_msg && state.character_id === character.active) {
			setState({ ...state, show_msg: false });
			el.style.display = "none";
			return;
		}
		setState({ ...state, show_msg: true });
		el.style.display = "block";
		el.style.position = "relative";

		el2.style.display = "none";

		window.clearTimeout();
		el.innerHTML = state.message;
	};

	return (
		<Paper elevation={3}>
			<div className="text-center rounded bg-purple-100 border border-purple-400 py-2 my-2 text-xs cursor-pointer">
				<div className="grid grid-cols-2">
					<div className="text-xs">Message:</div>
					<input
						className="mx-2 p-1 py-0 text-center"
						type="text"
						value={state.message}
						onChange={(e) => {
							e.target.value.length > 0 &&
								setState({ ...state, message: e.target.value });
						}}
					/>
				</div>
				<div
					id={comp_id}
					className="flex bg-purple-400 my-2 mx-6 p-2 rounded text-xs cursor-pointer text-center"
					onClick={() => displayMessage()}
				>
					{`Say ${state.message}`}
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

export default connect(mapStateToProps)(SayMessage);
