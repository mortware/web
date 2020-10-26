import React from 'react';
import { Home, Resume } from './views';
import { Header, Footer } from './components/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faMobileAlt, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

library.add(
  faLinkedin,
  faGithubSquare,
  faCode,
  faEnvelope,
  faMobileAlt,
  faGlobe
)

export default () => {
  return (
    <div className="relative pb-10 min-h-screen">
        <Router basename="/">

          <Header />

          <div className="md:p-3 md:container mx-auto">
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
