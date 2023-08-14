export const Square = ({
  children,
  isSelected,
  updateBoard,
  index,
  color,
  hover,
  turn,
}) => {
  const className = `square ${color} ${hover} ${
    isSelected ? `is-selected ${turn}` : ""
  }`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
