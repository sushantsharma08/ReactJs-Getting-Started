import Todo from "./components/Todo";
import Modal from "./components/Modal";
function App() {
  return (
  <div>
    <h1>TODO</h1>
    <Todo titleName="learn react"/>
    <Todo titleName="make project"/>
    <Todo titleName="upload project"/>
  </div>
  );
}

export default App;
