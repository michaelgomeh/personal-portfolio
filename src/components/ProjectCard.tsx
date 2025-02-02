export interface IProjectCardProps {
	title: string;
	description: string;
	stack: string[];
	url: string;
}
const ProjectCard: React.FC<IProjectCardProps> = ({
	title,
	description,
	stack,
	url,
}) => {
	return (
		<a className="card flex col center" href={url}>
			<div className="project-title">{title}</div>
			<div className="project-description">{description}</div>
			<div className="project-stack">{stack}</div>
		</a>
	);
};

export default ProjectCard;
