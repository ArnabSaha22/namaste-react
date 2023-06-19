import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../Mocks/dummyApiData";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA); // json returns a function because in the original code we have data.json()
    }, //We created our own dummy fetch.
  });
});

test("Shimmer should load on HomePage", async () => {
  const Shimmer = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    const resList = Shimmer.getByTestId("res-list");
    expect(resList.children.length).toBe(15);
    // expect(screen.getByTestId("search-btn"));
  });

  //const shimmer = Shimmer.getByTestId("shimmer");
  //expect(shimmer.children).toBeInTheDocument(); //This checks that Shimmer is actually there in the component or not.
  //console.log(shimmer);
});

test("Search for String(food) on Home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-input")));

  const input = body.getByTestId("search-input");
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.change(input, {
    target: {
      value: "Restaurant",
    },
  }); //gets triggered once there is a change on the input box

  fireEvent.click(searchBtn);
  const resList=body.getByTestId("res-list")
  expect(resList.children.length).toBe(4)

  //const searchBtn = body.getByTestId("search-btn");
  // console.log(searchBtn);
});
