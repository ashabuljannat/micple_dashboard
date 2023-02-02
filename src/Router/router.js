import { createBrowserRouter } from "react-router-dom";
import { DownloadPdf } from "../Components/Download/DownloadPdf";
import TableX from "../Components/raf/TableX2";
import X from "../Components/raf/X";
import AllUser from "../Components/User/AllUser";
import Post from "../page/Post/Post";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AllUser />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/x",
    element: <X />,
  },
  {
    path: "/table",
    element: <TableX />,
  },
  {
    path: "/download",
    element: <DownloadPdf />,
  }

]);

export default router;
