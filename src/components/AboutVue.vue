<template>
  <div class="about-page text-center pe-2">
    <h1 class="display-5 fw-bold mb-5"> About Me</h1> 
    <div class="row">
      <figure class="col-6">
        <img class="profile-pic" src="https://i.postimg.cc/436n23kr/fb-img-1667475337493.jpg" alt="Profile Picture">
      </figure>
      <div class="col-6">
        <p class="lead">My name is Reece Simon and I am a open-minded, goal driven and an aspiring Developer.
          I am always looking for new opportunities to grow and acquire new skills and tools. 
          I see myself as a asset to any workspace because of my work ethic, perseverance and drive for success .
          I am really interested in the Cyber Security part of coding. As I am all about safeguarding and protecting privileged information and theft.</p>
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
.about-page{
color: #a7bcb9;
min-height: 100vh;
background-image:
linear-gradient(#000000da,#000000be),
url('../assets/bfa2d1954f88e09c418f8c40161162f8.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: bottom;
overflow-x: hidden;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
}
.profile-pic{
max-width: 300px; 
border-radius: 1rem; 
}
p{
  font-weight: 300;
}
</style>
