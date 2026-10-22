class Course extends React.Component {
    render() {
    let {Course_Name,Titles}=this.props;
    let arr=[];
    Titles.forEach((t)=>{
      arr.push(<li>{t}</li>);
    })
  
 
      return (
       <div> 
        
        <p>Course Name:{Course_Name}</p>
        <div> 
          {/* yaha pr div isliye lga h kyu ki ul ek singleton tag h toh koi para type tag ke andar nhi ayega */}
          Titles:
          <ul>
            {arr}
          </ul>
            
            </div>
      
        </div>
      );
    }
  }
  