import { createBrowserRouter } from "react-router-dom";
import Filter from "../Components/Filter/Filter";
import X from "../Components/raf/X";
import AllUser from "../Components/User/AllUser";
import ShowData from "../Components/User/ShowData";


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
    path: "/show",
    element: <ShowData />,
  },
  {
    path: "/filter",
    element: <Filter />,
  }

]);

export default router;
