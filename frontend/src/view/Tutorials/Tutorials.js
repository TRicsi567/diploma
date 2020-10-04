import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import All from './All';
import CategoryAll from './CategoryAll';

const Tutorials = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path} exact>
        <All />
      </Route>
      <Route
        path={`${match.path}/:category(easy|intermediate|professional)`}
        exact>
        {({ match: { params } }) => <CategoryAll category={params.category} />}
      </Route>
      <Route path={`${match.path}/:diffuculty/:tutorialId`}>
        megnyitott tutorial
      </Route>
    </Switch>
  );
};

export { Tutorials as default };
