import React, { FC } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import RouterConfig from './config.js'
const RouteConfig = () => {
  return (
    <div>
      <Router>
        {
          RouterConfig.map(item => (
            <Route path={item.path} exact component={require(`../views/${item.com}/index`).default} />

          ))
        }
      </Router>
    </div>
  );
};

export default RouteConfig;
