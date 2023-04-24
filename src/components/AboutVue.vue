<template>
  <div class="about-page text-center pe-2">
    <h1 class="display-3 my-3 text-white"> About</h1> 
    <div class="container row">
      <figure class="col-lg-6 mb-3 mb-lg-0">
        <img class="profile-pic img-fluid rounded" src="https://i.postimg.cc/wxPMqspv/DSC-3510.jpg" alt="Profile Picture">
      </figure>
      <div class="col-lg-6">
        <p>My name is Reece Simon. As a proactive and ambitious individual, I am deeply passionate about the exciting and constantly evolving field of software development. I am always seeking out new opportunities to learn and grow, and I believe that my growth mindset is one of my strongest assets. Throughout my career, I have worked tirelessly to cultivate a robust set of professional qualities that make me a valuable addition to any team. These qualities include a strong work ethic, a deep sense of perseverance, and an unwavering drive for success. I believe that these traits are essential to achieving success in any field, and I am committed to leveraging them to achieve my goals. Overall, I am deeply committed to my work and to my ongoing development as a software developer. I believe that my passion, my drive, and my commitment to excellence make me a valuable asset to any team, and I am excited to continue exploring new opportunities to grow and thrive in this exciting field.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {  } from 'vue'
export default {
  
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ysabeau:wght@200&display=swap');
  
.about-page{
color: #ffffff;
min-height: 100vh;
background-image:
  linear-gradient(#000000da, #000000b7),
  url('../assets/pexels-abhilash-sahoo-4295841.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: bottom;
overflow-x: hidden;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
font-family: 'Ysabeau', sans-serif;
}

h1{
  font-family: 'Lilita One', cursive;
}
.profile-pic{
width: 380px; 
}
p{
  font-family: 'Lilita One', cursive;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 50px;
  border-radius: 5px;
  max-width: 800px;
  letter-spacing: 1px;
  font-size: 18px;
}
</style>
