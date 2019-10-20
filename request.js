const axios = require("axios");

axios.post("http://localhost:3000/api/contact/email", {
    fromName: "Jordan Bradfield",
    fromEmail: "jordan.p.bradfield@gmail.com",
    fromMessage: "Hello World!",
    timestamp: new Date().toJSON()
}).then(console.log).catch(console.error);