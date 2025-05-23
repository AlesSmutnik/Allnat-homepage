import styles from '../styles/Button.module.scss';
import React from 'react';


interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({label, onClick }) => {
  return (
    <div className= {styles.btnBox}>
    <button
    onClick={onClick}
     className={`${styles.button} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300`}
     >
      {label}
     </button>
    </div>
  
  );
};
export default Button;

