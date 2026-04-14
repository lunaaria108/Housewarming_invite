export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(process.env.GOOGLE_SCRIPT_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        response: body.response,
      }),
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to save RSVP" }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}