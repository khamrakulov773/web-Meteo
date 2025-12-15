export function geoLocation() {
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const {latitude, longitude} = await getBrowserGeolocation();
            console.log(latitude, longitude);
            
        } catch (error) {

        }
    });
}

const getBrowserGeolocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Геолокация не поддерживается Вашим браузером'));
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                const { latitude, longitude } = position.coords;
                resolve({ latitude, longitude })
            },
            (error) => {
                reject(error);
            }
        );
        }
    });
};