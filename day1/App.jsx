import Hello from './Hello';
import Mycard from './Mycard';


function App() {
  return (
    <div>
      <h1>My First App</h1>
      <Hello />
      <Hello />
      <p>Today is {new Date().toLocaleDateString()}</p>
      <img src="https://via.placeholder.com/100" alt="placeholder" />


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Mycard />
      </div>
    </div>
  );
}
export default App
