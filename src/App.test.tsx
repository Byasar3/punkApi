import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("should render the NavBar", () => {
  // arrange
  render(<App />);

  // act
  const navBar = screen.getByTestId("navbar");

  // assert
  expect(navBar).toBeInTheDocument();
});

it("should render the Main component", async () => {
  // Arrange
  render(<App />);

  // Act
  const mainComponent = screen.getByTestId("main-body");

  // Assert
  expect(mainComponent).toBeInTheDocument();
});

it("renders beers", async () => {
  // Arrange
  render(<App />);

  // Act
  // Waiting for beers to be fetched and rendered
  await screen.findByText("Buzz");
  await screen.findByText("Trashy Blonde");

  // Assert
  expect(screen.getByText("Buzz")).toBeInTheDocument();
  expect(screen.getByText("Trashy Blonde")).toBeInTheDocument();
});

it("renders filter components", () => {
  // arrange
  render(<App />);

  // act
  const filterNameComponent = screen.getByLabelText("Search by name");

  // assert
  expect(filterNameComponent).toBeInTheDocument();
});

it("filters beers by name", async () => {
  // Arrange
  render(<App />);

  // Act
  const filterNameComponent = screen.getByLabelText("Search by name");
  await userEvent.type(filterNameComponent, "buzz");

  // Wait for the filtered beer to be rendered
  await screen.findByText("Buzz");

  // Assert
  expect(screen.queryByText("Trashy Blonde")).not.toBeInTheDocument();
});

it("filters beers by name with partial search", async () => {
  // Arrange
  render(<App />);

  // Act
  const filterNameComponent = screen.getByLabelText("Search by name");
  await userEvent.type(filterNameComponent, "bu");

  // Wait for the filtered beer to be rendered
  await screen.findByText("Buzz");

  // Assert
  expect(screen.queryByText("Trashy Blonde")).not.toBeInTheDocument();
});

it("filters beers by ABV content", async () => {
  // Arrange
  render(<App />);

  // Act
  const filterAbvComponent = screen.getByLabelText("High Alcohol");
  await userEvent.click(filterAbvComponent);

  // Wait for the filtered beer to be rendered
  await screen.findByText("Pilsen Lager");

  // Assert
  expect(screen.queryByText("Buzz")).not.toBeInTheDocument();
});

it("filters beers by classic range", async () => {
  // Arrange
  render(<App />);

  // Act
  const filterClassicRangeComponent = screen.getByLabelText("Classic Range");
  await userEvent.click(filterClassicRangeComponent);

  // Wait for the filtered beer to be rendered
  await screen.findByText("Buzz");

  // Assert
  expect(screen.queryByText("Skull Candy")).not.toBeInTheDocument();
});

it("filters beers by high acidity", async () => {
  // Arrange
  render(<App />);

  // Act
  const filterHighAcidityComponent = screen.getByLabelText("High Acidity");
  await userEvent.click(filterHighAcidityComponent);

  // Wait for the filtered beer to be rendered
  await screen.findByText("Berliner Weisse With Yuzu - B-Sides");

  // Assert
  expect(screen.queryByText("Buzz")).not.toBeInTheDocument();
});

it("filters beers by abv and clasic range", async () => {
  // Arrange
  render(<App />);

  // Act
  const filterAbvComponent = screen.getByLabelText("High Alcohol");
  await userEvent.click(filterAbvComponent);
  const filterClassicRangeComponent = screen.getByLabelText("Classic Range");
  await userEvent.click(filterClassicRangeComponent);

  // Wait for the filtered beer to be rendered
  await screen.findByText("Devine Rebel (w/ Mikkeller)");

  // Assert
  expect(screen.queryByText("Buzz")).not.toBeInTheDocument();
});

