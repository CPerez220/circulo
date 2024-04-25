import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

const Welcome = () => {
  return(
    <section className="welcome">
    <h1>Welcome to Circulo</h1>
    <h3>A place where you can connect with people around communities. A place that makes it easy to share and discuss your ideas freely. A safe place for any type of people who want to explore.</h3>
    <div className="mb-2">
        <Link to="/login"><Button variant="primary" size="lg">
        LOG IN
        </Button></Link>{' '}
        <Link to="/register"><Button variant="secondary" size="lg">
          SIGN UP
        </Button></Link>
      </div>
    </section>
  )
}

export default Welcome