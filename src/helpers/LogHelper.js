const commonLog = (emoji, key, message) => {
  const keyText = key ? `[${key.toUpperCase()}] ` : '';
  const logText = `${emoji} - ${keyText}${message}`;
  console.log(logText);
};

const d = (message, key) => commonLog('🐛', key, message);
const e = (message, key) => commonLog('❌', key, message);
const i = (message, key) => commonLog('ℹ️ ', key, message);
const w = (message, key) => commonLog('🥴', key, message);

export default { d, e, i, w };
