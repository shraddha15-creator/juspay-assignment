import React from "react";
import Move from "./motion/Move";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import TurnClockwise from "./motion/TurnClockwise";
import SayMessage from "./looks/SayMessage";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import Wait from "./control/Wait";
import MoveY from "./motion/MoveY";
import SnackbarMessage from "./events/SnackbarMessage";

// fetch components based on different keys
export const getComponent = (key, id) => {
	switch (key) {
		case "MOVE_Y":
			return <MoveY comp_id={id} />;
		case "MOVE":
			return <Move comp_id={id} />;

		case "TURN_CLOCKWISE":
			return <TurnClockwise comp_id={id} />;

		case "TURN_ANTI_CLOCKWISE":
			return <TurnAntiClockwise comp_id={id} />;

		case "SAY_MESSAGE":
			return <SayMessage comp_id={id} />;

		case "SAY_MESSAGE_WITH_TIMER":
			return <SayMessageWithTimer comp_id={id} />;

		case "BROADCAST":
			return <SnackbarMessage comp_id={id} />;

		case "WAIT":
			return <Wait comp_id={id} />;

		default:
			return React.null;
	}
};
