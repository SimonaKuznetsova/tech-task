import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import StartPage from 'views/StartPage'
import EmployeesPage from 'views/EmployeesPage'
import 'styles/base/base.scss'
import {store, persistor} from 'redux/store'
import {PersistGate} from 'redux-persist/integration/react'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <section className='home'>
            <Route exact path='/' component={StartPage}/>
            <Route exact path='/employees' component={EmployeesPage}/>
          </section>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
