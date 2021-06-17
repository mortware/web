import React from 'react';
import { Home, Resume } from './views';
import { Header, Footer } from './components/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithubSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faMobileAlt, faEnvelope, faCode, faPlay } from '@fortawesome/free-solid-svg-icons';

library.add(
  faLinkedin,
  faGithubSquare,
  faCode,
  faEnvelope,
  faMobileAlt,
  faGlobe,
  faPlay,
  faGithub
)

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>

        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
        <Footer />

      </Router>
    </div>
  );
}

export default App;