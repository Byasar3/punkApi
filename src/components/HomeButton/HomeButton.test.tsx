import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeButton from "./HomeButton";

it("should navigate to home page when home page button is clicked", async () => {
  // Arrange
  const { getByTestId } = render(<HomeButton />);

  // Act
  const homeButton = getByTestId("home-button");
  await userEvent.click(homeButton);

  // Assert
  expect(window.location.pathname).toBe("/");
});
