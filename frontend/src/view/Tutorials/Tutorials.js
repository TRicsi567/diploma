import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Tutorials = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path} exact>
        összes kilistázva
      </Route>
      <Route path={`${match.path}/(easy|intermediate|professional)`} exact>
        Szint szinten összes
      </Route>
      <Route path={`${match.path}/:diffuculty/:tutorialId`}>
        megnyitott tutorial
      </Route>
    </Switch>
  );
};

export { Tutorials as default };
