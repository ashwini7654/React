class Course extends React.Component {
    render() {
    let {Course_Name,Titles}=this.props;
    let arr=[];
     return (
       <div> 
        
        <p>Course Name:{Course_Name}</p>
        <div> 
          Titles:
          <ul>
            {Titles.map((x)=>
              <li>{x}</li>
            )}
          </ul>
            
            </div>
      
        </div>
      );
    }
  }
 