// pages/index.js

const myVar = process.env.NEXT_PUBLIC_MY_VARIABLE;

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>The value of the environment variable is: {myVar}</p>
    </div>
  );
}
