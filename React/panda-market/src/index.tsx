import ReactDOM from "react-dom/client";
import Main from "./Main";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Main />);
} else {
  console.error("Root element not found");
}
