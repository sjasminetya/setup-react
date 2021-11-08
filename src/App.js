import React from 'react';
import './App.scss';
import { ICONS, IMAGES } from './configs';

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <h1>Contoh image</h1>
        <img src={IMAGES.examplePhoto} alt="" style={{ width: '100px', height: '100px' }} />
        <h1>Contoh svg</h1>
        <img src={ICONS.komputer} alt="" style={{ width: '100px', height: '100px' }} />
      </div>
    );
  }
}
export default App;
