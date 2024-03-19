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
    const [numPostes, setNumPostes] = useState("");
    const [valorPorPoste, setValorPorPoste] = useState("");
    const [valorTotalAtual, setValorTotalAtual] = useState((0.00).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
    const [valorMensalRef, setValorMensalRef] = useState((0.00).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})); 
    const [valorEconomiaMensal, setValorEconomiaMensal] = useState((0.00).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
    const [valorHonorarios, setValorHonorarios] = useState("0 x R$ 0,00");

    const calcularValorTotal = () => {
        const total = parseFloat(valorPorPoste) * parseFloat(numPostes);
        const valorMensalRef = parseFloat(numPostes) * 3.19;
        const valorEconomiaMensal = parseFloat(total) - parseFloat(valorMensalRef);
        setValorMensalRef (valorMensalRef.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
        setValorTotalAtual(total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
        setValorEconomiaMensal(valorEconomiaMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));

        if (numPostes > 0 && numPostes <= 400) {
            setValorHonorarios("8 x R$ 900,00 ");
        } else if (numPostes > 400 && numPostes <= 700) {
            setValorHonorarios("8 x R$ 1000,00 ");
        } else if (numPostes > 700 && numPostes <= 1500) {
            setValorHonorarios("8 x R$ 1200,00 ");
        } else if (numPostes > 1500 && numPostes <= 2500) {
            setValorHonorarios("9 x R$ 1900,00 ");
        } else if (numPostes > 2500 && numPostes <= 5000) {
            setValorHonorarios("12 x R$ 2500,00 ");
        } else if (numPostes > 5000) {
            setValorHonorarios("12 x R$ 3000,00 ");
        } else {
            setValorHonorarios("0 x R$ 0,00");
        }
        
    };

    return(
        <div class="container">
            <div class="container-inputs">
                <Input label={"Num. de Postes"} value={numPostes} onChange={setNumPostes}></Input>
                <Input label={"Valor por Poste"} value={valorPorPoste} onChange={setValorPorPoste}></Input>
            </div>
            <Button onClick={calcularValorTotal}>Calcular</Button>
            <div class="container-inputs">
                <Input label={"Valor Total Atual"} value={valorTotalAtual} onChange={setValorTotalAtual}></Input>
                <Input label={"Valor Mensal Ref."} value={valorMensalRef} onChange={setValorMensalRef}></Input>
            </div>
            <div class="container-inputs">
                <Input label={"Economia Mensal"} value={valorEconomiaMensal} onChange={setValorEconomiaMensal}></Input>
                <Input label={"Valor Honorários"} value={valorHonorarios} onChange={setValorHonorarios}></Input>
            </div>
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