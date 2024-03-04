import { ThemeProvider } from "@mui/material";

import theme from "@CardCraft/style/theme";
import Sidebar from "@CardCraft/components/Sidebar";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
