import NavBar from './NavBar'
import DropdownMenu from './DropdownMenu'

const Header = () => {
	return (
	<header className="relative z-10 bg-opacity-80">
		<NavBar />
		<DropdownMenu />
	</header>
	);
};

export default Header;