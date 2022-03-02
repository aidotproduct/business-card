import About from "./About"
import Info from "./Info"
import Footer from "./Footer"
import Interest from "./Interest"

export default function BusinessCard() {
    return (
      <div className="main--class">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    );
  }



