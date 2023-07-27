export const Square = ({ children, isSelected, updateBoard, index, color, hover}) => {
    const className = `square ${color} ${hover} ${isSelected ? `is-selected` : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }