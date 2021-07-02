import React, {FC} from 'react';
import './App.css';
import Button from './components/button/button';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Click Me"></Button>
      </header>
    </div>
  );
}

export default App;
