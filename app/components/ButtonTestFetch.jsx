"use client";

export default function ButtonTestFetch() {
  const clickFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <button
      className="w-20 h-20 bg-blue-200 text-white font-bold text-center p-4"
      onClick={(e) => clickFetch()}
    >
      Fetch!
    </button>
  );
}
