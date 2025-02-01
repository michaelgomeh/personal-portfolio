import { useState } from 'react';
import {
	IconBrandCss3,
	IconBrandGithub,
	IconBrandLinkedin,
	IconFileCv,
	IconWorldWww,
} from '@tabler/icons-react';
import ProjectCard from './components/ProjectCard';
const App = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	return (
		<div className="home">
			<header>
				My portfolio
				<button
					className="drawerToggle"
					data-visible={drawerOpen}
					onClick={() => setDrawerOpen(!drawerOpen)}
				></button>
				<nav data-visible={drawerOpen}>
					<a href="#">Home</a>
					<a href="#">Projects</a>
					<a href="#">Contant</a>
				</nav>
			</header>
			<div className="social">
				<div className="social-label">
					<a href="" target="_blank">
						<div>
							<IconBrandGithub strokeWidth={1} />
						</div>
						<p>Github</p>
					</a>
				</div>
				<div className="social-label">
					<a href="" target="_blank">
						<div>
							<IconBrandLinkedin strokeWidth={1} />
						</div>
						<p>Linkedin</p>
					</a>
				</div>
				<div className="social-label">
					<a href="www.michaelgomeh.com" target="_blank">
						<div>
							<IconWorldWww strokeWidth={1} />
						</div>{' '}
						<p>Website</p>
					</a>
				</div>
				<div className="social-label">
					<a href="https://uiverse.io/profile/michaelgomeh" target="_blank">
						<div>
							<IconBrandCss3 strokeWidth={1} />
						</div>
						<p>Uiverse.io</p>
					</a>
				</div>
				<div className="social-label">
					<a href="src\assets\files\Michael Gomeh CV.pdf" target="_blank">
						<div>
							<IconFileCv strokeWidth={1} />
						</div>
						<p>CV(PDF)</p>
					</a>
				</div>
			</div>
			<main>
				<div className="hero">
					<div className="hero-text">
						<h1 className="hero-title">Hi,</h1>
						<h2 className="hero-subtitle">I'm Mike</h2>
						<h3 className="hero-description">
							I build frontend from design to production
						</h3>
					</div>
					<div className="hero-picture">
						<img src="src\assets\images\programmer.png" alt="" />
					</div>
					<div className="mouse-icon-wrapper">
						<div className="mouse-icon">
							<div className="mouse-icon-inside"></div>
						</div>
					</div>
				</div>
				<div className="projects-container">
					<ProjectCard
						title={'Project1'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet similique consectetur'
						}
						stack={'React, ts'}
						url={'undefined'}
					/>
					<ProjectCard
						title={'Project1'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet similique consectetur'
						}
						stack={'React, ts'}
						url={'undefined'}
					/>
					<ProjectCard
						title={'Project1'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet similique consectetur'
						}
						stack={'React, ts'}
						url={'undefined'}
					/>
				</div>
				<div className="content">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,
					a velit commodi officia vero officiis ad, id itaque earum quis libero?
					Voluptatum, adipisci quod quaerat ab dolorum nulla tempore laborum
					odit quo illo eveniet libero ipsam amet perspiciatis, laudantium saepe
					velit ipsa suscipit odio? Recusandae placeat magnam dolore libero
					ratione.
				</div>
			</main>
			{/* <footer>hi</footer> */}
		</div>
	);
};

export default App;
