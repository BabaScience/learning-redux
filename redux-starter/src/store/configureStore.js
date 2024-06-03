import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

//  middleware: ["logger"],
import logger from "./middleware/logger";

export default function() {
  return configureStore({
    reducer,
    middleware: [logger],
  });
}


