import Card from "./Card";

function Button({ text, color, onClick }) {
  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {text}
      </button>
      <Card title="My Card">
        <p>This is content inside the card!</p>
        <button>Click me</button>
      </Card>
    </div>
  );
}

export default Button;
