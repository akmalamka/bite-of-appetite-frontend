import React from 'react';

import {
  Home as HomeView,
  About as AboutView,
  FoodForThought as FoodForThoughtView,
  Recipes as RecipesView,
  DetailRecipe as DetailRecipeView,
  DetailWriting as DetailWritingView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  AccountBilling as AccountBillingView,
  AccountGeneral as AccountGeneralView,
  AccountNotifications as AccountNotificationsView,
  AccountSecurity as AccountSecurityView,
  ContentManagement as ContentManagementView,
  ContentList as ContentListView,
  ContentHome as ContentHomeView,
} from 'views';

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
    renderer: (params = {}): JSX.Element => <FoodForThoughtView {...params} />,
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
  {
    path: '/account-billing',
    renderer: (params = {}): JSX.Element => <AccountBillingView {...params} />,
  },
  {
    path: '/account-general',
    renderer: (params = {}): JSX.Element => <AccountGeneralView {...params} />,
  },
  {
    path: '/account-notifications',
    renderer: (params = {}): JSX.Element => (
      <AccountNotificationsView {...params} />
    ),
  },
  {
    path: '/account-security',
    renderer: (params = {}): JSX.Element => <AccountSecurityView {...params} />,
  },
  {
    path: '/content-management',
    renderer: (params = {}): JSX.Element => <ContentHomeView {...params} />,
  },
  {
    path: '/content-management/recipes',
    renderer: (params = {}): JSX.Element => (
      <ContentListView isRecipe={true} {...params} />
    ),
  },
  {
    path: '/content-management/writings',
    renderer: (params = {}): JSX.Element => (
      <ContentListView isRecipe={false} {...params} />
    ),
  },
  {
    path: '/content-management/recipes/add',
    renderer: (params = {}): JSX.Element => (
      <ContentManagementView isRecipe={true} isAddContent={true} {...params} />
    ),
  },
  {
    path: '/content-management/writings/add',
    renderer: (params = {}): JSX.Element => (
      <ContentManagementView isRecipe={false} isAddContent={true} {...params} />
    ),
  },
  {
    path: '/content-management/recipes/edit/:recipeTitle',
    renderer: (params = {}): JSX.Element => (
      <ContentManagementView isRecipe={true} isAddContent={false} {...params} />
    ),
  },
  {
    path: '/content-management/writings/edit/:writingTitle',
    renderer: (params = {}): JSX.Element => (
      <ContentManagementView
        isRecipe={false}
        isAddContent={false}
        {...params}
      />
    ),
  },
];

export default routes;
