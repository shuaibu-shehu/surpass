

interface SurpassDiamondIconProps{
    height?: number;
    width?: number;
    opacity?: number;
}

const SurpassDiamondIcon:React.FC<SurpassDiamondIconProps>=({height, width, opacity})=>{
  return (
    <svg width={width || "26"} height={height || "18"} viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: opacity || 1}}>
        <path d="M20.144 27.6271C19.3486 28.7751 17.6514 28.7751 16.856 27.6271L5.08629 10.639C4.16734 9.31259 5.11665 7.5 6.73029 7.5H30.2697C31.8834 7.5 32.8327 9.31259 31.9137 10.639L20.144 27.6271Z" fill="#BDB7B7"/>
        <path d="M4.5 9.5C5.08173 6.88221 7.42776 5.03707 10.1089 5.08863L27.3777 5.42072C29.8105 5.46751 31.9098 7.1394 32.5 9.5H4.5Z" fill="#F5ECEC"/>
    </svg>
  );
}

export default SurpassDiamondIcon;