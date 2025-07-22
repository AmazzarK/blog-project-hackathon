import About from "./AboutUsPage.jsx";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
      }}
      className="min-h-screen bg-gray-100 p-8 font-sans text-gray-800"
    >
      <h1 class="text-4xl font-bold text-center mb-10 font-heading">
        Welcome to My Blog!
      </h1>
      <About />
    </div>
  );
}

export default App;
