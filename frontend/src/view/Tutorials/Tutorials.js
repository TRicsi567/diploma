import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import All from './All';
import EasyAll from './EasyAll';
import IntermediateAll from './IntermediateAll';
import ProfessionalAll from './ProfessionalAll';

const Tutorials = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path} exact>
        <All />
      </Route>
      <Route
        path={`${match.path}/:difficulty(easy|intermediate|professional)`}
        exact>
        {({ match: { params } }) => {
          switch (params.difficulty) {
            case 'easy':
              return <EasyAll />;
            case 'intermediate':
              return <IntermediateAll />;
            case 'professional':
              return <ProfessionalAll />;
          }
        }}
      </Route>
      <Route path={`${match.path}/:diffuculty/:tutorialId`}>
        megnyitott tutorial
      </Route>
    </Switch>
  );
};

export { Tutorials as default };
