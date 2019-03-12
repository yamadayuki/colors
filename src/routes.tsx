import React from "react";
import UniversalRouter from "universal-router";
import App from "./App";

const routes = {
  path: "",
  action: () => <App message="Using universal router" />,
};

export const router = new UniversalRouter(routes, { baseUrl: "" });
