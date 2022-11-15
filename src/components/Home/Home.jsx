import React from 'react'
import Header from '../header/Header';
import NavBar from '../navbar/NavBar';
import Posts from "../Posts/Posts";
import Contact from "../contact/Contact";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm]=useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://api.npoint.io/f89acb9ee900ca95b8dc");
      setPosts(res.data.slice(0,50));
    };
    fetchPosts();
  },[]);
  return (
    <>
    
    <NavBar/>
    <Header setSearchTerm={setSearchTerm}/>
    <Posts posts={posts} searchTerm={searchTerm}/>
    <Contact/>
    </>
  )
}
