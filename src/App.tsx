import Content from "./components/content";
import Footer from "./components/footer";
import HeaderNav from "./components/header";

function App() {
  const fullName: string = "Luigi";
  const message: string = "Welcome to my website";
  return (
    <>
      <HeaderNav />
      <Content fullName={fullName} message={message} />
      <Footer />
    </>
  );
}

export default App;
