import axios from "axios";

const END_POINT_PRODUCTOS = "http://localhost:3001/api/producto/"

const END_POINT_CATEGORIAS_GET = "http://localhost:3001/api/categoria/"


export const setProducto = async (data) => {
   
    //console.log("data ... " + JSON.stringify(data));
    try {
        const response = await axios.post(END_POINT_PRODUCTOS, data);
        console.log("response  setProducto ... " + JSON.stringify(response));
        return response;
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
};


export const getCategorias = async () => {

    try {
        const response = await axios.get(END_POINT_CATEGORIAS_GET)
        return (response)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}


export const getProductos = async () => {

    try {
        const response = await axios.get(END_POINT_PRODUCTOS)
        return (response)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}

export const getProducto = async (id) => {

    const END_POINT = `${END_POINT_PRODUCTOS}${id}`

    try {
        const response = await axios.get(END_POINT)
        return (response)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}


export const updateProducto = async (data, id) => {
    const END_POINT = `${END_POINT_PRODUCTOS}${id}`
    //console.log("data ... " + JSON.stringify(data));
    try {
        const response = await axios.put(END_POINT, data);
        //console.log("response  updateProducto ... " + JSON.stringify(response));
        return response;
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
};


export const deleteProducto = async (id) => {

    const END_POINT = `${END_POINT_PRODUCTOS}${id}`

    try {
        const response = await axios.delete(END_POINT)
        console.log("response  deleteProducto ... " + JSON.stringify(response));
        return (response)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}