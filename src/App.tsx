import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage, Home } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
], { basename: '/osi'});


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
