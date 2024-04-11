import React, {useEffect, useState} from 'react'
import TicketConfirmation from '../Components/TicketConfirmationPage/TicketConfirmation'
import airwayAnimationPass from "/src/assets/images/airwayanimPass.gif";

function TicketConfirmationPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
      <div>
        {loading && (
            <img className="loading-textP" src={airwayAnimationPass} alt="Loading animation"/>
        )}
        {loading || (

            <TicketConfirmation/>
        )}
      </div>
  )
}

export default TicketConfirmationPage