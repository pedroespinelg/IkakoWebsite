import InnerText from "./components/InnerText";
import MenuItem from "./components/MenuItem";
import FormInput from "./components/FormInput";

function App() {
  return (
    <div className="App">
      <InnerText name="Pedro" message="You are the best" />
      <InnerText name="Maria" message="You are the greatest" />
      <InnerText name="Luis" message="You rock so much" />
      <MenuItem />
      <FormInput />
    </div>
  );
}

export default App;
