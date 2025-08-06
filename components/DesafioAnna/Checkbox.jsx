export default function Checkbox(props) {
  return (
    <>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(eventos) => props.newValue(eventos.target.checked)}
        checked={props.checked}
      />
    </>
  );
}
