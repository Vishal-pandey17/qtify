import React from "react";
import ReactDOM from "react-dom/client";
import styles from "../HomePage/HomePage.module.css";
import Section from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";

const HomePage = () => {
   const {data} = useOutletContext();
   const {topAlbums, newAlbums, songs, genres} = data;

    return (
        <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album"/>
            <Section title="New Albums" data={newAlbums} type="album"/>
            <Section 
            title="Songs"
            data={songs}
            filterSource={fetchFilters}
            type="song"
            />
        </div>
        </>
        
    )
}

export default HomePage;