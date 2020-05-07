/*
Tendo os arrays ['ES', 'MG', 'RJ', 'SP', 'MT'] e ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'],
 percorra os vetores dados e crie um outro com a seguinte estrutura: ['MT' => ''Mato Grosso'', 'ES'=>'Espírito Santo', 'MG'=>'Minas Gerais',
 'RJ'=>'Rio de Janeiro', 'SP'=>'São Paulo']. Depois de criado terceiro vetor, leia-o e imprima em cada linha a chave de cada posição 
 e seu respectivo valor separados por "-".
*/
const _ = require ('underscore');
 
const uf = ['ES', 'MG', 'RJ', 'SP', 'MT'];
const estado = ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];
var ufEstado = [];

uf.forEach(elementoUf => {
    estado.forEach(elementoEstado => {
        if (validaUf(elementoUf) === elementoEstado) {
            ufEstado.push({[`${elementoUf}`]:elementoEstado});//objeto de chave dinamica
        };

    });
});


_.each(ufEstado,(elelentoUfEstado) => {
    _.each(elelentoUfEstado,(value, indice) => {
        console.log(indice + '-' + value);
    
    });
});


function validaUf(uf) {
    var estado;
    switch (uf) {
        case 'ES':
            estado = 'Espírito Santo';
            break;
        case 'MG':
            estado = 'Minas Gerais';
            break;
        case 'RJ':
            estado = 'Rio de Janeiro';
            break;
        case 'SP':
            estado = 'São Paulo';
            break;
        case 'MT':
            estado = 'Mato Grosso';
            break;
    };
    return estado;
};