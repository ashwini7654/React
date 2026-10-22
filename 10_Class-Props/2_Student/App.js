class App extends React.Component {
    render() {
    return( <Student
      name="Ashwini"
      age={20} 
      subjects={["Phy", "Math", "Chem"]} 
      marks={[50,60,70]}
      ispass={true}
      address={{City:"bhopal",Pincode:462041 }}
     /> );
  }
  }
  let root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
