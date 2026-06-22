// // SlowChild.jsx – a component that logs every render
// function SlowChild({ name, count }) {
//   console.log('SlowChild rendered:', name);
//   return (
//     <div className="p-4 border rounded bg-white dark:bg-gray-700">
//       <p><strong>{name}</strong></p>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// export default SlowChild; // not memoised yet


import { memo } from 'react';

function SlowChild({ name, count }) {
  console.log('SlowChild rendered:', name);
  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-700">
      <p><strong>{name}</strong></p>
      <p>Count: {count}</p>
    </div>
  );
}

export default memo(SlowChild);