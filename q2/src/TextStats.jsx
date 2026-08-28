function TextStats({ text }) {
  const characters = text.length;

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  return (
    <div>
      <h3>Text Statistics</h3>

      <p>Characters: {characters}</p>
      <p>Words: {words}</p>
    </div>
  );
}

export default TextStats;