class Student extends React.Component {
    render() {
      let { name, age, subjects, marks } = this.props;
     let arr=[];
     let total=0;
     arr=marks.map((m)=>{
      total=+marks;
      return<li>{m}</li>
     });
      return (
        <div>
          <p>Name:{name}</p>
          <p>{name}'s Age:{age}</p>
          <div>
            Subjects:
            <ul>
              {subjects.map((s) => (
                <li>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            Marks:
            <ul>{arr} </ul>
          </div>
          <p>
            Total: <strong>{total}</strong>
          </p>
          <p>
            Result: <strong>{total >= 150 ? "Pass" : "Fail"}</strong>
          </p>
        </div>
      );
    }
  }
  