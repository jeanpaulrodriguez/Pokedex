import { createTheme } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom theme values
export const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {},
    }
  })