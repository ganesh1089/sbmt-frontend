const loginBtn = document.getElementById("loginBtn");
const errorDiv = document.getElementById("error");

loginBtn.addEventListener("click", async () => {
  const usernameOrEmail = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!usernameOrEmail || !password) {
    errorDiv.textContent = "Please enter both username/email and password";
    return;
  }

  try {
    const res = await fetch("https://sbmt-backend.onrender.com/api/hod/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: usernameOrEmail, password })
    });

    const data = await res.json();

    if (res.ok) {
      // ✅ Save session info
      sessionStorage.setItem("userId", data.userId);
      sessionStorage.setItem("username", usernameOrEmail);
      sessionStorage.setItem("role", data.role);

      // Redirect to dashboard (dummy)
      alert(`Login successful! Role: ${data.role}`);
      window.location.href = "dashboard.html"; // ya jo bhi dashboard page ho
    } else {
      errorDiv.textContent = data.message || "Login failed";
    }
  } catch (err) {
    console.error(err);
    errorDiv.textContent = "Server error, try again later";
  }
});