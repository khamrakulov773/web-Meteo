import { swithTheme } from "./src/components/switchTheme.js";
import { getGeoData } from "./src/api/geoData.js";
import { getWeatherByForm } from "./src/components/inputForm.js";
import { renderCurrentTime } from "./src/helpers/currentTime.js";
import { geoLocation } from "./src/components/geoLocation.js";

export function initApp() {
    swithTheme();
    getGeoData();
    getWeatherByForm();
    renderCurrentTime();
    geoLocation();
}