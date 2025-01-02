import React, { useState } from "react";
import styles from "../Section/Section.module.css"; 
import { Card, CircularProgress } from '@mui/material';
import Carousel from "../Carousel/Carousel"

export default function Section(title, data, filterSource, type){
   const [carouselToggle, setcarouselToggle] = useState(true);
   

   const handleToggle = () =>{
      setcarouselToggle((prevState) => !prevState);
   }
   return(
    <>
      <div>
         <h3>{title}</h3>
         <h4 className={styles.toggleText} onClick={handleToggle}>
            {!carouselToggle ? "Collapse All" : "Show All"}
         </h4>
      </div>

      
      {/* {data.length === 0 ? (
        <CircularProgress/>
      ):( 
         <div className={styles.cardsWrapper}>
            {!carouselToggle ? (
                 <div className={styles.wrapper}>
                 {cardsToRender.map((ele) => {
                  <Card data={ele} type={type}/>
               })}
          </div>
      ): (
         <Carousel
          data={cardsToRender}
          renderComponent={(data) => <Card data={data} type={type} />}
         />
      )} 
      </div>
      )} */} 
    </>
   );
} 