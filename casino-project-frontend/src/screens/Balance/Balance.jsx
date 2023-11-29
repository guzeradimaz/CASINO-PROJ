import "./Balance.css"

export const Balance = () => {

    return (
        <div className="balance-wrapper">
            <div className="caption">
                Выберите способ пополнения баланса
            </div>
            <img className={'credit-cards'}
                 src={'https://www.zenithimmigration.ca/wp-content/uploads/2022/06/visa-mastercard-logo.png'}
                 alt={'credit cards'}/>
        </div>
    )
}