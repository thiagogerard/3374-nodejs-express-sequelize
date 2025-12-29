module.exports = (objetoParams) => {
    for (let propriedade in objetoParams) {
        if (/Id|id/.test(propriedade)) {
            const valorConvertido = Number(objetoParams[propriedade]);

            if (Number.isNaN(valorConvertido)) {
                delete objetoParams[propriedade];
            } else {
                objetoParams[propriedade] = valorConvertido;
            }
        }
    }
    return objetoParams;
};
