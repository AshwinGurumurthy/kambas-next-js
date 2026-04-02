export default function Destructuring() {
  const person = { name: "John", age: 25 };
  const { name, age } = person;

  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;

  return (
    <div id="wd-destructuring">
      <h2>Destructuring</h2>

      <h3>Object Destructuring</h3>
      <pre>{`const { name, age } = { name: "John", age: 25 }`}</pre>
      <p>name = {name}</p>
      <p>age = {age}</p>

      <h3>Array Destructuring</h3>
      <pre>{`const [first, second, third] = ["one", "two", "three"]`}</pre>
      <p>first = {first}</p>
      <p>second = {second}</p>
      <p>third = {third}</p>
      <hr />
    </div>
  );
}
