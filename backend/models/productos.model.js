import { pool } from "../db.js";


export const getAllProducts = async (req, res) => {
  try {
       const [rows] = await pool.query(
      "SELECT * FROM productos"
    );



    if (rows.length > 0) {
      return res.status(200).json({status: true,  datos:rows , message: "cosulta  exitosa" });
    } else  {
      return res.status(200).json({ status: false, datos: [] , message: "cosulta  vacia" });
    }




  } catch (error) {
    return res.status(500).json({ message: "Error en la consulta" });
  }
};


export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM productos WHERE id_producto = ? ",
      [id]
    );

   
    if (rows.length > 0) {
      return res.status(200).json({status: true,  datos:rows , message: "cosulta  exitosa" });
    } else  {
      return res.status(200).json({ status: false, datos: [] , message: "cosulta  vacia" });
    }

  } catch (error) {
    return res.status(500).json({ message: "Error en la consulta" });
  }
};


export const setProduct = async (req, res) => {
  try {


   
    const id_producto  = req.body.id_producto;
    const nombre_producto  = req.body.nombre_producto;
    const descripcion_producto  =  req.body.descripcion_producto;
    const precio_producto  =  req.body.precio_producto;
    const foto_producto =  req.body.foto_producto;
    const id_categoria  = req.body.id_categoria;
    const nombre_categoria = req.body.nombre_categoria;

    

  
    const rta = await pool.query(
      "insert into productos (id_producto,nombre_producto,descripcion_producto,precio_producto,foto_producto,id_categoria,nombre_categoria, upload_date) values (?,?,?,?,?,?,?,NOW())",
      [id_producto , nombre_producto , descripcion_producto , precio_producto , foto_producto , id_categoria , nombre_categoria]
    );

   
    if (rta[0].affectedRows == 1) {
      return res.status(200).json({ status: true,  datos:[] , message: "producto  creado con exito"  });
    } else  {
      return res.status(400).json({ status: false,  datos:[] , message: "  error al crear el producto "  });
    }

   

  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "error base de datos " + error});
  }
};



export const updateProduct = async (req, res) => {
  try {

    const { id } = req.params;
    const nombre_producto  = req.body.nombre_producto;
    const descripcion_producto  =  req.body.descripcion_producto;
    const precio_producto  =  req.body.precio_producto;
    const foto_producto =  req.body.foto_producto;
    const id_categoria  = req.body.id_categoria;
    const nombre_categoria = req.body.nombre_categoria;

  
    const rta = await pool.query(
      "update productos set nombre_producto = ? , descripcion_producto = ? , precio_producto = ? , foto_producto = ? , id_categoria = ? , nombre_categoria = ? where id_producto = ?",
      [nombre_producto , descripcion_producto , precio_producto , foto_producto , id_categoria , nombre_categoria, id]
    );

   
    if (rta[0].changedRows == 1) {
      return res.status(200).json({ status: true,  message: "producto actualiado correctamente" });
    } else  {
      return res.status(200).json({ status: false,  message: " error en la cosulta " });
    }

   

  } catch (error) {
    return res.status(500).json({ message: "Error en la consulta" , error });
  }
};




export const deleteProduct = async (req, res) => {
  try {

    const { id } = req.params;
  
    const rta = await pool.query(
      "delete from productos  where id_producto = ?",
      [id]
    );

   
    if (rta[0].affectedRows == 1) {
      return res.status(200).json({ status: true,  message: "producto borrado  correctamente"   });
    } else  {
      return res.status(200).json({ status: false,  message: "error en el borrado"});
    }

   

  } catch (error) {
    return res.status(500).json({ message: "Error en la consulta" , error });
  }
};


export const getCategoria = async (req, res) => {
 
  try {
    const [rows] = await pool.query(
   "SELECT DISTINCT id_categoria, nombre_categoria  FROM productos"
 );

   
    if (rows.length > 0) {
      return res.status(200).json({status: true,  datos:rows , message: "cosulta  exitosa" });
    } else  {
      return res.status(200).json({ status: false, datos: [] , message: "cosulta  vacia" });
    }

  } catch (error) {
    return res.status(500).json({ message: "Error en la consulta" });
  }
};



;