export const convertToString = data => {
    try {
        //test initial type, if not string then try to convert it
        return typeof data !== "string" ? (JSON.stringify(data) || "") : (data || "");
    } catch (error) {
        //stringify must have thrown an error, try to access .toString()
        return (data && data.toString()) || (data || "")
    }
}

export const convertToObject = string => {
    try {
        return string ? JSON.parse(string) : string;
    } catch (error) {
        return string;
    }
}