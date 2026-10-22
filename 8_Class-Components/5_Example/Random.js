
function getRandomNumber() {
  let arr = [10, 5, 7, 6, 34, 89, 65, 44, 58, 90];
  let numberIndex = Math.floor(Math.random() * arr.length);
  return arr[numberIndex];


}
class App extends React.Component{
  render(){
  let num = getRandomNumber();
  let myDiv = (
    <div id="show">
      <h1>Number is {num}</h1>
      <small> {num=== 6 ? <div>
      <h2>Congratulation !! You won</h2><img id="boy" src="/0_Media/boy.jpg"/></div> :
       <div> <h2>Better Luck Next Time</h2> <img src="/0_Media/download.jpg"/></div>}</small>
    </div>
  );
  return myDiv;
}
}



