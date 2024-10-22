import './App.css';
import { NavBar} from './components/navbar';
import { Slider } from './components/slider';
import { InfoSection } from './components/infosection';
import { Rights } from './components/rights';
import { Home } from './components/home';
import './css/bootstrap.css'

import './css/responsive.css'
import './css/style.css'
import './css/style.scss'

function App() {
  return (
    <div >
      <div  class="hero_area">
         <NavBar/>
         <Slider/>
      </div>
      <div id="content">
      <Home/>
        
      </div>
        <InfoSection/>
        <Rights/>
    </div>
  );
}

export default App;
