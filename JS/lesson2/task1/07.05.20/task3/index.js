//перебрать массив для того чтобы убрать все лишнее
//установить лимит на знаки после запятой(2)
// к каждому числу добавить знак $
const cleanTransactionsList = (money) => {
    return money.filter(el => isFinite(el))
        .map(tr => `$${Number.parseFloat(tr). toFixed(2)}`);
}