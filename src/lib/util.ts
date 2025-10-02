export const toMoney = (value: number) => {
    return  new Intl.NumberFormat("ru-Ru",
        {
            style: "currency",
            currency: "Rub",
            maximumFractionDigits: 2
        }
    ).format(
        value
    )
}