import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import PriceList from './pages/PriceList'
import Services from './pages/Services'
import FirstAppointment from './pages/FirstAppointment'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions'
import { rodoData, termsData } from './data/terms'
import { AppTab, tabRoutes } from "./data/appTabs";

function App() {

  return (
    <>
      <div className="safe-area-background" />
    <Router>
      <Routes>
        <Route path={tabRoutes[AppTab.STRONA_GLOWNA]} element={<Home/>}/>
        <Route path={tabRoutes[AppTab.O_NAS]} element={<AboutUs />}/>
        <Route path={tabRoutes[AppTab.USLUGI]} element={<Services />}/>
        <Route path={tabRoutes[AppTab.CENNIK]} element={<PriceList />}/>
        <Route path={tabRoutes[AppTab.PRZED_WIZYTA]} element={<FirstAppointment />}/>
        <Route path={tabRoutes[AppTab.REGULAMIN]} element={<TermsAndConditions pageTitle={AppTab.REGULAMIN} data={termsData}/>}/>
        <Route path={tabRoutes[AppTab.RODO]} element={<TermsAndConditions pageTitle={AppTab.RODO} data={rodoData}/>}/>
        <Route path={tabRoutes[AppTab.KONTAKT]} element={<Contact />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
