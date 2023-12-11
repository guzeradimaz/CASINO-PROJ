const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};
const ruLocale = 'ru-RU'

export const getDateTimeString = (millis) => {
    return new Date(millis).toLocaleString(ruLocale, dateOptions)
}