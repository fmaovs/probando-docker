import './modal.css';

import FormularioCrear from './formularioCrear';
import FormularioEditar from './formularioEditar';
import UnProducto from "./unProducto";

const Modal = ({ isOpen, onClose , tipo, producto }) => {

  if (!isOpen) return null; // No renderizar si el modal no está abierto

  return (
    <div className="modal-overlay">
      <div className="modal">
      <button  className="button-modal" onClick={onClose}>Cerrar Modal</button>
        {tipo === 0 ? (<FormularioEditar
          id = {producto.id_producto }
          idCategoria = {producto.id_categoria }
          categoria = {producto.nombre_categoria }
          nombre = {producto.nombre_producto }
          precio = {producto.precio_producto }
          descripcion = {producto.descripcion_producto }
          foto = {producto.foto_producto}
      
        />) : tipo=== 1 ? (<UnProducto
          id = {producto.id_producto }
          idCategoria = {producto.id_categoria }
          categoria = {producto.nombre_categoria }
          nombre = {producto.nombre_producto }
          precio = {producto.precio_producto }
          descripcion = {producto.descripcion_producto }
          foto = {producto.foto_producto}
          close={onClose}
      
        />) : ( <FormularioCrear/> )}
        
       
      </div>
    </div>
  );
};

export default Modal;
