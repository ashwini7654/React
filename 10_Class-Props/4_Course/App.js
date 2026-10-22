class App extends React.Component {
    render() {
    return( 
        <div>
             <h1>Course details</h1>
    <Course

     Course_Name="Java"
     Titles={["Java SE","Java EE" ,"Android"]}/>
    <Course Course_Name="Front End Development"
     Titles={["HTML","CSS" ,"Java Script","React Js"]} />
        </div>
       
      
      );
  }
  }
  let root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
