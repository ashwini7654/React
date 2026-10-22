class Student extends React.Component {
    render() {
      let { city, pincode } = this.props.address;
   ;
      return (
       <div> <h1>
          student details
        </h1>
        <p>Name:{this.props.name}</p>
        <p>age:{this.props.age}</p>
        <p>Subject:{this.props.subjects.join(",")}</p>
        <p>Marks:{this.props.marks.join(",")}</p>
        <p>Pass:{String(this.props.Ispass)}</p>
        <p>City::{city}</p>
        <p>Pincode::{pincode}</p>
        </div>
      );
    }
  }
  