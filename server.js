const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { CompletePayment } = require("./paymentService");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/enroll", async (req, res) => {
  try {
    const { name, age, selectedBatch } = req.body;

    // Validate and process enrollment logic (you can add your own logic here)

    // Call the CompletePayment function
    const paymentResponse = await CompletePayment(name, selectedBatch);

    // Return the response to the front-end
    return res.status(200).json({ message: paymentResponse });
  } catch (error) {
    console.error("Error processing enrollment:", error.message);
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
