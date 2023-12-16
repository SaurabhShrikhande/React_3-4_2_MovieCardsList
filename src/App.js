// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';

function App() {
  return (
    <div style={{backgroundColor:"black"}}>
       <Header/>
    <div  style={{margin:"5%", padding:"20px"}} >
    <Main 
    img="https://filmartgallery.com/cdn/shop/products/The-Avengers-Vintage-Movie-Poster-Original-1-Sheet-27x41_f7a83b7a-9d50-4743-b630-3fbd34b35e5a.jpg?v=1671051716"
    title="Avenger"
    subtitle = "2017,David Ayer"
    rating = {4}
     des = "Double-sided Advance poster for Marvel superhero blockbuster, directed by Joss Whedon. Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City."
     bg = "https://wallpapers.com/images/featured-full/avengers-vm16xv4a69smdauy.jpg"
    />
    </div>

    <div  style={{margin:"5%", backgroundColor:"black", padding:"20px"}} >
    <Main 
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCiM84x0b1m2m5j77kzxrg9JFrosLlJod8H3CchQxqRHs97WV9LjTyIFTghGEtIMguPQ&usqp=CAU"
    title="Fighter"
    subtitle = "2024,Saurabh Shrikhande"
    rating = {5}
     des = "Double-sided Advance poster for Fighter superhero blockbuster, directed by Saurabh Shrikhande. The upcoming movie fighter starring hrithik roshan and deepika padukone in a lead role.the film will be released on 30 september 2022.Film director siddharth anand opened his own production house"
     bg = "https://www.theindianwire.com/wp-content/uploads/2022/03/FIGHTER-POSTER.jpg"
    />
    </div>


    <Footer/>
    </div>
    // <div className="App">
    //   <h1>saurabh</h1>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> 
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
