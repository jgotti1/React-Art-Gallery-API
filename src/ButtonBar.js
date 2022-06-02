const ButtonBar = (props) => {
  return (
    <div>
      <div>
        <button value={-5} onClick={props.handleIterate}>
          Back 5
        </button>
        <button value={-1} onClick={props.handleIterate}>
          Back
        </button>
        <button value={1} onClick={props.handleIterate}>
          Next
        </button>
        <button value={5} onClick={props.handleIterate}>
          Skip 5
        </button>
      </div>
    </div>
  );
};
export default ButtonBar;
