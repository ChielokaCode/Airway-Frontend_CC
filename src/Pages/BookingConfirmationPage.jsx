import BookingConfirmation from "../Components/BookingConfirmation/BookingConfirmation"
import airwayAnimationPass from "/src/assets/images/airwayanimPass.gif";
import React, {useEffect, useState} from "react";
const BookingConfirmationPage = () => {
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

        <BookingConfirmation/>
            )}
        </div>
    )
}

export default BookingConfirmationPage