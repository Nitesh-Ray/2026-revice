import ProfileCard from './ProfileCard';

function UserDashboard() {
    
  const users = [
    {
      id: 1,
      name: 'Alice Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      bio: 'UX Designer passionate about accessibility.',
      skills: ['Figma', 'React', 'User Research'],
    },
    {
      id: 2,
      name: 'Bob Williams',
      avatar: 'https://i.pravatar.cc/150?img=3',
      bio: 'Full stack developer and open source contributor.',
      skills: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 3,
      name: 'Carol Chen',
      avatar: 'https://i.pravatar.cc/150?img=9',
      bio: 'Mobile developer building cross-platform apps.',
      skills: ['React Native', 'Flutter', 'Firebase'],
    },
  ];

  return (
    <div>
      <h1>Team Dashboard</h1>
      <p>Total members: {users.length}</p>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {users.map(user => (
          <ProfileCard
            key={user.id}
            name={user.name}
            avatar={user.avatar}
            bio={user.bio}
            skills={user.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;