import React, { useMemo, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, CssBaseline } from '@mui/material'
import createAppTheme from './theme'
import { BrowserRouter } from 'react-router-dom'

const getInitialMode = () => {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('color-mode')
  if (stored === 'light' || stored === 'dark') return stored
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function Root() {
  const [mode, setMode] = useState(getInitialMode)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('color-mode', mode)
    }
  }, [mode])

  const theme = useMemo(() => createAppTheme(mode), [mode])
  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App mode={mode} onToggleMode={toggleMode} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
