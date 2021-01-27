const commonLog = (emoji, key, sth) => {
  const keyText = key ? `[${key.toUpperCase()}] ` : '';
  const logTextStart = `${emoji} -> ${keyText}`;
  const logTextEnd = `${emoji} <- \n`;
  console.log(logTextStart);
  console.log(sth);
  console.log(logTextEnd);
};

const d = (sth, key) => commonLog('🐛', key, sth);
const e = (sth, key) => commonLog('❌', key, sth);
const i = (sth, key) => commonLog('ℹ️ ', key, sth);
const w = (sth, key) => commonLog('🥴', key, sth);

export default { d, e, i, w };
