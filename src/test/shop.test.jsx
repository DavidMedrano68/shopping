import { render, screen } from "@testing-library/react";
import ShopProvider from "../reducer/reducer";
import { root } from "../router/router";
import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
describe("<Shop/>", () => {
  beforeEach(() => {
    render(
      <ShopProvider>
        <RouterProvider router={root}></RouterProvider>
      </ShopProvider>
    );
  });
  describe("home page loads", () => {
    it("home page anchor in dom ", () => {
      expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
    });
  });
  describe("redirects to shop", () => {
    it("navigation to shop in dom", async () => {
      const user = userEvent.setup();
      const shopLink = screen.getByRole("link", { name: "Shop" });
      await user.click(shopLink);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
  });

  describe("redirects to product page", () => {
    it("navigation to productPage", async () => {
      const user = userEvent.setup();
      const shopLink = screen.getByRole("link", { name: "Shop" });
      await user.click(shopLink);
      const helmetLink = screen.getByAltText(/bronze full helm/i);
      await user.click(helmetLink);
      expect(
        screen.getByRole("button", { name: "Add To Cart" })
      ).toBeInTheDocument();
    });
  });

  describe("Adds item to cart and reflects on total", () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      const shopLink = screen.getByRole("link", { name: "Shop" });
      await user.click(shopLink);
      const helmetLink = screen.getByAltText(/bronze full helm/i);
      await user.click(helmetLink);
      const addCartBtn = screen.getByRole("button", { name: "Add To Cart" });
      const cartBtn = screen.getByRole("button", { name: "Checkout" });
      await user.click(addCartBtn);
      await user.click(cartBtn);
    });
    describe("check total", () => {
      it("total should be 35", () => {
        expect(screen.getByText(/total: \$35/i)).toBeInTheDocument();
      });
    });
    describe("add more items", () => {
      it("total should be 70", async () => {
        const user = userEvent.setup();
        const plusBtn = screen.getByRole("button", { name: "+" });
        await user.click(plusBtn);
        expect(screen.getByText(/total: \$70/i)).toBeInTheDocument();
      });
    });
    describe("delete items in cart", () => {
      it("should show no items in cart", async () => {
        const user = userEvent.setup();
        const deleteBtn = screen.getByTitle(/deleteBtn/i);
        await user.click(deleteBtn);
        expect(screen.getByText(/no items in cart/i)).toBeInTheDocument();
      });
    });
  });
});
