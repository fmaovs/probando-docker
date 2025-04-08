import { useEffect, useState } from "react";
import { getProducto, getProductos } from "../servicios/prodcutos.servicio";
import DetalleProducto from "./detalleProducto";
import Modal from "./modal";
import "./productos.css";


export default function  Productos () {

  const [productoEditar , setProductoEditar ] = useState(null)
    const [productos , setProductos ] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emodal , setEmodal ] = useState(null)
    const [rta , setRta ] = useState(null)

    /*  ******************************************************** */ 

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);
  
    // Calcular los índices para los datos paginados
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);
  
    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    // Calcular el número total de páginas
    const totalPages = Math.ceil(productos.length / itemsPerPage);

    /* *********************************************************** */ 



  const closeModal = () => {
    setIsModalOpen(false);

  };
  
 
 
  const setModal = (tipo, id) => {
    setEmodal(tipo)

    if (tipo == 0 || tipo == 1) {
    

      getProducto(id).then ((response) => {
        //console.log (" * response *    " + JSON.stringify(response.data.datos[0]))
        setProductoEditar(response.data.datos[0])
         
     })
     .catch ((error) => {
         console.log ("Error leer usuarios  " + error)
     })

    }


   
    setTimeout(() => {
      setIsModalOpen(true);
    }, 300);
   
  };
  


    useEffect(() => {
        getProductos().then ((response) => {
            console.log (" response componete   " + JSON.stringify(response.data.datos))
            setProductos(response.data.datos)
        })
        .catch ((error) => {
            console.log ("Error leer usuarios  " + error)
        })
    }, [isModalOpen])


    return (
      <div className="contenedor">
         <button className="add-btn" onClick={()=> setModal(3,0)}> Agregar Producto</button>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th className = "descripcion">Descripción</th>
                <th>Foto</th>
                <th>Accion`es</th>
            </tr>
        </thead>
        <tbody>
        {productos.length > 0 ? ( 
            currentItems.map((producto)=> (
                <DetalleProducto  key={producto.id_producto}
                id={producto.id_producto}
                categoria = {producto.nombre_categoria}
                nombre = {producto.nombre_producto}
                descripcion = {producto.descripcion_producto}
                precio = {producto.precio_producto}
                foto = {`http://localhost:3001${producto.foto_producto}`}
                modal={setModal}
               
                />
            ))

        ): (
            <tr><td> ... CARGANDO DATOS .... </td> </tr>
        )}
        </tbody>
        </table>

        <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} tipo={emodal} producto = {productoEditar}  />
      </div>
    )
  
  }
  