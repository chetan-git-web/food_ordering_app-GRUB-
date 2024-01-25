require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OU06pSAmzsQrsfHcQbyFSCx6osZXWZgLkVU1EsRwBH2xqswsFc84RqEKVRaYxBJtnxVWWAPmOGZKFJwcXku6g7I00jB7ysBQq");
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.name,
            },
            unit_amount: product.price,
        },
        quantity: 1
    }));



    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${BASE_URL}/sucess`,
        cancel_url: `${BASE_URL}/cancel`,
    });

    res.json({ id: session.id })

})


app.listen(PORT, () => {
    console.log("server start")
})