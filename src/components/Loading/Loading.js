import "../Loading/Loading.scss";

function LoadingPage() {
  return (
    <div className="loader">
      <div className="loader__container"></div>
      <h2 className="loader__text"> Chefs loading. Please wait ....</h2>
    </div>
  );
}

export default LoadingPage;