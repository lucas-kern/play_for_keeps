import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigationbar() {
	return (
		<>
			<Navbar bg='primary' variant='dark' expand='lg'>
				<Container>
					<Navbar.Brand as={Link} to={'/'}>
						Playing For Keeps
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link as={Link} to={'/'}>
								Home
							</Nav.Link>
							<Nav.Link as={Link} to={'/login'}>
								Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
