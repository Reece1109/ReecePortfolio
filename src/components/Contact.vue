<template>
    <section class="contact d-flex align-items-center flex-column">
      <h1 class="display-3 mb-5 text-white">Contact</h1>
      <form action="https://formspree.io/f/xjvzpzvw" method="post" class="contact-form">
        <div class="row mb-3">
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="First Name" name="name" required>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Last Name" name="surname" required>
          </div>
        </div>
        <div class="mb-3">
          <input type="email" class="form-control" placeholder="Email Address" name="email" required>
        </div>
        <div class="mb-3">
          <textarea name="message" id="message" rows="4" class="form-control" placeholder="Message" required></textarea>
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ysabeau:wght@200&display=swap');

  h1{
    font-family: 'Lilita One', cursive;
  }

  .contact {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
      url('/src/assets/pexels-abhilash-sahoo-4295841.jpg');
    background-size: cover;
    background-position: center;
    padding: 80px 0;
    height: 100vh;
  }


  .contact-form {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 50px;
  border-radius: 5px;
  max-width: 800px;
  width: 100%;
}
  
  .contact-form input[type="text"],
  .contact-form input[type="email"],
  .contact-form textarea {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    padding: 10px;
    margin-bottom: 20px;
  }

  .contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: white;
  font-family: 'Lilita One', cursive;
  font-size: larger;
}
  
  .contact-form input[type="text"]:focus,
  .contact-form input[type="email"]:focus,
  .contact-form textarea:focus {
    outline: none;
    border-bottom: 1px solid #484848;
  }
  
  .contact-form button[type="submit"] {
    background-color: #4c4c4c;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
  }
  
  .contact-form button[type="submit"]:hover {
    background-color: white;
    color: #000000;
  }
  
button{
    color: white;
  font-family: 'Lilita One', cursive;
  font-size: larger;
  letter-spacing: 2px;
}
  </style>