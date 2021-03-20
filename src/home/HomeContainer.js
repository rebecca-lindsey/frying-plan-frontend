import "./home.css";
import homeImage from "./home-image.jpg";

export default function HomeContainer() {
  return (
    <div id="home-container" className="main-container">
      <h2>Welcome to Frying Plan!</h2>
      <p>
        Frying Plan is a meal planning app designed to make the chore a little
        more fun. Add your own recipes or use our classic recipes to create a
        weekly schedule of yummy meals!
      </p>
      <img src={homeImage} alt="Table with lots of food" id="home-image" />
      <small>
        Photo by{" "}
        <a href="https://unsplash.com/@therachelstory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Rachel Park
        </a>{" "}
        on{" "}
        <a href="/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </small>
    </div>
  );
}
