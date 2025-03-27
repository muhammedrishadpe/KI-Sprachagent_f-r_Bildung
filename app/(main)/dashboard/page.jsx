import React from 'react'
import FeatureAssistants from './_components/FeatureAssistants'
import History from './_components/History'
import Feedback from './_components/Feedback'

function Dashboard() {
  return (
    <div>
    <FeatureAssistants />
    <div className="grid grid-cols-2 grid-rows-1 gap-10 mt-20">
    <History />
    <Feedback />
    </div>
    
    </div>
  )
}

export default Dashboard
