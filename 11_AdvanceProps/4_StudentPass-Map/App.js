class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Student Details</h1>
          <Student
            name="Varun"
            age={24}
            subjects={["Phy", "Chem", "Maths"]}
            marks={[50, 60, 70]}
          />
        </div>
      );
    }
  }
  let root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
  