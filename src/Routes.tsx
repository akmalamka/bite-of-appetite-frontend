import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import viewsRoutes from 'views/routes';
import docsRoutes from 'docs/routes';
import blocksRoutes from 'blocks/routes';
import {
  Home as HomeView,
  NotFoundCover as NotFoundCoverView,
  About as AboutView,
  FoodForThought as FoodForThoughtView,
  Recipes as RecipesView,
  DetailRecipe as DetailRecipeView,
  DetailWriting as DetailWritingView,
} from 'views';

const Routes = (): JSX.Element => {
  const routes = [
    {
      path: '/',
      renderer: (params = {}): JSX.Element => <HomeView {...params} />,
    },
    {
      path: '/home',
      renderer: (params = {}): JSX.Element => <HomeView {...params} />,
    },
    {
      path: '/not-found-cover',
      renderer: (params = {}): JSX.Element => <NotFoundCoverView {...params} />,
    },
    {
      path: '/recipes',
      renderer: (params = {}): JSX.Element => <RecipesView {...params} />,
    },
    {
      path: '/recipes/:recipeTitle',
      renderer: (params = {}): JSX.Element => <DetailRecipeView {...params} />,
    },
    {
      path: '/food-for-thought/:writingTitle',
      renderer: (params = {}): JSX.Element => <DetailWritingView {...params} />,
    },
    {
      path: '/food-for-thought',
      renderer: (params = {}): JSX.Element => (
        <FoodForThoughtView {...params} />
      ),
    },
    {
      path: '/about',
      renderer: (params = {}): JSX.Element => <AboutView {...params} />,
    },
  ];
  return (
    <Switch>
      {routes.map((item, i) => (
        <Route key={i} exact path={item.path} render={() => item.renderer()} />
      ))}
      {/* {docsRoutes.map((item, i) => (
        <Route key={i} exact path={item.path} render={() => item.renderer()} />
      ))}
      {blocksRoutes.map((item, i) => (
        <Route key={i} exact path={item.path} render={() => item.renderer()} />
      ))} */}
      <Redirect to={'/not-found-cover'} />
    </Switch>
  );
};

export default Routes;
