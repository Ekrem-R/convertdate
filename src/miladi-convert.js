function hicriToMiladi(pValue) {
    let miladiDate = new Date(pValue);
    const year = (miladiDate.getFullYear() *32/33) +622;
    miladiDate.setFullYear(year);
    return miladiDate.getFullYear();
}

module.exports = {
    hicri: hicriToMiladi
}