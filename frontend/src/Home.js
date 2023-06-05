import { Link } from 'react-router-dom';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductRegistration'
import './App'
import './App.css'
import './ProductRegistration';

function Home() {

  return (
    <div className='home'>
      <h1 className='heading' >Welcome to the dashboard</h1>

      <div>
        <div>  <Link to='/productregistration'> <button className='btn3'> Register Product </button></Link></div>
       
      
      
        <div> <Link to="/t1"><button className='btn3'> View Product</button></Link></div>
       
      
      
        <div><Link to="/t1">  <button className='btn3'>Delete Product </button></Link></div>
       
      </div>
      


    </div>




  )
}

export default Home