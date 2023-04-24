<template>
<body>
<div class="bg-gradient_solid">
  <div class="container">
    <div class="section-header mt-5">
      <h1 class="display-3 text-white">Resume</h1> 
      <hr>
    </div>
    <div class="steps">
      <div class="steps-container">
        <div class="content">
          <h2>Windsor High School - Matric</h2>
          <p>During my time at Windsor High School, I was exposed to a diverse range of subjects and extracurricular activities that helped me develop a well-rounded skill set. The knowledge and skills I acquired at Windsor High School have been valuable in my personal and professional growth, and I am proud to have been a part of such a reputable institution.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2014-2018</div>
      </div>

      <div class="steps-container">
        <div class="content">
          <h2>Butlers Pizza - Delivery Driver</h2>
          <p>I was responsible for delivering pizzas to customers in a timely and professional manner, ensuring customer satisfaction. The experience at Butlers Pizza has improved my time management, problem-solving, and customer service skills, and has provided me with valuable experience in the food service industry.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2018-2021</div>
      </div>

      <div class="steps-container">
        <div class="content">
          <h2>North-link College - National Certificate Plumbing N1-N2</h2>
          <p>The program has provided me with a comprehensive understanding of plumbing systems, tools, and techniques, enabling me to acquire practical skills necessary to succeed in the plumbing industry. The hands-on training and theoretical knowledge I gained during my time at North-link College have equipped me with the necessary skills to tackle real-world plumbing challenges.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2020-2021</div>
      </div>

      <div class="steps-container">
        <div class="content">
          <h2>Teleperformance - Call center Agent</h2>
          <p> I was responsible for providing exceptional customer service to clients, handling inquiries, resolving issues, and ensuring customer satisfaction. The experience at Teleperformance has improved my communication skills, problem-solving ability, and given me a deep understanding of customer service operations.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2021-2022</div>
      </div>

      <div class="steps-container">
        <div class="content">
          <h2>Bazinga - Childminder</h2>
          <p>I am responsible for ensuring the safety, well-being, and development of the children in my care. The experience at Bazinga has improved my communication, organizational, and interpersonal skills, and has provided me with a deep understanding of child development and care.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2022-Current</div>
      </div>

      
      <div class="steps-container">
        <div class="content">
          <h2>Life Choices Coding Academy- Full Stack Web Developement Certificate</h2>
          <p>I have gained a deep understanding of full-stack web development, including front-end and back-end development. The experience at Life Choices Coding Academy has improved my problem-solving, analytical, and critical thinking skills, and has equipped me with the necessary skills to succeed in the tech industry.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2022-Current</div>
      </div>

    </div>
    <div class="section-header mt-5">
      <h1 class="display-3 text-white">Skills</h1> 
      <hr>
    </div>
<div class="icon-container">
  <i class="fa-brands fa-square-js p-5" style="color: #ffffff;"></i>
  <i class="fa-brands fa-html5 p-5" style="color: #ffffff;"></i>
  <i class="fa-brands fa-css3-alt  p-5" style="color: #ffffff;"></i>
  <i class="fa-brands fa-bootstrap  p-5" style="color: #ffffff;"></i>
  <br>
  <i class="fa-brands fa-vuejs p-5" style="color: #ffffff;"></i>
  <i class="fa-brands fa-github p-5" style="color: #ffffff;"></i>
  <i class="fa-solid fa-database p-5" style="color: #ffffff;"></i>
  <i class="fa-brands fa-node-js p-5" style="color: #ffffff;"></i>
</div>
  </div>
</div>
</body>
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
          company: "Life Choices Coding Academy",
          position: "Full Stack Web Developement Certificate",
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
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');


  .icon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .icon-container i {
    margin: 10px;
    font-size: 11em;
  }

h1{
  font-family: 'Lilita One', cursive;
}

.section-header {
  text-align: center;
}
.section-header h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
}
.section-header hr {
  border: none;
  width: 56px;
}
.bg-gradient_solid {
  color: #a7bcb9;
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
  /* padding: 0px 0; */
}
.steps {
  position: relative;
  margin-top: 32px;
}
.steps::after {
  content: "";
  position: absolute;
  width: 1px;
  background-color: white;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 50%;
}

.steps .content p {
  color: white;
  font-size: 16px;
  font-family: 'Lilita One', cursive;
}

.steps .content h2 {
  font-size: 20px;
  color: white;
  font-family: 'Lilita One', cursive;
}

.steps-container {
  position: relative;
  background-color: inherit;
  width: calc(50% + 32px);
}

.steps-container .content {
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
  border-radius: 0px 0px 80px 0px;
  box-shadow: 0px 16px 27px rgb(0 11 30 / 10%);
}

.steps .steps-container:nth-child(even) {
  left: calc(50% - 32px);
  flex-direction: row-reverse;
}

.steps-container {
  display: flex;
}

.steps .steps-container .date {
  font-weight: 900;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 10px;
  width: 62px;
  height: 62px;
  background-color: var(--primary);
  border-radius: 50%;
  flex-shrink: 0;
  align-items: center;
  display: flex;
  justify-content: center;
}

.step-line {
  width: 40px;
  background-color: #fff;
  height: 1px;
  margin-top: 31px;
  opacity: 0.4;
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .steps::after {
    left: 32px;
  }
  .steps-container {
    left: 0;
    flex-direction: row-reverse;
    width: auto;
    margin-bottom: 16px;
  }
  .steps .steps-container:nth-child(even) {
    left: 0;
  }
}

</style>
