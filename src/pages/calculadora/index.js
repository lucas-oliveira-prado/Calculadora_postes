import './style.css'
import React, {useState} from 'react'
import Input from '../../components/Input'
import Button from '../../components/button'
import Lottie from 'react-lottie';
import * as animationData from './Animation1.json'

function Calculadora(){
    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false
    });
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <div class="container">
            <div class="container-inputs">
                <Input>Num. de Postes</Input>
                <Input>Valor por Poste</Input>
            </div>
            <Button>Calcular</Button>
            <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>

        </div>
    )
}

export default Calculadora