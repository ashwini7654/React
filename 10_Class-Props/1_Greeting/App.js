class App extends React.Component {
  render() {
    return <Greetings who="Suraj" from="Kiran" />;
  }
}
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
