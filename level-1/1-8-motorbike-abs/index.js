
const abs = (rpmNow, rpmBefore, config) => {
  if (rpmNow < rpmBefore) {
    if (rpmBefore - rpmNow > config.dropAbsoluteThreshold) {
      return 1;
    }
    if (rpmNow / rpmBefore < config.dropRatioThreshold) {
      return 1;
    }
  }
  return 0;
};

const absCheck = (sensorData, config) => {
  let i = 0;
  const outputData = [];
  for (i = 0; i < sensorData.length; i++) {
    const rpm = sensorData[i];
    if (i < config.checkWindow) {
      outputData.push(0);
      continue;
    }
    const rpmBefore = sensorData[i - config.checkWindow];
    outputData.push(abs(rpm, rpmBefore, config));
  }
  return outputData;
};

module.exports = {
  absCheck,
};
