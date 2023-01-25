const converter = (pureToken)=>{
    return pureToken.replace(/^Bearer\s+/, "");
}

module.exports = {
    converter
}