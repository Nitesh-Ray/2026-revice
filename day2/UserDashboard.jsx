import ProfileCard from "./ProfileCard";

function UserDashboard() {
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      bio: "UX Designer passionate about accessibility.",
      skills: ["Figma", "React", "User Research"],
    },
    {
      id: 2,
      name: "Bob Williams",
      avatar: "https://i.pravatar.cc/150?img=3",
      bio: "Full stack developer and open source contributor.",
      skills: ["React", "Node.js", "PostgreSQL"],
    },
    {
      id: 3,
      name: "Carol Chen",
      avatar: "https://i.pravatar.cc/150?img=9",
      bio: "Mobile developer building cross-platform apps.",
      skills: ["React Native", "Flutter", "Firebase"],
    },
  ];

  return (
    <div>
      <h1>Team Dashboard</h1>
      <p>Total members: {users.length}</p>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            avatar={user.avatar}
            bio={user.bio}
            skills={user.skills}
          />
        ))}
        // Inside UserDashboard, below the cards:
        <div
          style={{ marginTop: "30px", padding: "20px", background: "#f0f0f0" }}
        >
          <h3>Team Stats</h3>
          <p>
            Total Skills:{" "}
            {users.reduce((total, user) => total + user.skills.length, 0)}
          </p>
          <p>
            Average Skills per Person:{" "}
            {(
              users.reduce((total, user) => total + user.skills.length, 0) /
              users.length
            ).toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
