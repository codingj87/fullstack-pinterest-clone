import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import "styles/global.css";
// import "styles/tailwind.css";

ReactDOM.render(
  <Router>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </RecoilRoot>
  </Router>,
  document.getElementById("root")
);
