function Mycard() {
  const user = {
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Frontend developer who loves React and coffee.',
  };

  const skills = ['React', 'JavaScript', 'CSS'];

  return (
    <div className="card">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <a href="#">View Profile</a>

      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}

export default Mycard;


// function Aa() {
//   const a = {
//     a: 1,
//     b: 2,
//     c: 3,
//   }
//   const bb = [a,b,c]

//   return(
//     <div>
//       <h1>{a.a}</h1>
//       <h1>a.b</h1>
//       <ul>
//         {bb.map(b => <li key={b}>{b}</li>)}
//       </ul>

//     </div>
//   );
// }