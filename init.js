import { swithTheme } from "./src/components/switchTheme.js";
import { getGeoData } from "./src/api/geoData.js";
import { getWeatherByForm } from "./src/components/inputForm.js";

export function initApp() {
    swithTheme();
    getGeoData();
    getWeatherByForm();
}