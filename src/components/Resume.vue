<template>
  <section class="container-fluid text-center">
    <!-- <h1>Resume</h1> -->
    
      <div class="education">
        <h2 class="text-center display-6 fw-bold">Education</h2>
        <div class="educationContainer mb-4" v-for="school in schools" :key="school.id">
          <h3>{{ school.name }}</h3>
          <p>Highest Grade: {{ school.grade }}</p>
          <p>Year: {{ school.year }}</p>
        </div>
      </div>
    
    
  
  
      <div class="experience">
        <h2 class="text-center display-6 fw-bold">Experience</h2>
        <div class="experienceContainer mb-4" v-for="job in jobs" :key="job.id">
          <h2>
            {{ job.company }} 
          </h2>
          <p>{{ job.position }}</p>
          <p>{{ job.start }} to {{ job.end }}</p>
        </div>
      </div>
    
  
  
    
      <div class="skills display-6 fw-bold">
        <h2 class="text-center display-6 fw-bold">TECHNICAL SKILLS</h2>
        <div v-for="skill in skills" :key="skill" class="skillsContainer mb-4">
          <h2>{{ skill.name }}</h2>
          <p class="lead">
            {{ skill.value }}
          </p>
        </div>
      </div>
    

  </section>
</template>

<script>
export default {
  data() {
    return {
      schools: [
        {
          name: "Windsor High School",
          grade: "Matric",
          year: "2018"
        },
        {
          name: "North-link College",
          grade: "National Certificate Plumbing N1-N2",
          year: "2020-2021"
        }
      ], 
      jobs: [
        {
          company: "Teleperformance",
          position: "Call center Agent",
          start: "2021",
          end: "2022"
        },
        {
          company: "Butlers Pizza",
          position: "Delivery Driver",
          start: "2018",
          end: "2021"
        },
        {
          company: "Bazinga",
          position: "Childminder",
          start: "2022",
          end: "current"
        }
      ], 
      skills: [
        {
          name: "HTML",
          value: "Completed a course in HTML at Life Choices Academy.",
          color: "info"
        },
        {
          name: "CSS",
          value: "Completed a CSS course at Life Choices Academy.",
          color: "success"
        },
        {
          name: "Bootstrap",
          value: "Completed a Bootstrap 5 course at Life Choices Academy.",
          color: "warning"
        },
        {
          name: "JavaScript",
          value: "Completed a JavaScript course at Life Choices Academy.",
          color: "warning"
        }
      ]
    }
  }
}
</script>

<style scoped>
.container-fluid{
  color: lightgray;
  min-height: 100vh;
  padding-bottom: 3rem;
  background-image:
  linear-gradient(#000000da, #000000b7),
  url('../assets/pexels-abhilash-sahoo-4295841.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.educationContainer,
.skillsContainer,
.experienceContainer{
  border-radius: 1rem;
  width: 80%;
  margin: 0 auto;
padding: 0.5em;
background-image:   linear-gradient(#0000003a, #0000003f);
}

.educationContainer:hover,
.skillsContainer:hover,
.experienceContainer:hover{
scale: 1.1;
box-shadow: 2px 5px 5px #000;
}

</style>
