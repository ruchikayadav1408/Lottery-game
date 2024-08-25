import { useState } from 'react'

import './App.css'
import Lottery from './Lottery.jsx'
import Ticketnum from './Ticketnum.jsx'
import Ticket from './Ticket.jsx'
function App() {
 

  return (
    <>
<Lottery n={3} winningsum={15} />

    </>
  )
}

export default App
