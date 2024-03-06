import React from 'react'
import PassengersInfoHeader from '../Components/PassengersInfoAdultPage/PassengersInfoHeader/PassengersInfoHeader'
import PassengersInfoInfantMiddleTab from '../Components/PassengersInfoInfantPage/PassengersInfoInfantMiddleTab/PassengersInfoInfantMiddleTab'
import PassengersInfoInfantLowerTab from '../Components/PassengersInfoInfantPage/PassengersInfoInfantLowerTab/PassengersInfoInfantLowerTab'

const PassengersInfoInfantPage = () => {
  return (
    <>
    <div>
    <PassengersInfoHeader />
    <PassengersInfoInfantMiddleTab />
    <PassengersInfoInfantLowerTab />
    </div>
    </>
    
  )
}

export default PassengersInfoInfantPage