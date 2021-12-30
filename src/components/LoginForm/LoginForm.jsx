import SEO from '../SEO';
import './LoginForm.css';
import { Card, Button } from 'react-bootstrap';

export default function LoginForm() {
	return (
		<>
			<SEO title='Login' />
			<h2 className='pageTitle'>Login</h2>
			<div title='formDiv'>
				<div class='shadow p-3 mb-5 bg-white rounded'>
					<form id='form'>
						<Card>
							<Card.Body>
								<label>Username</label>
								<br />
								<input />
								<br />
								<label>Password</label>
								<br />
								<input />
								<br />
								<Button id='button' type='submit'>
									Login
								</Button>
							</Card.Body>
						</Card>
					</form>
				</div>
			</div>
		</>
	);
}
