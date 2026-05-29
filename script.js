document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const resultadosDiv = document.getElementById('resultados');

    const valEconomia = document.getElementById('val-economia');
    const valCo2 = document.getElementById('val-co2');
    const valResiduos = document.getElementById('val-residuos');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples da entrada
        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido e positivo de hectares cultivados.');
            return;
        }

        /* Parâmetros simulados baseados em médias reais de mercado e estudos agronômicos:
           1. Economia média anual estimada de R$ 480 por hectare (redução de NPK químico e defensivos por bioinsumos).
           2. Redução/sequestro de cerca de 1.4 toneladas de CO2 equivalente por hectare ao ano através de manejo circular.
           3. Reciclagem e reaproveitamento de 3.8 toneladas de biomassa/resíduos orgânicos por hectare/ano.
        */
        const economiaPorHectare = 480;
        const co2PorHectare = 1.4;
        const residuosPorHectare = 3.8;

        const economiaTotal = hectares * economiaPorHectare;
        const co2Total = hectares * co2PorHectare;
        const residuosTotal = hectares * residuosPorHectare;

        // Formatação monetária (Real Brasileiro)
        valEconomia.textContent = economiaTotal.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL',
            maximumFractionDigits: 2 
        });

        // Formatação numérica de massas (toneladas)
        valCo2.textContent = `${co2Total.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} t`;
        valResiduos.textContent = `${residuosTotal.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} t`;

        // Exibe a área oculta de resultados removendo a classe 'hidden'
        resultadosDiv.classList.remove('hidden');

        // Scroll suave até a seção de respostas
        resultadosDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});
