import backgroundVideo from "../assets/backgroundvd.mp4"
import "./landing.css"

export const LandingPage = () => {
  return (
    <div className="landing-container">
        <video className="background-video" src={backgroundVideo} autoPlay muted loop playsInline width="100%" height="100%">
            your browser does not support the video
        </video>

        <div className="overlay-content">
            <div className="text-box">
                <h1>What's happening around the World?</h1>
                <div className="view-btn">
                    <p>Global news on the globe</p>
                    <button type="button" className="button-50">view</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;