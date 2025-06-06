const Card = (props) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-10 hover:shadow-xl transition duration-300 hover:bg-blue-100">
      <h2>Name: {props.name}</h2>
      <p>Role: {props.role}</p>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default Card;
