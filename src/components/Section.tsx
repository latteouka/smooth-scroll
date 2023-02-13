import { styled } from "@stitches/react";

export const Section = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "transparent",
  fontSize: "10rem",

  variants: {
    color: {
      pink: {
        backgroundColor: "Pink",
      },
      blue: {
        backgroundColor: "RoyalBlue",
      },
      green: {
        backgroundColor: "LimeGreen",
      },
      yellow: {
        backgroundColor: "Yellow",
      },
      orange: {
        backgroundColor: "Orange",
      },
    },
  },
});
