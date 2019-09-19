var isProduction = (function(){
    try {
        return window.location.protocol !== "localhost";
    } catch (error) {
        try {
            return process.env.NODE_ENV === "production";
        } catch (error) {
            throw new Error("Did not detect window or process object. Where is the code being run?");
        }
    }
}());

module.exports = {
    constants: {
        isProduction: isProduction
    }
}