// After (dynamic with props):

function ProfileCard({ name, avatar, bio, skills }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>

    </div>
  );
}

export default ProfileCard;