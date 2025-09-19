# 🔑 YS KeyShop Repository API

A small repository wrapper for interacting with the **YS KeyShop API**.  
Currently, only the **product key validation** endpoint (`/productkey/validate`) is supported.

---

## 🚀 Features
- Validate product keys via the KeyShop API
- Simple error handling
- Works in Node.js (and browser with slight changes)

---

## 📦 Installation

Clone or copy the repository into your project:

```bash
git clone https://github.com/YellowSkunk/KeyShop-API.git
cd ys-keyshop-repo
````

Or just drop the `keyshopRepository.js` file into your codebase.

---

## 🔧 Setup

You need an **API key** to use the repository.
Replace `"your-api-key"` with your actual API key.

```js
const KeyshopRepository = require("./keyshopRepository");

const repo = new KeyshopRepository("your-api-key");
```

---

## ✅ Usage

### Validate a Product Key

```js
async function example() {
  try {
    const result = await repo.validateKey("ys_Abc123S-0123456789");

    if (result.ok) {
      console.log("✅ Key valid:", result);
    } else {
      console.log("❌ Invalid key:", result);
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

example();
```

---

## 📖 API Reference

### `validateKey(code: string): Promise<object>`

* **code**: The product key to validate
* **returns**: JSON object (example below)

Example response:

```json
{
  "ok": true,
  "productId": "basic-premium",
  "expiresAt": "2025-12-31T23:59:59.000Z"
}
```

If invalid:

```json
{
  "ok": false,
  "error": "Invalid or expired key"
}
```

---

## 🌐 Notes

* Default API base is:

  ```
  https://api--yellowskunk.netlify.app
  ```
* This repository is just a thin wrapper around the KeyShop API.
* You can easily extend it if more endpoints are added later (e.g. product listing, redeeming keys, premium gifting).
* Get API Key on [Yellow Skunk Developers](https://devs--yellowskunk.netlify.app)

---

## 📝 License

MIT
