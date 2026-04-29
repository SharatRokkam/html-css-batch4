import Controlled from "./Controlled";
import Uncontrolled from "./Uncontrolled";

function App() {
  function handleClick(e) {
    // alert("button clicked");
    console.log(e);
  }

  // return <button onClick={handleClick}>Click ME!</button>;
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    // <form onSubmit={handleSubmit}>
    //   <button type="submit">Submit</button>
    // </form>
    <>
      <Controlled />
      <Uncontrolled />
    </>
  );
}

export default App;
