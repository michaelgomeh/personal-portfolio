const ProjectCard = ({ title, description, stack, url }) => {
	return (
		<div className="card flex col center">
			<div className="project-title">{title}</div>
			<div className="project-description">{description}</div>
			<div className="project-stack">{stack}</div>
		</div>
	);
};

export default ProjectCard;
