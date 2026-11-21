import { useState } from "react"

export const Contact2 = () => {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    // fetching data from backend server
    try {
      const response = await fetch("http://localhost:5000/api/contact",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,phone}),
      })
      if(response.ok){
        setStatus("Saved");
        setEmail("");
        setPhone("")
      }
      else{
        setStatus("Failed inside else")
      }
    }
    catch (error) {
      setStatus("Failed")
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col m-3 gap-3">
        <input className="border border-gray-700" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border border-gray-700" type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <button className="border border-gray-500" type="submit">Submit</button>
      </form>
      <p>{status}</p>
    </>
  )
}


