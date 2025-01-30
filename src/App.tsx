import { useState } from 'react';
import {
	IconBrandCss3,
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
				<a href="" target="_blank">
					<IconBrandGithubFilled strokeWidth={1} />
				</a>
				<a href="" target="_blank">
					<IconBrandLinkedinFilled strokeWidth={1} />
				</a>
				<a href="" target="_blank">
					<IconWorldWww strokeWidth={1} />
				</a>
				<a href="https://uiverse.io/profile/michaelgomeh" target="_blank">
					<IconBrandCss3 strokeWidth={1} />
				</a>
			</div>
			<main>
				<div className="hero-text">
					<h1 className="hero-title">Hi,</h1>
					<h2 className="hero-subtitle">I'm Michael</h2>
					<h3 className="hero-description">subtitle</h3>
				</div>
				<div className="hero-picture">
					<img src="src\assets\images\programmer.png" alt="" />
				</div>
				<div className="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
					similique consectetur eum veritatis hic. Nulla eaque vel mollitia
					tempore iusto accusamus ipsam, iste commodi sapiente animi enim non
					asperiores aut libero quas maxime repellendus esse eveniet? Laudantium
					facere deleniti, saepe pariatur excepturi, eum possimus dolorem eos
					doloremque illum nihil mollitia nam, autem a! Vel, maiores numquam sed
					quas sapiente cumque accusamus perferendis voluptas voluptate dolorum
					impedit, quaerat minima suscipit! Nulla voluptates libero facilis aut
					sit illo iusto? Quod sint veritatis voluptatibus ad cum id neque ipsum
					saepe eligendi, nihil dolorem iste sunt repellat repellendus
					asperiores, optio impedit necessitatibus est, cupiditate tenetur
					dignissimos molestias quas officiis. Ad rerum repellat qui quisquam
					quis molestiae eveniet. Aliquid consequatur cumque ut accusamus
					similique mollitia ipsa itaque, obcaecati, temporibus sequi possimus,
					ipsum recusandae illum ad. Veritatis a mollitia tempore tenetur minus
					nulla, quia aliquam soluta sint libero exercitationem quo eius
					repellat assumenda enim voluptatibus laboriosam voluptatem excepturi!
					Consectetur explicabo laborum perferendis praesentium incidunt quo
					voluptas nostrum dolorem, at iure tempore nesciunt blanditiis sequi
					reprehenderit dolore labore tempora aliquid vitae, ut autem neque ex.
					A eum quaerat, optio doloribus iste magnam reiciendis, unde rerum ex,
					distinctio repellendus fugiat quis magni. Fuga maiores deleniti
					nostrum tempora tenetur!
				</div>
			</main>
			<footer>hi</footer>
		</div>
	);
};

export default App;
