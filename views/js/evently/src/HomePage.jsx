import './App.css'
import './HomePage.css'
import logo from './bitly-logo.png';

const HomePage: React.FC = () => {
    return (
        <div className = "App HomePage">
            <img src={logo} alt="Bitly Logo"></img>
            <div className = "col-xs-8 col-xs-offset-2 jumbotron text-center" id="MainText">
                <h1 class = "Title">Event.ly</h1>
                <h2 class = "Text">Host your events here!</h2>
                <button>Get Started!</button>
                <b></b>
                <h2 class = "Text">Find an event!</h2>
                <button>RSVP</button>
            </div>
        </div>
    );
}

export default HomePage