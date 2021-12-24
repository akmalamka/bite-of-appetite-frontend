import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import viewsRoutes from 'views/routes';
import docsRoutes from 'docs/routes';
import blocksRoutes from 'blocks/routes';
import {
  Home as HomeView,
  About as AboutView,
  FoodForThought as FoodForThoughtView,
  Recipes as RecipesView,
  DetailRecipe as DetailRecipeView,
  DetailWriting as DetailWritingView,
  SignIn as SignInView,
  NotFound as NotFoundView,
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
    {
      path: '/sign-in',
      renderer: (params = {}): JSX.Element => <SignInView {...params} />,
    },
    {
      path: '/not-found',
      renderer: (params = {}): JSX.Element => <NotFoundView {...params} />,
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
      <Redirect to={'/not-found'} />
    </Switch>
  );
};

export default Routes;
