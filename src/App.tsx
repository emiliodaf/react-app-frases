import logoImg from '../src/assets/logo.png'
import './App.css'

function App() {
  
 
  return (
   
   <div className='container'>
    <img 
      src={logoImg}
      alt='logo Phrases'
      className='logo'
    />
    <h1>Project Phrases</h1>
    <h2 className='title'>Categories</h2>
    <section className='category-area'>
      <button className='category-button'>Motivational Quotes</button>
      <button className='category-button'>Well Being</button>
    </section>

    <button className='button-phrase'>Generate Phrases</button>

    <h3 className='text-phrase'>Go ahead, make my day!</h3>
    
   </div>
   
    
  )
}

export default App
