export default function TabButton({ children }) {
  function handleClick(params) {
    console.log("Hello World");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
