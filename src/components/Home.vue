<template>
    <div class="container-fluid">
      <section class="homeSection">
        <h1 class="lead mb-3">Hello, I'm Reece Simon</h1>
        <br>
        <h2 class="">Intern Full Stack Web Developer</h2>
      </section>
    </div>
  </template>
  
  <script>
  export default{}
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
  
  .container-fluid {
    min-height: 100vh;
    background-image:
  linear-gradient(#000000da, #000000b7),
  url('../assets/pexels-abhilash-sahoo-4295841.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-family: 'Lilita One', cursive;
  }
  
  
  .homeSection{
    border-radius: 1rem;
    padding: 0.5em;
  }
  
  h1, h2{
    text-transform: uppercase;
    background: -webkit-linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .homeSection h1{
    font-size: 6em;
    color: #ffffff;
    font-weight: bold;
  }
  
  .customLink{
    font-weight: bold;
    position: relative;
    text-decoration: none;
    color: #a7bcb9;
  }
  
  .proceedBtn{
    color: #a7bcb9;
    font-weight: bold;
    border: 1px solid #a7bcb9;
  }
  
  .proceedBtn:hover{
    color: #000;
    border: 1px solid #a7bcb9;
    background-color: #a7bcb9;
  }
  
  .customLink::after{
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    top: 110%;
    transition: all 0.5s ease;
    background-color: #a7bcb9;
  }
  
  .customLink:hover::after{
    width: 100%;
  }
  </style>