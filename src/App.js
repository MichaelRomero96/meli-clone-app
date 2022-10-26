import Component from './utils/Component';
import AppBar from './components/AppBar';
import TextSample from './components/TextSample';


const App = new Component({
  children: [AppBar, TextSample]
});

export default App;