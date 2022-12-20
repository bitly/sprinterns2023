class App extends React.Component {
    render() {
      return (<Home />);
    }
  }

  class Home extends React.Component {
    render() {
      return (
        <div className="container">
          <div className="col-xs-8 col-xs-offset-2 jumbotron text-center">
            <h1>Event.ly</h1>
            <p>A way to plan your event and invite your friends!</p>
            <a href="/api/events" className="btn btn-primary btn-lg btn-login btn-block">Take Me To The Events</a>
          </div>
        </div>
      )
    }
  }

  class Joke extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        liked: ""
      }
      this.like = this.like.bind(this);
    }
      
    like() {
      // ... we'll add this block later
    }
      
    render() {
      return (
        <div className="col-xs-4">
          <div className="panel panel-default">
            <div className="panel-heading">#{this.props.joke.id} <span className="pull-right">{this.state.liked}</span></div>
            <div className="panel-body">
              {this.props.joke.joke}
            </div>
            <div className="panel-footer">
              {this.props.joke.likes} Likes &nbsp;
              <a onClick={this.like} className="btn btn-default">
                <span className="glyphicon glyphicon-thumbs-up"></span>
              </a>
            </div>
          </div>
        </div>
      )
    }
  }
  
ReactDOM.render(<App />, document.getElementById('app'));
