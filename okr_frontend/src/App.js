import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import './css/commonApplicationsStyles.css';
import Home from './screens/home/home';
import About from './screens/about/about';
import ErrorPage from './screens/error/error_page';
import Signin from './screens/onboarding/signin/signin';
import CreateTeam from './screens/createTeam/CreateTeam';
import SignUp from './screens/onboarding/signup/signup';
import Objectives from './screens/objectives/Objectives';
import SingleObjectives from './screens/SingleObjectives/SingleObjectives';
import CreateObjective from './screens/createObjective/CreateObjective';
import CreateKeyResult from './screens/createKeyresult/CreateKeyResult';

function App() {

  // All routes here
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home />,
    },
    {
      path : '/about',
      element : <About />,
    },
    {
      path : '/signin',
      element : <Signin />,
    },
    {
      path : '*',
      element : <ErrorPage />,
    },
    {
      path : '/createTeam',
      element : <CreateTeam />,
    },
    {
      path : '/signup',
      element : <SignUp />,
    },
    {
      path : '/objectives',
      element : <Objectives />,
    },
    {
      path : '/create-objective',
      element : <CreateObjective />,
    },
    {
      path : '/objective/:id',
      element : <SingleObjectives />,
    },
    {
      path : '/objective/createKeyResult',
      element : <CreateKeyResult />,
    },
  ])

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
  );
}

export default App;
