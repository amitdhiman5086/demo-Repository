import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./component/Body";
import Headers from "./component/Header";
import CommentAndNotes from "./component/CommentAndNotes";
import AddPerson from "./component/AddPerson";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Headers />
        <Body />
      </>
    ),
    children: [
      {
        path: "person/:dasId",
        element: <CommentAndNotes />,
      },
      {
        path: "addperson",
        element: <AddPerson />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
