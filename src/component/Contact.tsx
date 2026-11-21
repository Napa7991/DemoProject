import { useState } from "react"

export const Contact = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("")

    const handleSubmit = async (e:React.SyntheticEvent) => {
        e.preventDefault(); // stops the page from reloading
        try{
            const response = await fetch("http://localhost:5000/api/contact",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({email,phone}),
            });
            if (response.ok){
                setStatus("Saved");
                setEmail("");
                setPhone("");
            }
            else{
                setStatus("Failed");
            }

        }
        catch(error){
            console.log("Error: ",error)
            setStatus("Failed")
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit} className="flex gap-3 flex-col m-5">
                <input
                    className="border-2 w-72 border-gray-400"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border-2 w-72 border-gray-400"
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit"
                    className="bg-gray-200 border-2 w-72 border-black px-4 py-2 rounded hover:bg-gray-300 transition-colors">
                    Submit

                </button>

                <p>{status}</p>
            </form>
        </>

    )
}

