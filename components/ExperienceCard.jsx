import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
} from "reactstrap";
import innercomponent from "./innercomponent";
import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="6">
			{data.link? <a href={data.link} > <innercomponent/>  </a> :<innercomponent/>}  
			
		</Col>
	);
};

export default ExperienceCard;
