import Home from "../application/Home";
import Article from "../application/Article";

export const routeConfig = [
  {
    path: "/",
    element: <Home />,
    children: [{ path: "article", element: <Article /> }],
  },
];
