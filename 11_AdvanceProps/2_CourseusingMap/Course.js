class Course extends React.Component {
    render() {
    let {Course_Name,Titles}=this.props;
    let arr=   <ul>
    {Titles.map((x)=>
      <li>{x}</li>
    )}
  </ul>
     return (
       <div> 
        
        <p>Course Name:{Course_Name}</p>
        <div> 
          Titles:{arr}</div>
        </div>
      );
    }
  }
 