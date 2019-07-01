// Input nama oleh user
var nama  = prompt('Masukan Nama Anda!');
// input peran oleh user
var peran = prompt('Pilih peran anda (Ksatria, Tabib, Penyihir)');

if (nama === '' && peran === ''){
    alert('Nama harus diisi');
} else if(nama !== '' && peran === ''){
    alert('Halo ' + nama + ' pilih peranmu untuk memulai game!' );
} else if(nama !== '' && peran === 'Ksatria'){
    alert('Selamat datang di Dunia Proxytia, ' + nama);
    alert('Halo ' + peran + '' +nama+ ' kamu dapat menyerang dengan senjatamu!')
} else if(nama !== '' && peran === 'Tabib'){
    alert('Selamat datang di Dunia Proxytia, ' + nama);
    alert('Halo ' +peran+''+nama+ ' kamu akan membantu temanmu yang terluka.');
} else if(nama !=='' && peran === 'Penyihir'){
    alert('Selamat datang di Dunia Proxytia, ' + nama);
    alert('Halo ' +peran+''+ nama+ ' ciptakan keajaiban yang membantu kemenanganmu!');
};