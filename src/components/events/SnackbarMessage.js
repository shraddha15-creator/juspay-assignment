import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useSnackbar } from "notistack";

const SnackbarMessage = ({ comp_id }) => {
	const { enqueueSnackbar } = useSnackbar();
	const [state, setState] = useState({
		message: " ",
	});

	/* Display Snackbar */
	const handleClick = () => {
		enqueueSnackbar(state.message ? state.message : "No Message", {
			variant: "success",
		});
	};

	return (
		<Paper elevation={3}>
			<div className="text-center rounded bg-yellow-100 border border-yellow-400 py-2 my-2 text-xs cursor-pointer">
				<div className="grid grid-cols-2 my-2">
					<div className="text-black text-xs font-medium">Message</div>
					<input
						className="mx-2 p-1 py-0 text-center"
						type="text"
						value={state.message}
						onChange={(e) => {
							e.target.value.length > 0 &&
								setState({ message: e.target.value });
						}}
					/>
				</div>
				<div
					id={comp_id}
					className="flex bg-yellow-400 my-2 mx-6 p-2 rounded text-xs cursor-pointer text-center"
					onClick={() => handleClick()}
				>
					{`Your Message: "${state.message}"`}
				</div>
				<p>(Look at the top right corner.)</p>
			</div>
		</Paper>
	);
};

export default SnackbarMessage;
