import './App.scss';
import Modal from './Modal';
import {fields} from './fieldsModal'


function App() {
  
  return (
    <div className="App-section">
    
      {fields.map(({...item}, index) => {
          return (
              <Modal key={index} fields={item}/>
      )})}
        
    </div>
  )
}

export default App;