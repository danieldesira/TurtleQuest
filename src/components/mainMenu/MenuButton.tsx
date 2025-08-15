interface Props {
  callback: () => void;
  text: string;
}

const MenuButton = ({ callback, text }: Props) => (
  <span className="text-primary text-5xl" role="button" onClick={callback}>
    {text}
  </span>
);

export default MenuButton;
