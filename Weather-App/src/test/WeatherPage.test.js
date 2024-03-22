import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../page/WeatherPage/index";

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Weather Forecast")).toBeInTheDocument();
  });
});
