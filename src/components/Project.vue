<template>
  <section id="projects" class="container-fluid">
    <h3 class="display-3 text-white mt-5 mb-5">Projects</h3>
    <div class="container">
    </div>
    <div class="row px-5">
      <div class="col-md-4" v-for="project in projects" :key="project.name">
        <div class="card text-center w-75 p-2 px-3 m-auto mb-5">
          <img :src="project.image" :alt="project" loading="lazy">
          <div class="card-body mt-4">
            <h5 class="card-title">{{ project.title }}</h5>
            <a :href="project.gitHub" target="_blank" class="p-1 m-auto">GitHub</a>
            <a :href="project.hosting" target="_blank" class="p-1 m-auto">Hosting</a>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-for="projectss in projectVue" :key="projectss.name">
        <div class="card text-center w-75 m-auto mb-5">
          <img :src="projectss.image" :alt="projectss" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">{{ projectss.title }}</h5>
            <a :href="projectss.gitHub" target="_blank" class="p-1 m-auto">GitHub</a>
            <a :href="projectss.firebase" target="_blank" class="p-1 m-auto">Firebase</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Portfolio',
          image: 'https://i.postimg.cc/BnBckH1W/portfolio.png',
          gitHub: 'https://github.com/Reece1109/ReecePortfolio',
          hosting: 'https://reeceportfolio1.web.app/'
        },
        {
          title: 'To-Do List',
          image: 'https://i.postimg.cc/qqq3Xg00/clipboard.png',
          gitHub: "https://github.com/Reece1109/To-Do-List",
          hosting: "https://to-do-list-2023rs.netlify.app/"
        },
        {
          title: 'Sushi Restaurant',
          image: 'https://i.postimg.cc/0j25cgmK/sushi.png',
          gitHub: "https://github.com/Reece1109/Full-Stack-Project",
          hosting: "https://sushi-store-6d4e3.web.app/"
        },
        {
          title: 'Watch Ecommerce Website',
          image: 'https://i.postimg.cc/65g5CF2D/wristwatch.png',
          hosting: "https://dev-timeless-elegance.pantheonsite.io/"
        },
        {
          title: 'AirBnb Website',
          image: 'https://i.postimg.cc/FK2XYYhK/house.png',
          gitHub: "https://github.com/Reece1109/Capstone_Final.git",
          hosting: "https://capstone-bae47.firebaseapp.com/"
        },
        {
          title: 'BMI Calculator',
          image: 'https://i.postimg.cc/XvdBQw9V/bmi.png',
          gitHub: "https://github.com/Reece1109/BMI-Calculator",
          hosting: "https://bmicalculator-2023.netlify.app/"
        },
      ],
      
    }
  }
}
</script>


<style scoped>

#projects{
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

h3, h5, a{
  font-family: 'Lilita One', cursive;
}
.title {
  text-align: center;
  padding: 25px 0;
}

title p {
  font-size: 18px;
}

.card-body {
  box-shadow: 0 0 20px 7px black;
  color: black;
  font-size: 15px;
  font-weight: 600;
}

.card {
  margin: 20px 10px;
}


.card-body a {
  color: rgb(121, 121, 121);
}

.card-body a:hover {
  color: black;
  text-decoration: none;
}

img {
  object-fit: cover;
}
</style>