import {render} from "react-dom";
import {App} from "./app";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/theme-provider";

const rootContainer = document.getElementById("root");

render(
    <BrowserRouter>
        <ThemeProvider><App /></ThemeProvider>
    </BrowserRouter>, rootContainer)
