import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { ProSidebarProvider } from 'react-pro-sidebar'

import App from './components/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app')).render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </BrowserRouter>
  )
})
