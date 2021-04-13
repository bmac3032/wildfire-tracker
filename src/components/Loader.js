const spinner = "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="loading..." />
      <h1>Fetching Data...</h1>
    </div>
  );
};

export default Loader;
