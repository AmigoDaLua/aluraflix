import styles from "./ListaSuspensa.module.css"


function ListaSuspensa({ categorias, aoAlterado, valor }){

    return(
        <div className={styles.listaSuspensa}>
            <select 
                onChange={evento => aoAlterado(evento.target.value)}
                required 
                value={valor}
                className={styles.select}
                >
                <option value="" disabled>Selecione uma categoria</option>
                {categorias.map(categoria => {
                    return  <option key={categoria}>{categoria}</option>   
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;