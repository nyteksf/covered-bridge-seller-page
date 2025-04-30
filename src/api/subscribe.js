// File: /api/subscribe.js (for Vercel or any Node-based serverless runtime)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, name } = (await req.json?.()) || (await req.body);

    if (!email || !name) {
      return res.status(400).json({ message: "Missing email or name" });
    }

    const apiKey = process.env.BREVO_API_KEY;

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name },
        listIds: [3],
        updateEnabled: true,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(result);
    }

    return res
      .status(200)
      .json({ message: "Contact added successfully", result });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
}
