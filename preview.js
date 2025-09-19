const KeyshopRepository = require("./keyshopRepository");

const repo = new KeyshopRepository("your-api-key");

async function checkKey() {
  try {
    const result = await repo.validateKey("ys_Abc123S-0123456789");
    if (result.ok) {
      console.log("✅ Key valid:", result);
    } else {
      console.log("❌ Invalid key:", result);
    }
  } catch (err) {
    console.error("Error validating key:", err.message);
  }
}

checkKey();
