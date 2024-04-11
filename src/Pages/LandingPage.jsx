import React, {useEffect, useState} from 'react'
import Navbar from '../Components/LandingPage/LandingPageHeader/LandingPageHeader'
import Search from '../Components/LandingPage/LandingPageSearch/LandingPageSearch'
import Card from '../Components/LandingPage/LandingPageCard/LandingPageCard'
import Gallery from '../Components/LandingPage/LandingPageDestination/LandingPageDestination'
import Footer from '../Components/LandingPage/LandingPageFooter/LandingPageFooter'
import Subscription from '../Components/LandingPage/LandingPageSubscribe/LandingPageSubscribe'
import airwayAnimationPass from "/src/assets/images/airwayanimPass.gif";

const LandingPage = () => {
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);



    return (
        <div>
            {loading && (
                <img className="loading-textP" src={airwayAnimationPass} alt="Loading animation"/>
            )}
            {loading || (
    <>
      <Navbar isLoggedOut={isLoggedOut}/>
      <Search setIsLoggedOut={setIsLoggedOut}/>
      <Card />
      <Gallery />
      <Subscription />
      <Footer />
    </>
                )}
                </div>
  )
}

export default LandingPage