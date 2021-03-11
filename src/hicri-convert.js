function miladiToHicri(pValue) {
    const hicriDate = new Date(pValue);
    const year = (hicriDate.getFullYear() - 622) * 33 / 32;
    hicriDate.setFullYear(year);
    return hicriDate.getFullYear();
}

module.exports = {
    miladi: miladiToHicri
}