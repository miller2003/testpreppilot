import https from 'https';
import fs from 'fs';

const urls = {
  'arrt-2024.pdf': 'https://assets-us-01.kc-usercontent.com/406ac8c6-58e8-00b3-e3c1-0c312965deb2/61b9883a-9132-4ad4-a711-a7d1af2c44c8/ARRT%20Annual%20Exam%20Report%20-%202024.pdf',
  'arrt-2025.pdf': 'https://assets-us-01.kc-usercontent.com/406ac8c6-58e8-00b3-e3c1-0c312965deb2/22f9f912-46a8-4f24-ba43-fd0b0c7e602a/ARRT_Annual_Exam_Report-2025.pdf'
};

let pending = Object.keys(urls).length;
for (const [name, url] of Object.entries(urls)) {
  https.get(url, (res) => {
    const chunks = [];
    res.on('data', (c) => chunks.push(c));
    res.on('end', () => {
      const buf = Buffer.concat(chunks);
      fs.writeFileSync(name, buf);
      console.log(name, buf.length, 'bytes, status', res.statusCode, 'eof:', buf.slice(-8).includes('%%EOF'));
      if (--pending === 0) process.exit(0);
    });
  }).on('error', (e) => {
    console.log(name, 'ERR', e.message);
    if (--pending === 0) process.exit(1);
  });
}
