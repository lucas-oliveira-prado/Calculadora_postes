import './style.css'

function Button(props){
    return(
        <div class="container-button">
            <button class="button">{props.children}</button>
            <label class="label-button">Não é possível calcular o tamanho do meu amor por voce S2</label>
        </div>
    )
}

export default Button