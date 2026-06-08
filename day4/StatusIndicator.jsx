function StatusIndicator({ status }) {
  // status can be 'loading', 'success', 'error', 'idle'

  const getMessage = () => {
    switch (status) {
      case 'loading': return <p>⏳ Loading...</p>;
      case 'success': return <p>✅ Data fetched successfully!</p>;
      case 'error':   return <p>❌ Something went wrong.</p>;
      default:        return <p>⚪ Idle</p>;
    }
  };

  return <div style={{ fontSize: '1.2rem' }}>{getMessage()}</div>;
}

export default StatusIndicator;