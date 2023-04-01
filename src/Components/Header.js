import{
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider"





import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { App } from "./firebase.config";



function Header() {

    const firebaseAuth = getAuth(App);
    const provider = new GoogleAuthProvider();


    const Login = async () =>{

  const response =  await signInWithPopup(firebaseAuth, provider)
  console.log(response)
};
  



  const [{ cart }] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

    return (
      <header>
       
        <img
          src="https://ik.imagekit.io/ut43jnswy/kisspng-kfc-fast-food-crispy-fried-chicken-logo-round-kfc-logo-5a70b7a341e165.6415654515173364832699.png?updatedAt=1680194618498"
          alt=""
          className="logo"
       />
  
    
  
        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
  
        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
            <p>{cart ? cart.length : ""}</p>
          </div>
        </div>
  
        <div className="profileContainer">
          <div className="imgBox">
            <img
              src="https://ik.imagekit.io/ut43jnswy/WhatsApp_Image_2023-03-30_at_10.09.40.jpg?updatedAt=1680196490669"
              alt="login"
              onClick={Login}
            />

          </div>
          <h2 className="userName">Suriya Marley</h2>
        </div>
  
        <div className="toggleMenu">
          <BarChart className="toggleIcon" />
        </div>
      </header>
    );
  }

  
  

export default Header;
