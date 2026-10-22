class Greetings extends React.Component {
  render() {
    this.props = {who:"everyone", job: "Developer", company: "Google" };
    return (
      <h1>
        Happy New Year To {this.props.who} From {this.props.company}
      </h1>
    );
  }
}
