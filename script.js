<script>
  // Função para atualizar a exibição geral das seções
  function updateGeral() {
    const tipo = document.getElementById("tipoIndemnizacao").value;
    document.getElementById("sec-trabalhador").classList.add("hidden");
    document.getElementById("sec-empregador").classList.add("hidden");
    document.getElementById("sec-ilicito").classList.add("hidden");
    
    if (tipo === "trabalhador") {
      document.getElementById("sec-trabalhador").classList.remove("hidden");
    } else if (tipo === "empregador") {
      document.getElementById("sec-empregador").classList.remove("hidden");
    } else if (tipo === "ilicit") {
      document.getElementById("sec-ilicito").classList.remove("hidden");
    }
  }

  // --- Seção Trabalhador ---
  function updateTrabalhadorForm() {
    const tipoContrato = document.getElementById("contratoTipoTrabalhador").value;
    document.getElementById("trabalhadorIndeterminado").classList.add("hidden");
    document.getElementById("trabalhadorPrazo").classList.add("hidden");
    if (tipoContrato === "indeterminado") {
      document.getElementById("trabalhadorIndeterminado").classList.remove("hidden");
    } else if (tipoContrato === "prazo") {
      document.getElementById("trabalhadorPrazo").classList.remove("hidden");
    }
  }

  function updateTrabalhadorIndeterminado() {
    const resposta = document.getElementById("umAnoTrabalhador").value;
    document.getElementById("trabalhadorIndeterminadoSim").classList.add("hidden");
    document.getElementById("trabalhadorIndeterminadoNao").classList.add("hidden");
    if (resposta === "sim") {
      document.getElementById("trabalhadorIndeterminadoSim").classList.remove("hidden");
    } else if (resposta === "nao") {
      document.getElementById("trabalhadorIndeterminadoNao").classList.remove("hidden");
    }
  }

  function updateTrabalhadorMesesExtra() {
    const resposta = document.getElementById("mesesExtraTrabalhador").value;
    if (resposta === "sim") {
      document.getElementById("trabalhadorMesesExtraInput").classList.remove("hidden");
    } else {
      document.getElementById("trabalhadorMesesExtraInput").classList.add("hidden");
    }
  }

  function updateTrabalhadorFerias() {
    const resposta = document.getElementById("feriasTrabalhador").value;
    if (resposta === "sim") {
      document.getElementById("feriasInput").classList.remove("hidden");
    } else {
      document.getElementById("feriasInput").classList.add("hidden");
    }
  }

  function updateTrabalhadorPrazo() {
    const tempoTipo = document.getElementById("tempoFaltanteTrabalhador").value;
    document.getElementById("trabalhadorPrazoAnos").classList.add("hidden");
    document.getElementById("trabalhadorPrazoMesesOnly").classList.add("hidden");
    if (tempoTipo === "anos") {
      document.getElementById("trabalhadorPrazoAnos").classList.remove("hidden");
    } else if (tempoTipo === "meses") {
      document.getElementById("trabalhadorPrazoMesesOnly").classList.remove("hidden");
    }
  }

  function updateTrabalhadorPrazoMeses() {
    const resposta = document.getElementById("mesesFaltandoPergTrabalhador").value;
    if (resposta === "sim") {
      document.getElementById("trabalhadorPrazoMeses").classList.remove("hidden");
    } else {
      document.getElementById("trabalhadorPrazoMeses").classList.add("hidden");
    }
  }

  function updateFeriasTrabalhadorPrazo() {
    const resposta = document.getElementById("feriasTrabalhadorPrazo").value;
    if (resposta === "sim") {
      document.getElementById("feriasTrabalhadorPrazoInput").classList.remove("hidden");
    } else {
      document.getElementById("feriasTrabalhadorPrazoInput").classList.add("hidden");
    }
  }

  // --- Seção Empregador ---
  function updateEmpregadorForm() {
    const tipoContrato = document.getElementById("contratoTipoEmpregador").value;
    document.getElementById("empregadorIndeterminado").classList.add("hidden");
    document.getElementById("empregadorPrazo").classList.add("hidden");
    if (tipoContrato === "indeterminado") {
      document.getElementById("empregadorIndeterminado").classList.remove("hidden");
    } else if (tipoContrato === "prazo") {
      document.getElementById("empregadorPrazo").classList.remove("hidden");
    }
  }

  function updateEmpregadorIndeterminado() {
    const resposta = document.getElementById("umAnoEmpregador").value;
    document.getElementById("empregadorIndeterminadoSim").classList.add("hidden");
    document.getElementById("empregadorIndeterminadoNao").classList.add("hidden");
    if (resposta === "sim") {
      document.getElementById("empregadorIndeterminadoSim").classList.remove("hidden");
    } else if (resposta === "nao") {
      document.getElementById("empregadorIndeterminadoNao").classList.remove("hidden");
    }
  }

  function updateEmpregadorMesesExtra() {
    const resposta = document.getElementById("mesesExtraEmpregador").value;
    if (resposta === "sim") {
      document.getElementById("empregadorMesesExtraInput").classList.remove("hidden");
    } else {
      document.getElementById("empregadorMesesExtraInput").classList.add("hidden");
    }
  }

  function updateEmpregadorPrazo() {
    const tempoTipo = document.getElementById("tempoFaltanteEmpregador").value;
    document.getElementById("empregadorPrazoAnos").classList.add("hidden");
    document.getElementById("empregadorPrazoMesesOnly").classList.add("hidden");
    if (tempoTipo === "anos") {
      document.getElementById("empregadorPrazoAnos").classList.remove("hidden");
    } else if (tempoTipo === "meses") {
      document.getElementById("empregadorPrazoMesesOnly").classList.remove("hidden");
    }
  }

  function updateEmpregadorPrazoMeses() {
    const resposta = document.getElementById("mesesFaltandoPergEmpregador").value;
    if (resposta === "sim") {
      document.getElementById("empregadorPrazoMeses").classList.remove("hidden");
    } else {
      document.getElementById("empregadorPrazoMeses").classList.add("hidden");
    }
  }

  function updateFeriasEmpregador() {
    const resposta = document.getElementById("feriasEmpregador").value;
    if (resposta === "sim") {
      document.getElementById("feriasEmpregadorInput").classList.remove("hidden");
    } else {
      document.getElementById("feriasEmpregadorInput").classList.add("hidden");
    }
  }

  // --- Seção Despedimento Ilícito ---
  function updateIlicitoForm() {
    const subTipo = document.getElementById("subTipoIlicito").value;
    document.getElementById("ilicitoIndemnizacao").classList.add("hidden");
    document.getElementById("ilicitoReintegracao").classList.add("hidden");
    if (subTipo === "indemnizacao") {
      document.getElementById("ilicitoIndemnizacao").classList.remove("hidden");
    } else if (subTipo === "reintegracao") {
      document.getElementById("ilicitoReintegracao").classList.remove("hidden");
    }
  }

  function updateIlicitoPrazo() {
    const tempoTipo = document.getElementById("tempoFaltanteIlicito").value;
    document.getElementById("ilicitoPrazoAnos").classList.add("hidden");
    document.getElementById("ilicitoPrazoMesesOnly").classList.add("hidden");
    if (tempoTipo === "anos") {
      document.getElementById("ilicitoPrazoAnos").classList.remove("hidden");
    } else if (tempoTipo === "meses") {
      document.getElementById("ilicitoPrazoMesesOnly").classList.remove("hidden");
    }
  }

  function updateIlicitoPrazoMeses() {
    const resposta = document.getElementById("mesesFaltandoPergIlicito").value;
    if (resposta === "sim") {
      document.getElementById("ilicitoPrazoMeses").classList.remove("hidden");
    } else {
      document.getElementById("ilicitoPrazoMeses").classList.add("hidden");
    }
  }

  function updateFeriasIlicito() {
    const resposta = document.getElementById("feriasIlicito").value;
    if (resposta === "sim") {
      document.getElementById("feriasIlicitoInput").classList.remove("hidden");
    } else {
      document.getElementById("feriasIlicitoInput").classList.add("hidden");
    }
  }

  function updateFeriasReintegracao() {
    const resposta = document.getElementById("feriasReintegracao").value;
    if (resposta === "sim") {
      document.getElementById("feriasReintegracaoInput").classList.remove("hidden");
    } else {
      document.getElementById("feriasReintegracaoInput").classList.add("hidden");
    }
  }

  // Função de cálculo da indenização
  function calcular() {
    let resultado = 0;
    const tipo = document.getElementById("tipoIndemnizacao").value;
    
    if (!tipo) {
      alert("Selecione o tipo de indemnização.");
      return;
    }

    // --- Rescisão por Iniciativa do Trabalhador ---
    if (tipo === "trabalhador") {
      const contratoTipo = document.getElementById("contratoTipoTrabalhador").value;
      if (!contratoTipo) {
        alert("Selecione o tipo de contrato para o trabalhador.");
        return;
      }
      
      if (contratoTipo === "indeterminado") {
        const umAno = document.getElementById("umAnoTrabalhador").value;
        if (!umAno) {
          alert("Informe se trabalhou pelo menos um ano.");
          return;
        }
        if (umAno === "sim") {
          const salario = parseFloat(document.getElementById("salarioTrabalhador").value);
          const anos = parseFloat(document.getElementById("anosTrabalhado").value);
          if (isNaN(salario) || isNaN(anos)) {
            alert("Informe corretamente o salário e os anos trabalhados.");
            return;
          }
          let mesesExtra = 0;
          if (document.getElementById("mesesExtraTrabalhador").value === "sim") {
            mesesExtra = parseFloat(document.getElementById("mesesExtraInput").value);
            if (isNaN(mesesExtra)) {
              alert("Informe os meses extras trabalhados.");
              return;
            }
          }
          resultado = (salario/30) * 45 * (anos + (mesesExtra/12));
          if (document.getElementById("feriasTrabalhador").value === "sim") {
            let diasFerias = parseFloat(document.getElementById("diasFerias").value);
            if (isNaN(diasFerias)) {
              alert("Informe os dias de férias não gozadas.");
              return;
            }
            resultado += (salario/30) * diasFerias;
          }
        } else if (umAno === "nao") {
          const salario = parseFloat(document.getElementById("salarioTrabalhador").value);
          const mesesTrabalhado = parseFloat(document.getElementById("mesesTrabalhado").value);
          if (isNaN(salario) || isNaN(mesesTrabalhado)) {
            alert("Informe corretamente o salário e os meses trabalhados.");
            return;
          }
          resultado = (salario/30) * 45 * (mesesTrabalhado/12);
        }
      } else if (contratoTipo === "prazo") {
        const salario = parseFloat(document.getElementById("salarioTrabalhadorPrazo").value);
        if (isNaN(salario)) {
          alert("Informe o salário mensal.");
          return;
        }
        const tempoTipo = document.getElementById("tempoFaltanteTrabalhador").value;
        if (!tempoTipo) {
          alert("Informe se o tempo faltante é em anos ou meses.");
          return;
        }
        if (tempoTipo === "anos") {
          const anos = parseFloat(document.getElementById("anosFaltandoTrabalhador").value);
          if (isNaN(anos)) {
            alert("Informe os anos restantes.");
            return;
          }
          let meses = 0;
          if (document.getElementById("mesesFaltandoPergTrabalhador").value === "sim") {
            meses = parseFloat(document.getElementById("mesesFaltandoTrabalhador").value);
            if (isNaN(meses)) {
              alert("Informe os meses restantes.");
              return;
            }
          }
          resultado = salario * (anos + (meses/12));
        } else if (tempoTipo === "meses") {
          const meses = parseFloat(document.getElementById("mesesFaltandoOnlyTrabalhador").value);
          if (isNaN(meses)) {
            alert("Informe os meses restantes.");
            return;
          }
          resultado = salario * (meses/12);
        }
        if (document.getElementById("feriasTrabalhadorPrazo").value === "sim") {
          let diasFerias = parseFloat(document.getElementById("diasFeriasTrabalhadorPrazo").value);
          if (isNaN(diasFerias)) {
            alert("Informe os dias de férias não gozadas.");
            return;
          }
          resultado += (salario/30) * diasFerias;
        }
      }
    }
    // --- Rescisão por Iniciativa do Empregador ---
    else if (tipo === "empregador") {
      const contratoTipo = document.getElementById("contratoTipoEmpregador").value;
      if (!contratoTipo) {
        alert("Selecione o tipo de contrato para o empregador.");
        return;
      }
      const minSalary = parseFloat(document.getElementById("salarioMinimoEmpregador").value);
      if (isNaN(minSalary)) {
        alert("Informe o salário mínimo do setor.");
        return;
      }
      if (contratoTipo === "indeterminado") {
        const salario = parseFloat(document.getElementById("salarioEmpregador").value);
        if (isNaN(salario)) {
          alert("Informe o salário mensal.");
          return;
        }
        const umAno = document.getElementById("umAnoEmpregador").value;
        if (!umAno) {
          alert("Informe se trabalhou pelo menos um ano (empregador).");
          return;
        }
        if (umAno === "sim") {
          const anos = parseFloat(document.getElementById("anosEmpregador").value);
          if (isNaN(anos)) {
            alert("Informe os anos de serviço.");
            return;
          }
          let mesesExtra = 0;
          if (document.getElementById("mesesExtraEmpregador").value === "sim") {
            mesesExtra = parseFloat(document.getElementById("mesesExtraEmpregadorInput").value);
            if (isNaN(mesesExtra)) {
              alert("Informe os meses extras trabalhados.");
              return;
            }
          }
          // Multiplicador baseado no salário comparado com o salário mínimo
          const multiplier = (salario <= 7 * minSalary) ? 30 : (salario <= 18 * minSalary) ? 15 : 5;
          resultado = (salario/30) * multiplier * (anos + (mesesExtra/12));
        } else if (umAno === "nao") {
          const mesesTrabalhado = parseFloat(document.getElementById("mesesTrabalhadoEmpregador").value);
          if (isNaN(salario) || isNaN(mesesTrabalhado)) {
            alert("Informe corretamente o salário e os meses trabalhados.");
            return;
          }
          const multiplier = (salario <= 7 * minSalary) ? 30 : (salario <= 18 * minSalary) ? 15 : 5;
          resultado = (salario/30) * multiplier * (mesesTrabalhado/12);
        }
      } else if (contratoTipo === "prazo") {
        const salario = parseFloat(document.getElementById("salarioEmpregadorPrazo").value);
        if (isNaN(salario)) {
          alert("Informe o salário mensal.");
          return;
        }
        const tempoTipo = document.getElementById("tempoFaltanteEmpregador").value;
        if (!tempoTipo) {
          alert("Informe se o tempo faltante é em anos ou meses.");
          return;
        }
        if (tempoTipo === "anos") {
          const anos = parseFloat(document.getElementById("anosFaltandoEmpregador").value);
          if (isNaN(anos)) {
            alert("Informe os anos restantes.");
            return;
          }
          let meses = 0;
          if (document.getElementById("mesesFaltandoPergEmpregador").value === "sim") {
            meses = parseFloat(document.getElementById("mesesFaltandoEmpregador").value);
            if (isNaN(meses)) {
              alert("Informe os meses restantes.");
              return;
            }
          }
          resultado = salario * (anos + (meses/12));
        } else if (tempoTipo === "meses") {
          const meses = parseFloat(document.getElementById("mesesFaltandoOnlyEmpregador").value);
          if (isNaN(meses)) {
            alert("Informe os meses restantes.");
            return;
          }
          resultado = salario * (meses/12);
        }
      }
      if (document.getElementById("feriasEmpregador").value === "sim") {
        let diasFerias = parseFloat(document.getElementById("diasFeriasEmpregador").value);
        if (isNaN(diasFerias)) {
          alert("Informe os dias de férias não gozadas.");
          return;
        }
        // Define qual salário usar conforme o tipo de contrato
        let salarioUtilizado = (document.getElementById("contratoTipoEmpregador").value === "indeterminado") ? parseFloat(document.getElementById("salarioEmpregador").value) : parseFloat(document.getElementById("salarioEmpregadorPrazo").value);
        resultado += (salarioUtilizado/30) * diasFerias;
      }
    }
    // --- Despedimento Ilícito ---
    else if (tipo === "ilicit") {
      const subTipo = document.getElementById("subTipoIlicito").value;
      if (!subTipo) {
        alert("Selecione entre indemnização ou reintegração.");
        return;
      }
      if (subTipo === "indemnizacao") {
        const salario = parseFloat(document.getElementById("salarioIlicito").value);
        if (isNaN(salario)) {
          alert("Informe o salário mensal.");
          return;
        }
        const tempoTipo = document.getElementById("tempoFaltanteIlicito").value;
        if (!tempoTipo) {
          alert("Informe se o tempo faltante é em anos ou meses.");
          return;
        }
        if (tempoTipo === "anos") {
          const anos = parseFloat(document.getElementById("anosFaltandoIlicito").value);
          if (isNaN(anos)) {
            alert("Informe os anos restantes.");
            return;
          }
          let meses = 0;
          if (document.getElementById("mesesFaltandoPergIlicito").value === "sim") {
            meses = parseFloat(document.getElementById("mesesFaltandoIlicito").value);
            if (isNaN(meses)) {
              alert("Informe os meses restantes.");
              return;
            }
          }
          resultado = salario * (45/30 * anos + (meses/12));
        } else if (tempoTipo === "meses") {
          const meses = parseFloat(document.getElementById("mesesFaltandoOnlyIlicito").value);
          if (isNaN(meses)) {
            alert("Informe os meses restantes.");
            return;
          }
          resultado = salario * (meses/12);
        }
        if (document.getElementById("feriasIlicito").value === "sim") {
          let diasFerias = parseFloat(document.getElementById("diasFeriasIlicito").value);
          if (isNaN(diasFerias)) {
            alert("Informe os dias de férias não gozadas.");
            return;
          }
          resultado += (salario/30) * diasFerias;
        }
      } else if (subTipo === "reintegracao") {
        const salario = parseFloat(document.getElementById("salarioReintegracao").value);
        const tempo = parseFloat(document.getElementById("tempoDesdeDespedimento").value);
        if (isNaN(salario) || isNaN(tempo)) {
          alert("Informe corretamente o salário e o tempo decorrido.");
          return;
        }
        resultado = (tempo >= 6) ? salario * 6 : salario * tempo;
        if (document.getElementById("feriasReintegracao").value === "sim") {
          let diasFerias = parseFloat(document.getElementById("diasFeriasReintegracao").value);
          if (isNaN(diasFerias)) {
            alert("Informe os dias de férias não gozadas.");
            return;
          }
          resultado += (salario/30) * diasFerias;
        }
      }
    }
    
    document.getElementById("resultado").innerHTML = "<h2>Indemnização Total: " + resultado.toFixed(2) + " MT</h2>";
  }

  // Adiciona event listeners para as mudanças de seleção e o botão de calcular
  document.getElementById("tipoIndemnizacao").addEventListener("change", updateGeral);
  document.getElementById("contratoTipoTrabalhador").addEventListener("change", updateTrabalhadorForm);
  document.getElementById("umAnoTrabalhador").addEventListener("change", updateTrabalhadorIndeterminado);
  document.getElementById("mesesExtraTrabalhador").addEventListener("change", updateTrabalhadorMesesExtra);
  document.getElementById("feriasTrabalhador").addEventListener("change", updateTrabalhadorFerias);
  document.getElementById("tempoFaltanteTrabalhador").addEventListener("change", updateTrabalhadorPrazo);
  document.getElementById("mesesFaltandoPergTrabalhador").addEventListener("change", updateTrabalhadorPrazoMeses);
  document.getElementById("feriasTrabalhadorPrazo").addEventListener("change", updateFeriasTrabalhadorPrazo);
  document.getElementById("contratoTipoEmpregador").addEventListener("change", updateEmpregadorForm);
  document.getElementById("umAnoEmpregador").addEventListener("change", updateEmpregadorIndeterminado);
  document.getElementById("mesesExtraEmpregador").addEventListener("change", updateEmpregadorMesesExtra);
  document.getElementById("tempoFaltanteEmpregador").addEventListener("change", updateEmpregadorPrazo);
  document.getElementById("mesesFaltandoPergEmpregador").addEventListener("change", updateEmpregadorPrazoMeses);
  document.getElementById("feriasEmpregador").addEventListener("change", updateFeriasEmpregador);
  document.getElementById("subTipoIlicito").addEventListener("change", updateIlicitoForm);
  document.getElementById("tempoFaltanteIlicito").addEventListener("change", updateIlicitoPrazo);
  document.getElementById("mesesFaltandoPergIlicito").addEventListener("change", updateIlicitoPrazoMeses);
  document.getElementById("feriasIlicito").addEventListener("change", updateFeriasIlicito);
  document.getElementById("feriasReintegracao").addEventListener("change", updateFeriasReintegracao);
  document.querySelector("button").addEventListener("click", calcular);
</script>
