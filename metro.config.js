const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Ensure Metro recognizes images
config.resolver.assetExts = [...config.resolver.assetExts, 'png', 'jpg', 'jpeg'];

module.exports = withNativeWind(config);
