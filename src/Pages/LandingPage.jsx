import React from 'react';
import LandingPageHeader from "../Components/LandingPage/LandingPageHeader/LandingPageHeader.jsx"
import LandingPageSearch from "../Components/LandingPage/LandingPageSearch/LandingPageSearch.jsx"
import LandingPageCard from "../Components/LandingPage/LandingPageCard/LandingPageCard.jsx"
import LandingPageDestination from "../Components/LandingPage/LandingPageDestination/LandingPageDestination.jsx"
import LandingPageSubscribe from "../Components/LandingPage/LandingPageSubscribe/LandingPageSubscribe.jsx"
import LandingPageFooter from "../Components/LandingPage/LandingPageFooter/LandingPageFooter.jsx"
function LandingPage() {
  return (
    
    <div>
      <LandingPageHeader />
      <LandingPageSearch />
      <LandingPageCard />
      <LandingPageDestination /> 
       <LandingPageSubscribe />
      <LandingPageFooter/>
      </div>
      
  )
}

export default LandingPage;