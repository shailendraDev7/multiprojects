import './App.css'
// import Accordian from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {
  return (
    <div className='App'>     
      {/* <Accordian/> */}

      {/** Random Color Component */}
      {/* <RandomColor/> */}

      {/* Star Rating */}
      <StarRating noOfStars={10}/>

    </div>
  )
}

export default App
