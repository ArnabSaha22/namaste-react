import { render } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server";

//All the test cases below look same but they are all testing different portions of the code.

test("Logo should load on rendering Header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const logo = header.getAllByTestId("logo"); //This retuns an  array of elements which have id as "logo" along with all it's properties and attributes
  console.log(logo); //To get only one element we can use getByTestId()

  //Testing whether the logo is loading or not.
  expect(logo[0].src).toBe("http://localhost/dummy.png"); //Asserting our Logo
});

//Testing the Cart items to be 0

test("Cart should have 0 items", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0 items ");
});
