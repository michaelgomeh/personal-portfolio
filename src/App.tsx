import { FormEvent, useState } from 'react';
import {
	IconBrandCss3,
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandLinktree,
	IconFileCv,
	IconWorldWww,
} from '@tabler/icons-react';
import ProjectCard from './components/ProjectCard';
import React from 'react';

const App = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	function alertContactInProgress(e: FormEvent) {
		e.preventDefault();
		alert('yet to be implemented');
	}

	return (
		<div className="home">
			<header>
				<div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M5 7l5 5l-5 5" />
							<path d="M13 17l6 0" />
						</svg>
					</div>
					<p>Michael Gomeh</p>
				</div>
				<button
					className="drawerToggle"
					data-visible={drawerOpen}
					onClick={() => setDrawerOpen(!drawerOpen)}
				></button>
				<nav id="nav" data-visible={drawerOpen}>
					<a onClick={() => setDrawerOpen(false)} href="#hero">
						Home
					</a>
					<a onClick={() => setDrawerOpen(false)} href="#projects">
						Projects
					</a>
					<a onClick={() => setDrawerOpen(false)} href="#contact">
						Contact
					</a>
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
					<a href="https://linktr.ee/michaelgomeh" target="_blank">
						<div>
							<IconBrandLinktree strokeWidth={1} />
						</div>
						<p>Linktr.ee</p>
					</a>
				</div>
				<div className="social-label">
					<a href="src\assets\files\Michael Gomeh CV.pdf" target="_blank">
						<div>
							<IconFileCv strokeWidth={1} />
						</div>
						<p>CV</p>
					</a>
				</div>
			</div>
			<main>
				<div className="hero" id="hero">
					<div className="hero-text">
						<h1 className="hero-title">Hi,</h1>
						<h2 className="hero-subtitle">I'm Michael</h2>
						<h3 className="hero-description">
							I build website from concept to production
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
							'A platform connecting biologists and researchers for collaboration and data sharing. Find partners, share insights, and accelerate scientific breakthroughs.'
						}
						stack={['Nextjs', 'Typescript', 'MantineUI', 'Xata', 'Clerk Auth']}
						url={'https://www.e-op.org/'}
					/>
					<ProjectCard
						title={'Haiku - Notes App'}
						description={
							'An intuitive notes app to keep and share of your thoughts and ideas.'
						}
						stack={['React', 'Express', 'Typescript', 'MantineUI', 'Tailwind']}
						url={'http://haiku-client.onrender.com'}
					/>
					<ProjectCard
						title={'CSS Playground'}
						description={
							'A collection of reusable components and design experiments showcasing advanced CSS techniques.'
						}
						stack={['Pure CSS']}
						url={'https://github.com/michaelgomeh/CSS-Playground'}
					/>
				</div>
				<div className="contact" id="contact">
					<form onSubmit={alertContactInProgress}>
						<fieldset>
							<legend>Contact</legend>
							<label htmlFor="email">
								Email
								<input name="email" type="text" id="email" />
							</label>
							<label htmlFor="content">
								Content
								<textarea rows={5} name="" id="content"></textarea>
							</label>
							<button type="submit">Submit</button>
						</fieldset>
					</form>
				</div>
			</main>
		</div>
	);
};

export default App;
