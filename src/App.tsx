import { Body } from "./component/Body"
import { Header } from "./component/Header"
import { Footer } from "./component/Footer"
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Body />
        </main>
        <Footer />


      </div>


    </>
  )
}

export default App
