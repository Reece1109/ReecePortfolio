<template>
  <div>
    <div class="toggle" @click="toggleMenu">
      <a><i class="fa-solid fa-bars fa-2x" style="color: #ffffff;"></i></a>
    </div>
    <div class="logo">
      <img src="https://i.postimg.cc/PfP9nnyt/Ruan-Sousa-simple-logo-that-contains-the-letters-R-and-S-5935e7f3-2078-4280-ae7e-e1e6565e3fb9.png" alt="Logo">
    </div>
    <div class="menu" :class="{ active: isMenuActive }">
      <ul>
        <li><router-link to="/" @click="hideMenu">Home</router-link></li>
        <li><router-link to="/about" @click="hideMenu">About</router-link></li>
        <li><router-link to="/resume" @click="hideMenu">Resume</router-link></li>
        <li><router-link to="/projects" @click="hideMenu">Projects</router-link></li>
        <li><router-link to="/testimonial" @click="hideMenu">Testimonials</router-link></li>
        <li><router-link to="/contact" @click="hideMenu">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    hideMenu() {
      this.isMenuActive = false;
    },
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

body {
  margin: 0;
  padding: 0;
  background: #FFFC85;
}

.toggle {
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 2;
}

.toggle a {
  text-decoration: none;
  color: #262626;
  font-size: 24px;
  cursor: pointer;
}

.logo {
  position: fixed;
  top: 20px;
  right: auto;
  left: 80px; /* adjust as needed */
  z-index: 2;
}

.logo img {
  height: 70px; /* adjust as needed */
  border-radius: 16px;
}

.menu {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: 1;
  transition: 0.5s;
}

ul {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

ul li {
  list-style: none;
}

ul li a {
  padding: 10px;
  display: inline-block;
  font-family: verdana;
  font-size: 2em;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  font-family: 'Lilita One', cursive;
}

ul li a:hover {
  color: #505050;
}

.menu.active {
  left: 0;
  overflow: auto;
}
</style>