import Mycard from './Mycard';

function App() {
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
    </div>
  );
}

export default App