import './App.css';
import AddTaskForm from '../TaskForm/TaskForm';
import TaskDisplay from '../TaskTable/TaskTable';

function App() {

  return (
    <>
      <header>
        <h1>ToDo список</h1>
      </header>
      <main>
        <section>
          <h2>Добавить задачу</h2>
          <AddTaskForm />
        </section>
        <section>
          <h2>Все задачи</h2>
          <TaskDisplay />
        </section>
      </main>
    </>
  );
}

export default App;
