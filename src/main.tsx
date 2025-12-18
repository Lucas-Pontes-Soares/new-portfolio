import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import AppRoutes from './AppRoutes.tsx'
import { BrowserRouter } from 'react-router-dom'

import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster richColors />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
