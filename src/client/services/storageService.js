var store;

export const init = () => {
    if("localStorage" in window){
        store = localStorage;
    }else{
        store = {
            data: {

            },
            getItem: key => store.data[key],
            setItem: (key, data) => data[key] = data
        }
    }
}

export const retrieve = config => {
    let data = store.getItem(config.name);
    try {
        return JSON.parse(data);
    } catch (error) {
        return data;   
    }
}

export const save = (config, data) => {
    try {
        store.setItem(config.name, data && typeof data !== "string" ? JSON.stringify(data) : data);
    } catch (error) { }
}