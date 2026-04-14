"use client";
import {useState} from "react";

type RSVPProps = {
  response: "yes" | "no";
};

export default function RSVP({response}: RSVPProps) {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setStatus("Sending...");
 
        try {
          const res = await fetch("/api/rsvp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            response,
          }),
        });

        if (!res.ok) {
          throw new Error("Request failed");
        }

        setStatus("Thanks! Your RSVP was saved.");
        setName("");
        } catch (error) {
          setStatus("Something went wrong.");
        }
    }
    
    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
            type="text"
            placeholder="Name:"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-80 rounded border border-white/30 bg-white px-4 py-2 text-black"
            required
            ></input>
            <button
            type="submit"
            className="bg-[#f1bbbb] text-white rounded p-2 w-20">
                RSVP
            </button>
            {status && <p>{status}</p>}
            </form>
    );
}