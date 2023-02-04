<template>
  <!-- Nav-Bar -->
    <nav class="navbar navbar-dark navigation-bar d-flex align-items-center justify-content-end w-100">
        <button
          class="navbar-toggler mb-4 me-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/resume">Resume</router-link>
              <!-- <router-link to="/projects">Projects</router-link> -->
              <router-link to="/testimonial">Testimonials</router-link>
              <router-link to="/contact"> Contact </router-link>
            </ul>
          </div>
        </div>
  
    </nav>
  
  <div class="hello"></div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap');

.navigation-bar {
  height: 10vh;
  position: fixed;
  z-index: 10;
}
h3 {
  margin: 40px 0 0;
}
ul {
  margin-top: 3rem;
  list-style-type: none;
  width: 100%;
}
li {
  display: inline-block;
}



.first-color { 
	background: #5dacbd; 
}
	
.second-color { 
	background: #24527a; 
}

.third-color { 
	background: #a7bcb9; 
}


a {
  color: #bbb8b8;
  font-size: 25px;
  font-weight: 800;
  text-decoration: none;
  padding-left: 2rem;
  height: 5rem;
  display: flex;
  align-items: center;
}

a:hover {
  background: #bbb8b8;
  color: #383838;
  font-size: 25px;
}

a:active{
  color: #fff;
  font-size: 25px;
}

.logo {
  font-family: 'Londrina Shadow', cursive;
}
</style>
