import "./index.css";
const Gallery = (props) => {
  console.log(props);
  return (
    <div className="gallery">
      <h1>{props.title}</h1>
      <img src={props.objectImg} alt={props.title} />
      <p>{props.artist}</p>
    </div>
  );
};
export default Gallery;
