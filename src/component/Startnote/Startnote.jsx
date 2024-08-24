import React from 'react'
import Rightpannel from '../rightside/Rightpannel'
import LeftSidePannel from '../Leftpannel/LeftSidePannel'
import Styles from './Startnote.module.css'

function Startnote() {
  return (
    <div className={Styles.start} >
        <LeftSidePannel/>
      <Rightpannel/>
      
    </div>
  )
}

export default Startnote
