// keyshopRepository.js
const API_BASE = "https://api--yellowskunk.netlify.app";

class KeyshopRepository {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async validateKey(code) {
    const res = await fetch(`${API_BASE}/productkey/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({ code }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`API Error: ${res.status} - ${error}`);
    }

    return res.json(); // expected: { ok: true/false, ... }
  }
}

module.exports = KeyshopRepository;
