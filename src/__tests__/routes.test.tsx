import React from "react";
import App from "../App";
import { router } from "../routes";

describe("routes.tsx", () => {
  describe("router", () => {
    it("should return App component", async () => {
      const component = await router.resolve("");
      expect(component).toEqual(<App message="Using universal router" />);
    });

    it("throws an error when the router receives unexpected route", async () => {
      await expect(router.resolve("/foo")).rejects.toThrow();
    });
  });
});
