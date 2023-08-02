import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'RelevamientoVisual',
  webDir: 'www',
  bundledWebRuntime: false,
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 1250,
      "launchAutoHide": true,
      "launchFadeOutDuration": 1250,
      "backgroundColor": "#ffffffff",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": true,
      "androidSpinnerStyle": "large",
      "iosSpinnerStyle": "small",
      "spinnerColor": "#999999",
      "splashFullScreen": true,
      "splashImmersive": true,
      "layoutName": "launch_screen",
      "useDialog": true
    }
  }
};

export default config;
