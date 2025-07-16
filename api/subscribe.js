export default async function handler(req, res) {
  console.log(">>> Received VIP signup request");

  console.log(">>> ENV Check:", !!process.env.BREVO_API_KEY);

  if (req.method !== "POST") {
    console.log(">>> Rejected: invalid method", req.method);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, name } = req.body;
    const apiKey = process.env.BREVO_API_KEY;

    if (!email || !name) {
      console.log(">>> Missing email or name:", email, name);
      return res.status(400).json({ message: "Missing email or name" });
    }

    if (!apiKey) {
      console.log(">>> Missing BREVO_API_KEY from env");
      return res.status(500).json({ message: "Missing API key" });
    }

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

    console.log(">>> Brevo API response:", response.status, result);

    if (!response.ok) {
      return res.status(response.status).json(result);
    }

    return res
      .status(200)
      .json({ message: "Contact added successfully", result });
  } catch (err) {
    console.error(">>> Server error:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
}
