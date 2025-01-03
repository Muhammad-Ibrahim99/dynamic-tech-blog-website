import AuthorCard from "@/components/AuthorCard";
import Feature from "@/components/Feature";
import Mega from "@/components/Mega";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Home() {
  return (
    <div>

      <title>Dynamic Blog Website</title>

      <NavBar />
      <AuthorCard />
      <Feature />
      <Mega />
      
    </div>
  );
}

