import logo from './logo.svg';
import './App.css';
import { ToDoForm, ToDoHeader, ToDoList } from "./components"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ToDoHeader />
                <ToDoList />
                <ToDoForm />
            </header>
        </div>
    );
}

export default App;
