import './App.css'
import './HomePage.css'

const HomePage: React.FC = () => {
    return (
        <div className = "App HomePage">
            <img src="https://seeklogo.com/images/B/bitly-logo-BFC8CAF4A0-seeklogo.com.png" alt="Bitly Logo"></img>
            <div className = "col-xs-8 col-xs-offset-2 jumbotron text-center">
                <h1 class = "Title">Event.ly</h1>
                <p class = "Text">Host your events here!</p>
                <button>Get Started!</button>
                <b></b>
                <p>Find an event!</p>
                <button>RSVP</button>
            </div>
        </div>
    );
}

export default HomePage