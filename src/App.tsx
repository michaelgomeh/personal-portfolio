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
					<a href="#hero">Home</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</nav>
			</header>
			<div className="social">
				<div className="social-label">
					<a href="https://github.com/michaelgomeh/" target="_blank">
						<div>
							<IconBrandGithub strokeWidth={1} />
						</div>
						<p>Github</p>
					</a>
				</div>
				<div className="social-label">
					<a href="https://www.linkedin.com/in/michael-gomeh/" target="_blank">
						<div>
							<IconBrandLinkedin strokeWidth={1} />
						</div>
						<p>Linkedin</p>
					</a>
				</div>
				<div className="social-label">
					<a href="https://www.michaelgomeh.com" target="_blank">
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
				<div className="hero" id="hero">
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
				<div className="projects-container" id="projects">
					<ProjectCard
						title={'Eco op'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet similique consectetur'
						}
						stack={['Nextjs, Typescript, MantineUI, Xata, Clerk Auth']}
						url={'https://www.e-op.org/'}
					/>
					<ProjectCard
						title={'Project1'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet similique consectetur'
						}
						stack={['React, ts']}
						url={'undefined'}
					/>
					<ProjectCard
						title={'CSS Playground'}
						description={
							'A collection of reusable components and design experiments showcasing advanced CSS techniques.'
						}
						stack={['CSS']}
						url={'https://github.com/michaelgomeh/CSS-Playground'}
					/>
				</div>
				<div className="contact" id="contact">
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
