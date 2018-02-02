import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperExampleSimple from './PaperExampleSimple';
import App1 from './App1';
const App = () => (
  <MuiThemeProvider >

  <div>
   <PaperExampleSimple>
   <App1/>
   </PaperExampleSimple>
  </div>
  </MuiThemeProvider>
);

export default App;
