import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SigninPage = () => {
  return (
    <section className='loginform'>
      <h1>Create Your Account</h1>
    <Form className='introForm'>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" />
        <Form.Text className="text-muted">
          This is how you will be show to the other users.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Create Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          Please make it very secured.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree with Terms" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create My Account
      </Button>
    </Form>
    </section>
  );
}

export default SigninPage;