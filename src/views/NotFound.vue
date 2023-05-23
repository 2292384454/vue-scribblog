<template>
  <div
      style="background-color: #24344c;background-image:url('/img/404background.png') ;background-size: cover; height: 93.8vh">
    <div class="space_wrapper">
      <h1>404</h1>
      <h3>LOST IN <span>SPACE</span> ? Hmm, looks like that page doesn't exist.</h3>
      <img id="astronaut" src="/img/astronaut.svg"/>
      <img id="planet" src="/img/planet.svg"/>
      <a href="/">
        <button class="space_link">Go Home</button>
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

.space_wrapper a {
  text-decoration: none;
}

.space_wrapper {
  max-width: 390px;
  width: 100%;
  display: block;
  position: relative;
  margin: 0 auto 0;
}

.space_wrapper h1 {
  text-align: center;
  color: #fff;
  font-family: "Dosis", sans-serif;
  font-size: 100px;
  margin: 0;
  font-weight: 800;
}

.space_wrapper h3 {
  text-align: center;
  color: #fff;
  font-size: 19px;
  line-height: 23px;
  max-width: 330px;
  margin: 0 auto 30px auto;
  font-family: "Dosis", sans-serif;
  font-weight: 400;
}

.space_wrapper h3 span {
  position: relative;
  width: 65px;
  display: inline-block;
}

.space_wrapper h3 span:after {
  content: "";
  border-bottom: 3px solid #ffbb39;
  position: absolute;
  left: 0;
  top: 43%;
  width: 100%;
}

.space_link {
  background: none;
  color: #fff;
  padding: 12px 0px 10px 0px;
  border: 1px solid #fff;
  outline: none;
  border-radius: 7px;
  width: 150px;
  font-size: 15px;
  text-align: center;
  margin: 0 auto;
  vertical-align: middle;
  display: block;
  margin-bottom: 40px;
  margin-top: 25px;
  font-family: "Dosis", sans-serif;
  font-weight: 400;
}

.space_link:hover {
  color: #ffbb39;
  border-color: #ffbb39;
  cursor: pointer;
  opacity: 1;
}

.space_wrapper .stars {
  animation: sparkle 1.6s infinite ease-in-out alternate;
}

@keyframes sparkle {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}

#astronaut {
  width: 43px;
  position: absolute;
  right: 20px;
  top: 210px;
  animation: spin 4.5s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@media (max-width: 600px) {
  .space_wrapper h1 {
    font-size: 75px;
  }

  .space_wrapper h3 {
    font-size: 16px;
    width: 200px;
    margin: 0 auto;
    line-height: 23px;
  }

  .space_wrapper h3 span {
    width: 60px;
  }

  #astronaut {
    width: 35px;
    right: 40px;
    top: 170px;
  }
}

.saturn,
.saturn-2,
.hover {
  animation: hover 2s infinite ease-in-out alternate;
}

@keyframes hover {
  0% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(-3px);
  }
}
</style>