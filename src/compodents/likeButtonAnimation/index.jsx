import React,{useState} from 'react';

import './likeButtonAnimation.css'

function Index(props) {
    const [isActive, setIsActive] = useState(false);
    const onClickTab1 = () => {
        setIsActive((s) => !s);
      };
    return (
        <div>
            <TabItem 
                onClick ={onClickTab1}
                isActive={isActive} 
            />
        </div>
    );
}

export default Index;

const TabItem = ({ isActive , onClick}) => {
    return ( 
        <div onClick={onClick} className={`tab d-flex justify-content-center align-items-center ${isActive ? 'tab--action' : ''}`}>
        
            <i className="fa-solid fa-heart"></i>

            <span>Like</span>
        </div>
    )
  }
