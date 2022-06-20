import './App.css';
import Header from './component/Header/index'
import List from './component/List';
import Footer from './component/Footer';
function App() {
  return (
    <div className='todo-container'>
        <div className="todo-wrap">
            <Header/>
            <List/>
            <Footer/>
        </div>
    </div>
  );
}
export default App;
