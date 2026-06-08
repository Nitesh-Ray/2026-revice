import {useState} from "react";

import StatusIndicator from "./StatusIndicator";
import WelcomeMessage from "./WelcomeMessage";
import StyledBox from "./StyledBox";
import NotificationList from "./NotificationBadge";
import UserCard from "./UserCard";
import TodoItem from "./TodoItem";

function App() {
  const [status, setStatus] = useState("idle");

  return (
    <div>
      <WelcomeMessage />
      {/* <StatusIndicator /> */}
      <div>
        <StatusIndicator status={status} />
        <button onClick={() => setStatus("loading")}>Load</button>
        <button onClick={() => setStatus("success")}>Success</button>
        <button onClick={() => setStatus("error")}>Error</button>
      </div>

      <StyledBox />

      <NotificationList />

      <div>
        <UserCard
          name="Alice"
          role="admin"
          avatar="https://i.pravatar.cc/150?img=1"
        />
        <UserCard
          name="Bob"
          role="member"
          avatar="https://i.pravatar.cc/150?img=3"
        />
      </div>

      <TodoItem />
    </div>
  );
}
export default App;
