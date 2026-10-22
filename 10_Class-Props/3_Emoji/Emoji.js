class Emoji extends React.Component {
    render() {
     let {e1,e2,e3}=this.props
     let result=e1===e2 && e2===e3
      return (
       <div>
        <span>{this.props.e1}</span>
        <span>{this.props.e2}</span>
        <span>{this.props.e3}</span>
        <p>Result:{result=== true ? "You win" : "You Lose"}</p>
       </div>
      );

  }
    }
  