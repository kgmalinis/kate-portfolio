const descriptions = [
    "Software Engineer",
    "cat enthuasiast",
    "gamer",
    "learner"
  ];
  
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  function Header() {
    const description = descriptions[genRandomInt((descriptions.length - 1))];
    return (
      <div class="Intro">
        <h2>Hello and welcome! My name is Kate Malinis. I am a {description}.</h2>
      </div>
    );
  }
  
  export default Header;
  