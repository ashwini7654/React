class Greetings extends React.Component {
  render() {
    let {who,from}=this.props
    return (
      <h1>
        Happy New Year To {who} From {from}
      </h1>
    );
  }
}
