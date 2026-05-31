import Mycard from './Mycard';
import Button from './Button';
import TodoList from './TodoList';
import ProductList from './ProductList';

function App() {

      const handleClick = () => alert('Button clicked!');

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="card-container">
        <Mycard 
          name="Jane Doe"
          avatar="https://i.pravatar.cc/150?img=5"
          bio="Frontend developer who loves React."
          skills={['React', 'JavaScript', 'CSS']}
        />
        <Mycard 
          name="John Smith"
          avatar="https://i.pravatar.cc/150?img=8"
          bio="Backend developer exploring frontend."
          skills={['Node.js', 'Python', 'MongoDB']}
        />
      </div>

      <div>
      <Button text="Primary" color="blue" onClick={handleClick} />
      <Button text="Danger" color="red" onClick={() => alert('Deleted!')} />
      <Button text="Success" color="green" onClick={() => console.log('Saved!')} />
      </div>
      

      <h1>rendering list--------------------------------------</h1>
        <TodoList />

        <ProductList />

    </div>
  );
}

export default App