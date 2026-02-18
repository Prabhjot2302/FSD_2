import { lazy, Suspense } from 'react'
import './App.css'

const Form = lazy(() => import('./components/form'))

function App() {
  return (
    <>
      <h1 className="page-heading">Handle forms and validations in frontend</h1>
      <div className="container-center">
        <Suspense fallback={<div className="form-loading">Loading form...</div>}>
          <Form />
        </Suspense>
      </div>
    </>
  )
}

export default App
