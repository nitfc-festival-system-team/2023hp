import { extendTheme } from "@chakra-ui/react";

//全体のstyleを変えたい時はここに書く
export const globalTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
      },
    },
  },
});
