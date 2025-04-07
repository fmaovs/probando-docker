
export default function  DetalleProducto ({id, categoria, nombre, descripcion, precio, foto, modal}) {


    const editar = () => {
       modal(0, id )
      };

      const eliminar = () => {
        modal(1, id )
       };
      



      
    
    return (

             <tr>
                <td>{nombre} </td>
                <td>$ {precio}</td>
                <td className = "descripcion">{descripcion}</td>
                <td><img  style = {{ width:"200px"}} src={foto}/> </td>
                <td className="actions">
                    <button className="edit-btn"  onClick={editar} >Editar</button>
                    <button className="delete-btn" onClick={eliminar} >Eliminar</button>
                </td>
            </tr>
       
    )
}