import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { MobileLayout } from "../components/Layout/MobileLayout";
import Menu from "../components/Menu";
import Cart from "../components/Cart";

// import data from "../utils/data.js";
import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const Home: NextPage = () => {
  const { CartState, CartDispatch } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Advent of CSS - eCommerce component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MobileLayout>
          <Menu />
        </MobileLayout>

        <MobileLayout>
          <Cart />
        </MobileLayout>
      </main>
    </>
  );
};

export default Home;
