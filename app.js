const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const movies = [
  {
    name: 'Moon Knight S01E02 1080p',
    link: 'magnet:?xt=urn:btih:59EDC7F44D6D53B2793F283F5D03C983449FC0D7&dn=&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=http%3A%2F%2Ftracker.ipv6tracker.ru%3A80%2Fannounce&tr=udp%3A%2F%2Fretracker.hotplug.ru%3A2710%2Fannounce&tr=https%3A%2F%2Ftracker.fastdownload.xyz%3A443%2Fannounce&tr=https%3A%2F%2Fopentracker.xyz%3A443%2Fannounce&tr=http%3A%2F%2Fopen.trackerlist.xyz%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=https%3A%2F%2Ft.quic.ws%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.parrotsec.org%3A443%2Fannounce&tr=udp%3A%2F%2Ftracker.supertracker.net%3A1337%2Fannounce&tr=http%3A%2F%2Fgwp2-v19.rinet.ru%3A80%2Fannounce&tr=udp%3A%2F%2Fbigfoot1942.sektori.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcarapax.net%3A6969%2Fannounce&tr=udp%3A%2F%2Fretracker.akado-ural.ru%3A80%2Fannounce&tr=udp%3A%2F%2Fretracker.maxnet.ua%3A80%2Fannounce&tr=udp%3A%2F%2Fbt.dy20188.com%3A80%2Fannounce&tr=http%3A%2F%2F0d.kebhana.mx%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce&tr=http%3A%2F%2Fretracker.joxnet.ru%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.moxing.party%3A6969%2Fannounce',
    type: 'Show',
  },
  {
    name: 'Moon Knight S01E01 1080p',
    link: 'magnet:?xt=urn:btih:B87A15251A8CD1915B47551E7E56CC00C963E6AA&dn=&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=http%3A%2F%2Ftracker.ipv6tracker.ru%3A80%2Fannounce&tr=udp%3A%2F%2Fretracker.hotplug.ru%3A2710%2Fannounce&tr=https%3A%2F%2Ftracker.fastdownload.xyz%3A443%2Fannounce&tr=https%3A%2F%2Fopentracker.xyz%3A443%2Fannounce&tr=http%3A%2F%2Fopen.trackerlist.xyz%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=https%3A%2F%2Ft.quic.ws%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.parrotsec.org%3A443%2Fannounce&tr=udp%3A%2F%2Ftracker.supertracker.net%3A1337%2Fannounce&tr=http%3A%2F%2Fgwp2-v19.rinet.ru%3A80%2Fannounce&tr=udp%3A%2F%2Fbigfoot1942.sektori.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcarapax.net%3A6969%2Fannounce&tr=udp%3A%2F%2Fretracker.akado-ural.ru%3A80%2Fannounce&tr=udp%3A%2F%2Fretracker.maxnet.ua%3A80%2Fannounce&tr=udp%3A%2F%2Fbt.dy20188.com%3A80%2Fannounce&tr=http%3A%2F%2F0d.kebhana.mx%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce&tr=http%3A%2F%2Fretracker.joxnet.ru%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.moxing.party%3A6969%2Fannounce',
    type: 'Show',
  },
  {
    name: 'Captain America III Civil War 1080p',
    link: 'magnet:?xt=urn:btih:C808E7F2CAAE9305E373A09203CFB0E6B842BD18&dn=&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=http%3A%2F%2Ftracker.ipv6tracker.ru%3A80%2Fannounce&tr=udp%3A%2F%2Fretracker.hotplug.ru%3A2710%2Fannounce&tr=https%3A%2F%2Ftracker.fastdownload.xyz%3A443%2Fannounce&tr=https%3A%2F%2Fopentracker.xyz%3A443%2Fannounce&tr=http%3A%2F%2Fopen.trackerlist.xyz%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=https%3A%2F%2Ft.quic.ws%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.parrotsec.org%3A443%2Fannounce&tr=udp%3A%2F%2Ftracker.supertracker.net%3A1337%2Fannounce&tr=http%3A%2F%2Fgwp2-v19.rinet.ru%3A80%2Fannounce&tr=udp%3A%2F%2Fbigfoot1942.sektori.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcarapax.net%3A6969%2Fannounce&tr=udp%3A%2F%2Fretracker.akado-ural.ru%3A80%2Fannounce&tr=udp%3A%2F%2Fretracker.maxnet.ua%3A80%2Fannounce&tr=udp%3A%2F%2Fbt.dy20188.com%3A80%2Fannounce&tr=http%3A%2F%2F0d.kebhana.mx%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.files.fm%3A6969%2Fannounce&tr=http%3A%2F%2Fretracker.joxnet.ru%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.moxing.party%3A6969%2Fannounce',
    type: 'Movie',
  },
];

async function createChilds() {
  console.log(movies);
  movies.map(async (e, i) => {
    const link = document.createElement('a');
    link.className = 'link';
    link.dataset.dataLink = e.link;
    link.textContent = e.name;
    const cat = document.createElement('span');
    cat.textContent = e.type;
    link.appendChild(cat);
    $('.links').appendChild(link);
  });
}

createChilds();

var client = new WebTorrent();

client.on('error', function (err) {
  console.error('ERROR: ' + err.message);
});

document.querySelector('form').addEventListener('submit', (e) => torrentGo(e));
$$('.link').forEach((l) => {
  l.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.attributes.href.value);
    $('.log').innerHTML = '';
    const torrentId = e.target.attributes.href.value;
    log('Adding ' + torrentId);
    client.add(torrentId, onTorrent);
  });
});
function torrentGo(e) {
  e?.preventDefault(); // Prevent page refresh
  $('.log').innerHTML = '';
  var torrentId = document.querySelector('form input[name=torrentId]').value;
  log('Adding ' + torrentId);
  client.add(torrentId, onTorrent);
}

function onTorrent(torrent) {
  log('Got torrent metadata!');
  // log(
  //     'Torrent info hash: ' + torrent.infoHash + ' ' +
  //     '<a href="' + torrent.magnetURI + '" target="_blank">[Magnet URI]</a> ' +
  //     '<a href="' + torrent.torrentFileBlobURL + '" target="_blank" download="' + torrent.name + '.torrent">[Download .torrent]</a>'
  // )

  // Print out progress every 5 seconds
  var interval = setInterval(function () {
    log('Progress: ' + (torrent.progress * 100).toFixed(1) + '%');
  }, 5000);

  torrent.on('done', function () {
    log('Progress: 100%');
    clearInterval(interval);
  });

  // Render all files into to the page
  torrent.files.forEach(function (file) {
    file.appendTo('.log');
    // log('(Blob URLs only work if the file is loaded from a server. "http//localhost" works. "file://" does not.)')
    file.getBlobURL(function (err, url) {
      if (err) return log(err.message);
      // log('File done.')
      // log('<a href="' + url + '">Download full file: ' + file.name + '</a>')
    });
  });
}

function log(str) {
  var p = document.createElement('p');
  p.innerHTML = str;
  document.querySelector('.log').appendChild(p);
}
///
