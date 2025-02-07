type ButtonProps = {
  name:string;
  onClick: ()=>void
}
// Button design for the web site
const Button = (prop:ButtonProps) => {
  return (
    <button className="rounded px-1 w-auto md:text-lg" onClick={prop.onClick}>
      {prop.name}
    </button>
  );
};

export default Button;
