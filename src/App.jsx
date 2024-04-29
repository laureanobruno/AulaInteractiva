import "./styles/App.css";
import Card from "./components/Card";
import ShowHide from "./components/ShowHide";
import subjects from "./data/subjects";

function App() {
  const cards = subjects.map((subject) => {
    return <Card title={subject.title} description={subject.description} />;
  });

  return (
    <div className="App">
      <h1>Proyecto Aula Interactiva</h1>
      <div className="container">{cards}</div>
      <ShowHide />
    </div>
  );
}

export default App;
