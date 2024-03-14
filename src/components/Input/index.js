import './style.css'

function Input(props){
    return(
        <div class="container-input">
            <label class="label-input">{props.children}</label>
            <input class="decimal-input" type="text"></input>
        </div>
    )
}

export default Input