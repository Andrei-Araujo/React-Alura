import { Component, Fragment } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

//function App() {
class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Fomulário de cadastro</h1>
        <FormularioCadastro />
      </Fragment>
    );
  }
}

export default App;
