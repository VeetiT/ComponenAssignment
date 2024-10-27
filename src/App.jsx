
import Header from './components/Header'
import './styles/app.css'
import image from './assets/sun.jpg'

function App() {

  return (
    <div>
        <Header image={image} title="Welcome to the Product Page!" />
    </div>
  )
}

export default App
