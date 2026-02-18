import './App.css'
import LocalStateCounter from './components/CounterLocalState'
import CounterContextParent from './components/CounterGlobalContextParent'
import CounterReduxParent from './components/CounterGlobalReduxParent'

import { CounterContextProvider } from './components/context/CounterGlobalContextAPI'

function App() {

  return (
    <>
      
      <div className="app-container">
        <h1 className="page-heading">State Management</h1>
        <div className="app-content">
          <LocalStateCounter cno="1" />
          <LocalStateCounter cno="2" />

          <CounterContextProvider>
            <CounterContextParent cno="1"/>
            <CounterContextParent cno="2"/> 
          </CounterContextProvider> 

          <CounterReduxParent cno="1"/>
          <CounterReduxParent cno="2"/>
        </div>
      </div>
    </>
  )
}

export default App
