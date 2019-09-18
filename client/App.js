import * as React from 'react';
import MapboxGLMap from './components/mapComponent';
import './styles/styles.scss';
import CardGrid from './components/cardsComponent';
import ContainedButtons from './components/buttonComponents';


const App = () => {
    // const [map, updateMap] = useState(null);
    // const [cards, updateCards] = useState(null);

    // const handleButtonClick = () => {
    //     updateMap(map)
    //     updateCards(cards)
    // }
    return(
        <div>
        <div className="headline">
          
        <div>
        <h1 className="main-heading">PLANTfare</h1>
        </div>
        <div className="right-column">
        <input className="search"/>
        <ContainedButtons />
        </div>
        </div>
       <div className="map">
        <MapboxGLMap  />
        </div>
        <div className="cardGrid">
        <CardGrid />
        </div>
        </div>
    )
 
}

export default App;