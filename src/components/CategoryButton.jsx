import { useState } from 'react';

export default function CategoryButton({HoverBack,children,color,backColor}) {
  const [hover, setHover] = useState(false);
  const buttonStyle = {
    backgroundColor: hover ? HoverBack : backColor,
    color: color,
    padding: '15px 25px',
    borderRadius: '10px',
    border:"none",
    fontWeight: 700,
    fontSize:'18px'
  };
  return (
    <button className='category-button' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={buttonStyle}>
        {children}
    </button>
  )
}