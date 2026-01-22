document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const first_name = document.getElementById("firstName").value.trim();
  const last_name = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name, last_name, email, message }),
    });

    if (!res.ok) {
      throw new Error("Server error");
    }

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    }
  } catch (err) {
    console.error(err);
    alert("Failed to send message.");
  }
});
