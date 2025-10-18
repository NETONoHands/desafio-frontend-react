export default function formataPreco (valor) {
        return 'R$ ' + (valor / 100).toFixed(2).replace('.', ',');
    }