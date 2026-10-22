class App extends React.Component{
    render()
    {
        return <Hello/>;
    }
  }
  let root=ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App/>);