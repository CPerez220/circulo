import Button from 'react-bootstrap/Button';

const Welcome = () => {
  return(
    <section className="welcome">
    <h1>Welcome to Circulo</h1>
    <h3>A place where you can connect with people around communities. A place that makes it easy to share and discuss your ideas freely. A safe place for any type of people who want to explore.</h3>
    <div className="mb-2">
        <Button variant="primary" size="lg">
          LOG IN
        </Button>{' '}
        <Button variant="secondary" size="lg">
          SIGN UP
        </Button>
      </div>
    </section>
  )
}

export default Welcome