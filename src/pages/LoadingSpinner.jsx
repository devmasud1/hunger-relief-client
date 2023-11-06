const LoadingSpinner = () => {
  return (
    <div className="h-[30vh] flex justify-center items-center">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-sm"></span>
    </div>
  );
};
export default LoadingSpinner;
