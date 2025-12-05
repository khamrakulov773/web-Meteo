export const updateHumidityScale = (humidity) => {
    const parametr = document.querySelector('.parameter');

    parametr.style.width = `${humidity}%`;
}