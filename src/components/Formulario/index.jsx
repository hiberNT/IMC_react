import { useState } from "react";
import styles from './Formulario.module.css';
const Formulario = () => {
    const [campoA, setCampoA] = useState('');
    const [campoB, setCampoB] = useState('');

    const imc = () => {
        const peso = parseFloat(campoA);
        const altura = parseFloat(campoB);

        if (peso > 0 && altura > 0) {
            const imcValor = peso / (altura ** 2);
            return imcValor.toFixed(2);
        }
        return '';
    }

    const resultado = (valor) => {
        if (valor < 18.5) return 'Abaixo do peso';
        if (valor >= 18.5 && valor <= 24.9) return 'Peso normal';
        if (valor >= 25 && valor <= 29.9) return 'Acima do peso';
        if (valor >= 30 && valor <= 34.9) return 'Obesidade Grau1';
        if (valor >= 35 && valor <= 40) return 'Obesidade Grau2';
        if (valor >= 40) return 'Obesidade Grau3';
        return '';
    }
    const IMC = parseFloat(imc());
    const classificacao = isNaN(IMC) ? '' : resultado(IMC);


    return (
        <div className="container">

            <div className={styles.input} >
                <input className={styles.inputItem} value={campoA} onChange={e => setCampoA(e.target.value)} type="number" placeholder="Peso em Kg" />
                <input className={styles.inputItem} value={campoB} onChange={e => setCampoB(e.target.value)} type="number" placeholder="Altura" />
            </div>


            <p className={styles.resultado}>{IMC ? `O seu IMC é de ${IMC}` : ''}</p>

            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr className={styles.tabelaItem}>
                        <td className={classificacao === 'Abaixo do peso' ? styles.borda2 : ''}> 17 a 18,4</td>
                        <td className={classificacao === 'Abaixo do peso' ? styles.borda2 : ''}>Abaixo do peso</td>
                    </tr>
                    <tr className={styles.tabelaItem}>
                        <td className={classificacao === 'Peso normal' ? styles.borda1 : ''}>18,5 a 24,9</td>
                        <td className={classificacao === 'Peso normal' ? styles.borda1 : ''}>Peso normal</td>
                    </tr>
                    <tr className={styles.tabelaItem}>
                        <td className={classificacao === 'Acima do peso' ? styles.borda2 : ''}>25 a 29,9</td>
                        <td className={classificacao === 'Acima do peso' ? styles.borda2 : ''}>Acima do peso</td>
                    </tr>
                    <tr className={styles.tabelaItem}>
                        <td className={classificacao === 'Obesidade Grau1' ? styles.borda2 : ''}>30 a 34,9</td>
                        <td className={classificacao === 'Obesidade Grau1' ? styles.borda2 : ''}>Obesidade Grau 1</td>
                    </tr>
                    <tr className={styles.tabelaItem}>
                        <td className={classificacao === 'Obesidade Grau2' ? styles.borda2 : ''}>35 a 40</td>
                        <td className={classificacao === 'Obesidade Grau2' ? styles.borda2 : ''}>Obesidade Grau 2</td>
                    </tr>
                    <tr className={styles.tabelaItem}>
                        <td className={classificacao === 'Obesidade Grau3' ? styles.borda2 : ''}>Maior que 40</td>
                        <td className={classificacao === 'Obesidade Grau3' ? styles.borda2 : ''}>Obesidade Grau 3</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}

export default Formulario;


