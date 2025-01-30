import { useState } from 'react';
import {
	IconBrandGithubFilled,
	IconBrandLinkedinFilled,
	IconWorldWww,
} from '@tabler/icons-react';
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
				<a href="">
					<IconBrandGithubFilled strokeWidth={1} />
				</a>
				<a href="">
					<IconBrandLinkedinFilled strokeWidth={1} />
				</a>
				<a href="">
					<IconWorldWww strokeWidth={1} />
				</a>
			</div>
			<main>
				<div>hero-text</div>
				<div>picture</div>
				<div>content</div>
			</main>
			<footer>hi</footer>
		</div>
	);
};

export default App;
