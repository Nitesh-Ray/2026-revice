import ProfileCard from "./ProfileCard";
import Button from "./Button";
import TodoList from "./TodoList";
import ProductList from "./ProductList";
import UserDashboard from "./UserDashboard";
import CommentList from './CommentList';

function App() {
  const handleClick = () => alert("Button clicked!");
  const exampleComments = [{ id:1, author:'nit', text:'hello, i like it', likes:5 }];
  return (
    <div className="app">
      <h1>User Profiles------------------------------</h1>
      <div className="card-container">
        <ProfileCard
          name="Jane Doe"
          avatar="https://i.pravatar.cc/150?img=5"
          bio="Frontend developer who loves React."
          skills={["React", "JavaScript", "CSS"]}
        />
        <ProfileCard
          name="John Smith"
          avatar="https://i.pravatar.cc/150?img=8"
          bio="Backend developer exploring frontend."
          skills={["Node.js", "Python", "MongoDB"]}
        />
      </div>

      <h1>button + card inside it-------------------------------------</h1>

      <div>
        <Button text="Primary" color="blue" onClick={handleClick} />
        <Button text="Danger" color="red" onClick={() => alert("Deleted!")} />
        <Button
          text="Success"
          color="green"
          onClick={() => console.log("Saved!")}
        />
      </div>

      <h1>rendering list--------------------------------------</h1>
      <TodoList />

      <h1>ProductList--------------------------------------</h1>

      <ProductList />

      <h1>UserDashboard--------------------------------------</h1>

      <UserDashboard />

      <h1>comments------------------------------------------</h1>

      <  comments={exampleComments}/>
    </div>
  );
}

export default App;
