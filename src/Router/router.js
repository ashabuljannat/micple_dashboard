import { createBrowserRouter } from "react-router-dom";
import Filter from "../Components/Filter/Filter";
import X from "../Components/raf/X";
import AllUser from "../Components/User/AllUser";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AllUser />,
  },
  {
    path: "/x",
    element: <X />,
  },
  {
    path: "/filter",
    element: <Filter />,
  }

]);

export default router;
