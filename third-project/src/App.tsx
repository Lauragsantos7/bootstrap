import './App.css'
import GroupListing from './components/GroupListing'
import Modal from './components/Modal'
import Navigation from './components/Navigation'
import Popover from './components/Popover'
import ProgressBar from './components/ProgressBar'
import Toooltips from './components/Tooltips'

function App() {
  

  return (
    <>
      <Popover />
      <GroupListing />
      <Modal />
      <Navigation />
      <ProgressBar />
      <Toooltips />
    </>
  )
}

export default App
