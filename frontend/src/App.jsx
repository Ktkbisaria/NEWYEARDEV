import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Success from './components/Success'
import ViewSubmissions from './components/ViewSubmissions'

function FormFlow() {
  const [currentPage, setCurrentPage] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    plan: '',
    rating: 0,
    creative_response: ''
  })

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const nextPage = () => {
    setCurrentPage(prev => prev + 1)
  }

  const prevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1))
  }

  const resetForm = () => {
    setCurrentPage(1)
    setFormData({
      name: '',
      plan: '',
      rating: 0,
      creative_response: ''
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {currentPage === 1 && (
          <Page1 
            name={formData.name}
            updateFormData={updateFormData}
            nextPage={nextPage}
          />
        )}
        {currentPage === 2 && (
          <Page2 
            plan={formData.plan}
            updateFormData={updateFormData}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        )}
        {currentPage === 3 && (
          <Page3 
            rating={formData.rating}
            updateFormData={updateFormData}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        )}
        {currentPage === 4 && (
          <Page4 
            creative_response={formData.creative_response}
            updateFormData={updateFormData}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        )}
        {currentPage === 5 && (
          <Success 
            formData={formData}
            resetForm={resetForm}
          />
        )}
      </div>
    </div>
  )
}

function Navigation() {
  const location = useLocation()
  const isViewPage = location.pathname === '/view'

  if (isViewPage) {
    return (
      <Link
        to="/"
        className="button-primary fixed top-4 left-4 z-50 px-6 py-3 font-semibold rounded-lg transition-all shadow-lg"
      >
        Back to Form
      </Link>
    )
  }

  return (
      <Link
        to="/view"
        className="button-secondary fixed top-4 right-4 z-50 px-6 py-3 font-medium rounded-lg transition-all shadow-lg"
      >
        View All Responses
      </Link>
  )
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<FormFlow />} />
        <Route path="/view" element={
          <div className="min-h-screen flex items-center justify-center p-4">
            <ViewSubmissions />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App

