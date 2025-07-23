// Had to use ChatGPT for this part because I was running into a CORS error.
async function getAffirmation() {
  const res = await fetch("https://www.affirmations.dev", {
    headers: { Accept: "application/json" },
  });
  const data = await res.json();
  return data;
}

export async function GET() {
  const data = await getAffirmation();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
