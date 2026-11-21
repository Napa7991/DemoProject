import { Body } from "./component/Body"
import { Header } from "./component/Header"
import { Footer } from "./component/Footer"
// import { Contact } from "./component/Contact"
import { Contact2 } from "./component/contact2"
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Body />
          {/* <Contact/> */}
          <Contact2 />
        </main>
        <Footer />
      </div>


    </>
  )
}

export default App
