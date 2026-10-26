import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const appLayout = () => {
  return (
    <div className="App">
      {/* header */}
      <Header/>
      {/* body */}
      <Body/>
      {/* footer */}
      <Footer/>
    </div>
  )
}
function App() {
  return appLayout()
}

export default App
