import { apiKey, baseUrl } from "./apiKeyAndHost.js";
import { cityInput } from "../components/inputForm.js";
import { showError } from "../components/error.js";
import { isCyrillic } from "../helpers/checkCirillic.js";
import { replaceAbbreviation } from "../helpers/cityAbbreviation.js";
import { saveCityToLocalStorage } from "../helpers/saveCityToLocalStorage.js";




export const getGeoData = async () => {
    let city = cityInput.value.trim();

    if (!city) {
        return;
    }
    
    if (!isCyrillic(city)) {
        showError("Проверьте название города");
        return;
    };

    city = replaceAbbreviation(city);

    try {
        const geoUrl = `${baseUrl}/geo/1.0/direct`;
        const queryParams = new URLSearchParams({
            q: city,
            limit: 1,
            appid: apiKey,
        });

        const geoResponse = await fetch(`${geoUrl}?${queryParams.toString()}`);

        const geoData = await geoResponse.json();

        if(!geoData.length) {
            showError("Город не найден");
            return;
        }

        saveCityToLocalStorage(city);

        const { lat, lon } = geoData[0];

        console.log(lat, lon);
   
    } catch (error) {
        console.error(error.message);
        showError(error.message || 'Данные не получены')
    }   
}
