
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var mainMenu = '```'

exports.listmenu = (sender,pushname,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
 *-------γ-γ[  πΊπππ’-π±ππ ]γ-γ------*

 _*Info User*_π
 Nama : ${pushname}
 Premium : ${premnya}

 _*Info Bot*_π€
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}

*Default Menu*
 ${prefix}sticker/s/swm
 ${prefix}welcome on/off
 ${prefix}translate

*Downloader Menu*
 ${prefix}yts
 ${prefix}ytmp3
 ${prefix}ytmp4
 ${prefix}tiktok

*Search Image Menu*
 ${prefix}gimage
 ${prefix}pinterest

*Primbon Menu*
 ${prefix}artinama
 ${prefix}artimimpi

*Ai Menu*
 ${prefix}ai
 ${prefix}img

*Audio Menu*
 ${prefix}reverse
 ${prefix}earrape
 ${prefix}tupai 
 ${prefix}nightcore
 ${prefix}blown
 ${prefix}fat
 ${prefix}fast
 ${prefix}slow
 ${prefix}bass
 ${prefix}deep
 ${prefix}smooth
 ${prefix}robot

*Random Menu*
 ${prefix}tourl
 ${prefix}bitly
 ${prefix}darkjokes
 ${prefix}faktaseram
 ${prefix}infogempa
 ${prefix}jadwaltv
 ${prefix}toimg/tovideo `
}

exports.rulesBot = () =>{
return`*ββγ RULES-BOT γββ*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`ββγ *MENU DONATE* γββ

Hi *${cekName}* ${ucapanWaktu} ππ»

*Payment pulsa*
Number: 081251549899
A/N: __

*Payment Dana*
Number: 081251549899
A/N: -_-

${mainMenu}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${mainMenu}

ββγ *THX FOR YOU* γββ`
}

exports.infoOwner = () =>{
return`ββγ *INFO OWNER* γββ

 *Data Profil*
 β’ *Nama:* Dani
 β’ *Umur:* 16 tahun
 β’ *Hoby:* Turu/tiktok
 β’ *Askot:* Palembang
 β’ *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 β’ *Whatsapp:* 081348106274
 β’ *Youtube:* DaniMaker
 β’ *Github:* -
 `
}