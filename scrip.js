function criaCalculadora() {
    return {
        display: document.querySelector('.display'), 

        inicia() {
            this.cliqueBotoes();
            this.enter();
            this.esc();
        },   
        
        limpar() {
            this.display.value = '';
        },

        deletar () {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            conta = this.display.value

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('Conta inválida')
                    return
                }
                this.display.value = conta
            } catch(e) {
                alert('Conta inválida')
            }
        },

        enter() {
            this.display.addEventListener('keyup', e => {
              if(e.keyCode === 13) {
                this.realizaConta();
              }
            });
        },

        esc() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode == 27) {
                    this.limpar();
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                   this.display.value += el.innerText;
                   this.display.focus();
                }

                if(el.classList.contains('btn-clear')) {
                    this.limpar();
                }

                if(el.classList.contains('btn-del')) {
                    this.deletar();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                    this.display.focus();
                }
            });
        },        
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();