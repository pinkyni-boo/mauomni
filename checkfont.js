const https = require('https');
https.get('https://app.markeeai.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const cssMatch = data.match(/href="(\/_next\/static\/chunks\/[^"]+\.css)"/g);
    if (!cssMatch) return;
    cssMatch.forEach(link => {
      const url = 'https://app.markeeai.com' + link.match(/href="(.*?)"/)[1];
      https.get(url, (cssRes) => {
        let cssData = '';
        cssRes.on('data', chunk => cssData += chunk);
        cssRes.on('end', () => {
          const fonts = cssData.match(/font-family:[^;}]+/g);
          if (fonts) {
            const uniqueFonts = [...new Set(fonts)];
            console.log(uniqueFonts.slice(0, 10));
          }
        });
      });
    });
  });
});
