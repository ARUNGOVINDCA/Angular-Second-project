import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";

export const appServiceConfig = new  InjectionToken<AppConfig>('app.config');

// export const app_Config : AppConfig = {
//     apiEndpoint : 
// };