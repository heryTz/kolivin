const IS_DEV = process.env.APP_VARIANT === 'development'
const IS_STAGING = process.env.APP_VARIANT === 'staging'

const APP_SUFFIX = IS_DEV ? 'dev' : IS_STAGING ? 'staging' : ''

const APP_NAME_SUFFIX = APP_SUFFIX ? ` (${APP_SUFFIX})` : ''
const APP_ID_SUFFIX = APP_SUFFIX ? `.${APP_SUFFIX}` : ''

export default {
  name: `kg-test${APP_NAME_SUFFIX}`,
  slug: 'kg-test',
  version: '1.0.10',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: `com.kgtest${APP_ID_SUFFIX}`,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: `com.kgtest${APP_ID_SUFFIX}`,
    versionCode: 11,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: 'f6bc349d-2aeb-414c-801b-81479c2c0338',
    },
  },
  updates: {
    url: 'https://u.expo.dev/f6bc349d-2aeb-414c-801b-81479c2c0338',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
}
