import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
import { Product }  from './pages/Product'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={ <Product /> } />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

