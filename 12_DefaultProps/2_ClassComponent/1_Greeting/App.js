class App extends React.Component {
  render() 
  {
    return (<div>
      <Greetings who="Suraj" from="Kiran" />
      <Greetings who="Suraj"  />
      <Greetings  />
      </div>);
  }
}
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
