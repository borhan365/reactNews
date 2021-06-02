import React, {useState, useEffect} from 'react'
import { ExternalLink } from 'react-external-link'

function ModalPopup() {

    const [popup, setPopup] = useState(false); 
    const [show, setShow] = useState(false);

    // On componentDidMount set the timer
    useEffect(() => {
    const time = setTimeout(() => {
    // After 3 seconds set the show value to false
    setPopup(true)
    }, 3000)

    return () => {
        clearTimeout(time)
      }
    }, []);

    if (!popup) {
        return null;
      }

    //   Remove ads
    const removeAds = () => {
        setShow(!show);
    }

    return (
        <>
        <section className={show ? "ads__section remove" : "ads__section"}>
            <div className="popup__wrapper">
                <ExternalLink href="https://mdborhanuddin.com/">
                    <img src="assets/images/photos/ads.jpg" className="img-fluid" alt="Banner popup" />
                </ExternalLink>
                <span id="close" onClick={removeAds}><i className="fas fa-times"></i></span>
            </div>
        </section>
        </>
    )
}

export default ModalPopup
   
