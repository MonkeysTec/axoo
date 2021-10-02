
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Busca from './components/Header/busca.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Busca />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
