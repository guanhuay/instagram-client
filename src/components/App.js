import React from "react";

// Redux
import { PersistGate } from "redux-persist/integration/react";
import {persistor, store} from "../store/configureStore";
import {Provider} from "react-redux";

// Theme
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import EntryPoint from "./EntryPoint";

const theme = createMuiTheme({
    overrides: {},
    palette: {
        primary: { main: "#009688", light: "#B2DFDB", dark: "#00796B" },
        secondary: { main: "#F1B929" }
    }
});

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MuiThemeProvider theme={theme}>
                    <EntryPoint/>
                </MuiThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default App;
