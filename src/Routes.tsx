import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import viewsRoutes from 'views/routes';
const Routes = (): JSX.Element => {
  return (
    <Switch>
      {viewsRoutes.map((item, i) => (
        <Route key={i} exact path={item.path} render={() => item.renderer()} />
      ))}
      {/* <Route
        path="food-for-thought/:writingTitle"
        render={() => <DetailWritingView />}
      /> */}
      <Redirect to={'/not-found'} />
    </Switch>
  );
};

export default Routes;
