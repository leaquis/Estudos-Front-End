const transactionsUl = document.querySelector('#transactions')

const dummyTransactions = [
    {id: 1, name: 'Bolo de Brigadeiro', amount: -20},
    {id: 2, name: 'Salario', amount: 300},
    {id: 3, name: 'Torata de Frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
        ${transaction.name} <span>R$ ${operator}${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `
    transactionsUl.prepend(li)
}

const updateBalanceValues = () => {
    const transactionsAmounts = dummyTransactions.map(transaction => transaction.amount)
    console.log(transactionsAmounts)
}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()
