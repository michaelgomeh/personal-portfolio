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
				<div className="hero-text">hero-text</div>
				<div className="hero-picture">picture</div>
				<div className="content">
					content Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Libero excepturi eius quidem rerum voluptates, eveniet labore modi
					esse deleniti harum minus mollitia aut quia, dolores ducimus beatae
					cum, necessitatibus qui aperiam veritatis nemo alias? Explicabo
					molestiae ut et vero fuga odio perferendis maiores, aliquam magni ab
					ducimus dolore incidunt nisi eum odit necessitatibus expedita
					cupiditate libero omnis ipsum. Tempora labore quos nemo temporibus!
					Molestias itaque in temporibus, ipsa repudiandae harum beatae dolore,
					quod dicta omnis porro tempora eaque nisi ab ipsum? Cum, illo sunt
					architecto, molestias iste assumenda praesentium distinctio, harum
					fugit esse nostrum voluptates inventore. Ipsa cupiditate iure
					voluptatibus saepe corrupti fugiat, in ab? Nesciunt numquam
					consequuntur fuga totam omnis, deserunt suscipit quis autem
					reiciendis! Officia recusandae porro animi rem, debitis a laborum
					quibusdam culpa eos, eum dolorum nisi, distinctio aliquam sit beatae
					totam? Minus necessitatibus qui deleniti iusto eos maiores, cupiditate
					natus aliquid quia neque vitae a, exercitationem tenetur. Nam natus
					quidem molestias officia sed, earum nulla neque sequi eius labore
					autem officiis modi culpa vel magni, inventore doloribus at amet porro
					molestiae. Quidem suscipit tenetur facere, saepe doloribus minima
					illum maiores ad mollitia iure voluptas laboriosam rem ducimus,
					obcaecati et deserunt voluptatem animi modi eligendi aperiam atque aut
					assumenda ex tempore. Expedita et facilis fugit cum debitis
					accusantium tempora in perferendis porro, voluptas laboriosam
					molestias ex aliquam quisquam consectetur voluptatibus sit. Esse
					corporis nulla soluta voluptate porro modi illum quam? Repellat saepe
					ipsam doloribus dolorum rem enim ut accusamus et repudiandae
					reiciendis ullam exercitationem inventore odit, dolore minima beatae
					aliquid ipsa perspiciatis assumenda molestiae. Nemo voluptas possimus
					natus iste ipsum tempore suscipit harum, ad debitis praesentium
					itaque. Obcaecati impedit recusandae ipsa molestiae, voluptas magnam
					adipisci consectetur assumenda neque est quasi et fugiat dignissimos
					laboriosam mollitia iure. Pariatur quaerat, repellendus quo
					consequatur distinctio sapiente molestias repudiandae consectetur
					ullam, quos temporibus nulla porro officia. Quas aut, repellat
					voluptates ullam rem tempore labore consequatur vitae ea. Veritatis
					odio, aliquam quam, sunt assumenda, debitis laborum provident cum
					placeat ipsam temporibus eius eveniet nulla nam rerum a officiis nihil
					impedit incidunt pariatur molestias at velit? Nam nostrum nihil a
					molestias. Natus commodi nostrum eligendi dolore. Similique voluptas
					porro maxime assumenda architecto perspiciatis non minima recusandae?
					Ducimus provident alias dolorem itaque quas nulla sapiente, nesciunt
					consectetur possimus dolorum cumque expedita illum, dicta porro quidem
					esse. Dolorem perferendis repellat, itaque ex fugit voluptas quo nam
					tempore hic optio laudantium perspiciatis in laborum commodi
					asperiores dignissimos maxime ullam debitis dolore vel illum sint
					incidunt quaerat placeat. Iste earum alias ex quibusdam dolor ea cum
					unde reprehenderit culpa esse perferendis dicta, voluptas cumque!
					Accusamus, provident atque eaque ea omnis quas facere ratione! In,
					consequatur veniam. Voluptas consectetur, nobis sed ea, laborum itaque
					nemo unde temporibus saepe atque adipisci laudantium in sunt quia
					nostrum fugit incidunt magnam. Placeat labore sed omnis incidunt
					reprehenderit beatae facere illo obcaecati non consectetur voluptatum
					explicabo alias enim optio ab illum iusto hic quaerat exercitationem,
					corporis temporibus aspernatur. Magni quia illum autem iusto
					voluptatem harum dolorum, molestiae sunt fugiat repudiandae nobis
					sapiente neque vero sint placeat illo at deserunt odio, suscipit fuga
					ut! Ipsa perferendis modi magni laborum accusantium adipisci enim iure
					suscipit velit voluptatum mollitia, libero atque. Quasi tenetur illum
					repudiandae tempora qui culpa nobis in atque nulla dolores. Minus sed
					doloremque, fugit, voluptatem dolores repudiandae itaque corrupti,
					harum provident placeat animi? Quo ea ipsa nihil dolore sequi aperiam
					alias quod magnam asperiores aliquam. Nulla fugit quisquam veritatis
					commodi! Corrupti delectus et error rem, consectetur ea dolore animi
					ipsum alias. Dicta numquam amet, ullam labore, libero in officiis,
					repellat quisquam ab quos tempora commodi ea. Eos sed aspernatur
					corporis quasi cupiditate accusamus exercitationem eaque soluta
					perspiciatis, laborum praesentium repellendus quo sint cum dolores
					nulla et doloribus rerum, minus consectetur repellat recusandae!
					Pariatur provident aspernatur nulla, placeat minima perspiciatis
					distinctio reprehenderit nostrum consectetur quas, maxime consequatur
					necessitatibus adipisci vero tempore eius fugiat. Impedit esse velit
					recusandae possimus cum ullam dignissimos quisquam aliquid
					consequuntur magni placeat ipsum corrupti, accusantium harum,
					voluptatem saepe, quo iusto asperiores. Tempora non eligendi et sint
					magni totam culpa quibusdam repudiandae natus? Tempora dolorum
					exercitationem soluta. Eum a cupiditate culpa tempore quis, optio
					veniam odio suscipit voluptatum, blanditiis sunt, quam delectus
					consequatur expedita nesciunt earum praesentium voluptate. Deleniti
					laborum qui, voluptatum adipisci error fugit commodi rerum corrupti
					delectus officiis consequuntur quibusdam. Quibusdam accusamus impedit
					dolore amet quasi velit atque pariatur dolorum tempore quis maiores
					aliquam, fuga exercitationem officiis facere sit at vero odio
					molestiae culpa qui? Est vitae odio deserunt ducimus in rem eius iste
					aut neque. Molestias excepturi, ab repellat dignissimos fuga,
					similique molestiae dolores incidunt, veniam explicabo dolorum nemo
					mollitia libero deleniti. Expedita aspernatur, laudantium earum vitae
					eligendi totam. Fugit eos, est quis perferendis sapiente obcaecati
					exercitationem debitis nostrum labore vero. Laboriosam fuga quidem
					labore est doloremque quas corporis, ipsum voluptatum vel! Repudiandae
					quasi sequi cumque saepe aspernatur repellendus consectetur quaerat
					quae magni quidem cum ipsa ducimus magnam est doloremque, doloribus
					veritatis, voluptas libero commodi! Delectus enim iste placeat
					perspiciatis illum id adipisci. Ut aspernatur esse beatae quo unde
					minus ea, vitae provident! Ratione officia esse ad suscipit, quo,
					doloremque dicta veniam dolorum et quaerat itaque consequatur
					molestias quasi velit praesentium totam? Consequuntur necessitatibus
					quisquam voluptatem voluptates doloribus laborum praesentium repellat
					esse rerum officia ipsam, corrupti, maiores dolores fugit repellendus
					voluptatibus ab temporibus similique id laboriosam sunt. In doloremque
					quisquam molestias enim necessitatibus facere velit veniam numquam
					temporibus, dolor tempora reprehenderit quis sunt corporis quod!
					Numquam iusto rerum ducimus tempora et nesciunt eos illum consequatur
					non placeat, natus mollitia distinctio eaque repellendus commodi aut
					aliquid ipsum architecto earum fuga nulla aperiam vero voluptas.
					Repellendus quidem excepturi labore sit dolorem voluptatem quisquam
					inventore vel officiis illo explicabo quas sequi eaque doloribus error
					saepe porro consequuntur ipsam maiores, quis eum mollitia pariatur.
					Atque repellendus perferendis quis eveniet excepturi corrupti ullam
					quas ipsam quasi dolorem. Odit doloremque dolorum beatae? Laborum,
					animi? Expedita ducimus doloribus architecto? Voluptate, voluptatem!
					Soluta recusandae et cupiditate corporis totam, esse, minima iure eius
					rem facilis a quibusdam adipisci! Praesentium recusandae culpa
					possimus, officiis veritatis laborum architecto.
				</div>
			</main>
			<footer>hi</footer>
		</div>
	);
};

export default App;
