//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
require('./settings')
const {
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
	exec,
	spawn,
	execSync
} = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const hx = require('hxz-api')
const {
	JSDOM
} = require('jsdom')
const speed = require('performance-now')
const {
	performance
} = require('perf_hooks')
const {
	Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const {
	smsg,
	formatp,
	tanggal,
	formatDate,
	getTime,
	isUrl,
	sleep,
	clockString,
	runtime,
	fetchJson,
	getBuffer,
	jsonformat,
	format,
	parseMention,
	getRandom
} = require('./lib/myfunc')
const dgxeon = require('xfarr-api')

//rpg function\\
const {
	addInventoriDarah,
	cekDuluJoinAdaApaKagaDiJson,
	addDarah,
	kurangDarah,
	getDarah
} = require('./storage/user/darah.js')
const {
	cekInventoryAdaAtauGak,
	addInventori,
	addBesi,
	addEmas,
	addEmerald,
	addUmpan,
	addPotion,
	kurangBesi,
	kurangEmas,
	kurangEmerald,
	kurangUmpan,
	kurangPotion,
	getBesi,
	getEmas,
	getEmerald,
	getUmpan,
	getPotion
} = require('./storage/user/alat_tukar.js')
const {
	addInventoriMonay,
	cekDuluJoinAdaApaKagaMonaynyaDiJson,
	addMonay,
	kurangMonay,
	getMonay
} = require('./storage/user/monay.js')
const {
	addInventoriLimit,
	cekDuluJoinAdaApaKagaLimitnyaDiJson,
	addLimit,
	kurangLimit,
	getLimit
} = require('./storage/user/limit.js')
const {
	cekDuluHasilBuruanNya,
	addInventoriBuruan,
	addIkan,
	addAyam,
	addKelinci,
	addDomba,
	addSapi,
	addGajah,
	kurangIkan,
	kurangAyam,
	kurangKelinci,
	kurangDomba,
	kurangSapi,
	kurangGajah,
	getIkan,
	getAyam,
	getKelinci,
	getDomba,
	getSapi,
	getGajah
} = require('./storage/user/buruan.js')
let DarahAwal = global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟', '🐠', '🐡']

//rpg database\\
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
	try {
		var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		var budy = (typeof m.text == 'string' ? m.text : '')
		var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
		const isCmd = body.startsWith(prefix)
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const pushname = m.pushName || "No Name"
		const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
		const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

		const itsMe = m.sender == botNumber ? true : false
		const text = q = args.join(" ")
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const content = JSON.stringify(mek.message)

		//group\\
		const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

		//member\\
		let picaks = [flaming, fluming, flarun, flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.afkTime)) user.afkTime = -1
				if (!('afkReason' in user)) user.afkReason = ''
				if (!isNumber(user.limit)) user.limit = limitUser
			} else global.db.data.users[m.sender] = {
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
			}

			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
				if (!('mute' in chats)) chats.mute = false
				if (!('antilink' in chats)) chats.antilink = false
				if (!('only91' in chats)) chats.only91 = false
			} else global.db.data.chats[m.chat] = {
				mute: false,
				antilink: false,
				only91: false
			}

			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
			if (setting) {
				if (!isNumber(setting.status)) setting.status = 0
				if (!('autobio' in setting)) setting.autobio = false
			} else global.db.data.settings[botNumber] = {
				status: 0,
				autobio: false,
			}

		} catch (err) {
			console.error(err)
		}

		//group target by xeon\\
		const reply = (teks) => {
			XeonBotInc.sendMessage(m.chat, {
				text: teks,
				contextInfo: {}
			}, {
				quoted: m
			})
		}

		const replay = (teks) => {
			XeonBotInc.sendMessage(m.chat, {
				text: teks,
				contextInfo: {}
			}, {
				quoted: m
			})
		}

		//Public & Self\\
		if (!XeonBotInc.public) {
			if (!m.key.fromMe) return
		}

		//Push Message To Console && Auto Read\\
		if (m.message) {
			XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
			console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
		}

		//reset limit every 12 hours\\
		let cron = require('node-cron')
		cron.schedule('00 12 * * *', () => {
			let user = Object.keys(global.db.data.users)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			for (let jid of user) global.db.data.users[jid].limit = limitUser
			console.log('Limit Reseted')
		}, {
			scheduled: true,
			timezone: "Asia/Kolkata"
		})

		//auto set bio\\
		if (db.data.settings[botNumber].autobio) {
			let setting = global.db.data.settings[botNumber]
			if (new Date() * 1 - setting.status > 1000) {
				let uptime = await runtime(process.uptime())
				await XeonBotInc.setStatus(`${XeonBotInc.user.name} | Runtime : ${runtime(uptime)}`)
				setting.status = new Date() * 1
			}
		}



		//auto reply by xeon 🦄
		for (let anji of setik) {
			if (budy === anji) {
				result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
				XeonBotInc.sendMessage(m.chat, {
					sticker: result
				}, {
					quoted: m
				})
			}
		}
		for (let anju of vien) {
			if (budy === anju) {
				result = fs.readFileSync(`./XeonMedia/vn/${anju}.mp3`)
				XeonBotInc.sendMessage(m.chat, {
					audio: result,
					mimetype: 'audio/mp4',
					ptt: true
				}, {
					quoted: m
				})
			}
		}
		for (let anjh of imagi) {
			if (budy === anjh) {
				result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
				XeonBotInc.sendMessage(m.chat, {
					image: result
				}, {
					quoted: m
				})
			}
		}
		for (let anjh of videox) {
			if (budy === anjh) {
				result = fs.readFileSync(`./XeonMedia/vid/${anjh}.mp4`)
				XeonBotInc.sendMessage(m.chat, {
					video: result
				}, {
					quoted: m
				})
			}
		}

		//Mute Chat\\
		if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
			return
		}

		//media detect by 🦄xeon\\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

		//Respon Cmd with media\\
		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
			let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
			let {
				text,
				mentionedJid
			} = hash
			let messages = await generateWAMessage(m.chat, {
				text: text,
				mentions: mentionedJid
			}, {
				userJid: XeonBotInc.user.id,
				quoted: m.quoted && m.quoted.fakeObj
			})
			messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
			messages.key.id = m.key.id
			messages.pushName = m.pushName
			if (m.isGroup) messages.participant = m.sender
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			}
			XeonBotInc.ev.emit('messages.upsert', msg)
		}

		if (('family100' + m.chat in _family100) && isCmd) {
			kuis = true
			let room = _family100['family100' + m.chat]
			let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
			let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
			if (!isSurender) {
				let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
				if (room.terjawab[index]) return !0
				room.terjawab[index] = m.sender
			}
			let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
			let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
			XeonBotInc.sendText(m.chat, caption, m, {
				contextInfo: {
					mentionedJid: parseMention(caption)
				}
			}).then(mes => {
				return _family100['family100' + m.chat].pesan = mesg
			}).catch(_ => _)
			if (isWin || isSurender) delete _family100['family100' + m.chat]
		}

		if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklagu[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess song',
					buttonText: {
						displayText: 'Guess The Song'
					},
					type: 1
				}], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebaklagu[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = kuismath[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
				delete kuismath[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakgambar[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess picture',
					buttonText: {
						displayText: 'Guess The Picture'
					},
					type: 1
				}], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebakgambar[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkata[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess word',
					buttonText: {
						displayText: 'Guess The Word'
					},
					type: 1
				}], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebakkata[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = caklontong[m.sender.split('@')[0]]
			deskripsi = caklontong_desk[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess blank',
					buttonText: {
						displayText: 'Guess The Blank'
					},
					type: 1
				}], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete caklontong[m.sender.split('@')[0]]
				delete caklontong_desk[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkalimat[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess sentence',
					buttonText: {
						displayText: 'Guess The Sentence'
					},
					type: 1
				}], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebakkalimat[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklirik[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess lyrics',
					buttonText: {
						displayText: 'Guess The Lyrics'
					},
					type: 1
				}], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebaklirik[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaktebakan[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess riddle',
					buttonText: {
						displayText: 'Guess The Riddle'
					},
					type: 1
				}], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebaktebakan[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		//TicTacToe\\
		this.game = this.game ? this.game : {}
		let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			//reply(`[DEBUG]\n${parseInt(m.text)}`)
			if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				reply({
					'-3': 'Game Has Ended',
					'-2': 'Invalid',
					'-1': 'Invalid Position',
					0: 'Invalid Position',
				} [ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				} [v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
				room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, {
				mentions: parseMention(str)
			})
			await XeonBotInc.sendText(room.o, str, m, {
				mentions: parseMention(str)
			})
			if (isTie || isWin) {
				delete this.game[room.id]
			}
		}

		//Suit PvP\\
		this.suit = this.suit ? this.suit : {}
		let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
					XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
					delete this.suit[roof.id]
					return !0
				}
				roof.status = 'play'
				roof.asal = m.chat
				clearTimeout(roof.waktu)
				//delete roof[roof.id].waktu
				XeonBotInc.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, {
					mentions: [roof.p, roof.p2]
				})
				if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
				if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
					}
					delete this.suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /scissors/i
			let b = /rock/i
			let k = /paper/i
			let reg = /^(scissors|rock|paper)/i
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0]
				roof.text = m.text
				reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
				if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
				if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, {
					mentions: [roof.p, roof.p2]
				})
				delete this.suit[roof.id]
			}
		}

		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.data.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
		}

		if (db.data.users[m.sender].afkTime > -1) {
			let user = global.db.data.users[m.sender]
			reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
			user.afkTime = -1
			user.afkReason = ''
		}
		switch (command) {
			case 'join': {
				if (!isCreator) return replay(`${mess.owner}`)
				if (!text) return replay(`Enter The Group Link!`)
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
				reply(mess.wait)
				let result = args[0].split('https://chat.whatsapp.com/')[1]
				await XeonBotInc.groupAcceptInvite(result)
			}
			break
		case 'kick': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			result = fs.readFileSync(`./XeonMedia/vn/Shit.mp3`)
			XeonBotInc.sendMessage(m.chat, {
				audio: result,
				mimetype: 'audio/mp4',
				ptt: true
			}, {
				quoted: m
			})
			await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove')
		}
		break
		case 'sticker':
		case 's':
		case 'stickergif':
		case 'sgif': {
			if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
			reply(mess.wait)
			if (/image/.test(mime)) {
				let media = await quoted.download()
				let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
				let media = await quoted.download()
				let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else {
				reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
			}
		}
		break
		case 'tagall': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
			for (let mem of participants) {
				teks += `🐶 @${mem.id.split('@')[0]}\n`
			}
			XeonBotInc.sendMessage(m.chat, {
				text: teks,
				mentions: participants.map(a => a.id)
			}, {
				quoted: m
			})
		}
		break
		case 'hidetag': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			XeonBotInc.sendMessage(m.chat, {
				text: q ? q : '',
				mentions: participants.map(a => a.id)
			}, {
				quoted: m
			})
		}
		break
		case 'instagramx':
		case 'igx':
		case 'ig':
		case 'instagram':
		case 'igdlx': {
			if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'

			let urlnya = text

			hx.igdl(urlnya)

				.then(async (result) => {
					XeonBotInc.sendMessage(m.chat, {
						image: {
							url: result.user.profilePicUrl
						},
						jpegThumbnail: await getBuffer(result.user.profilePicUrl),
						caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Jumlah Media :* ${result.medias.length}\n*⬤ Url :* ${text}`
					}, {
						quoted: m
					})
					for (let i of result.medias) {
						if (i.url.includes('mp4')) {
							let link = await getBuffer(i.url)
							XeonBotInc.sendMessage(m.chat, {
								video: link,
								jpegThumbnail: await getBuffer(i.preview),
								caption: `*Instagram ${i.type}*`
							}, {
								quoted: m
							})
						} else {
							let link = await getBuffer(i.url)
							XeonBotInc.sendMessage(m.chat, {
								image: link,
								jpegThumbnail: await getBuffer(i.preview),
								caption: `*Instagram ${i.type}*`
							}, {
								quoted: m
							})
						}
					}
				}).catch((err) => m.reply(`*Sorry Instagram Instagram ${text} Not found*, ${err}`))
		}
		break
		case 'promote': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote')
		}
		break
		case 'demote': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote')
		}
		break
		case 'block': {
			if (!isCreator) return replay(`${mess.owner}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await XeonBotInc.updateBlockStatus(users, 'block')
		}
		break
		case 'unblock': {
			if (!isCreator) return replay(`${mess.owner}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await XeonBotInc.updateBlockStatus(users, 'unblock')
		}
		break
		case 'add': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add')
		}
		break
		case 'leave': {
			if (!isCreator) return replay(`${mess.owner}`)
			await XeonBotInc.groupLeave(m.chat)
		}
		break
		case 'antilink': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			if (args[0] === "on") {
				if (db.data.chats[m.chat].antilink) return reply(`Activated`)
				db.data.chats[m.chat].antilink = true
				reply(`Antilink Active !`)
			} else if (args[0] === "off") {
				if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
				db.data.chats[m.chat].antilink = false
				reply(`Antilink Inactive !`)
			} else {
				let buttons = [{
						buttonId: 'antilink on',
						buttonText: {
							displayText: 'On'
						},
						type: 1
					},
					{
						buttonId: 'antilink off',
						buttonText: {
							displayText: 'Off'
						},
						type: 1
					}
				]
				await XeonBotInc.sendButtonText(m.chat, buttons, `Antilink Mode`, XeonBotInc.user.name, m)
			}
		}
		break
		case 'gclink':
		case 'grouplink': {
			if (!m.isGroup) return replay(`${mess.group}`)
			let response = await XeonBotInc.groupInviteCode(m.chat)
			XeonBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, {
				detectLink: true
			})
		}
		break
		case 'delete':
		case 'del': {
			if (!m.quoted) reply(false)
			let {
				chat,
				fromMe,
				id,
				isBaileys
			} = m.quoted
			if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
			XeonBotInc.sendMessage(m.chat, {
				delete: {
					remoteJid: m.chat,
					fromMe: true,
					id: m.quoted.id,
					participant: m.quoted.sender
				}
			})
		}
		break
		case 'bcgc':
		case 'bcgroup': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} I am Handsome`)
			let getGroups = await XeonBotInc.groupFetchAllParticipating()
			let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
			let anu = groups.map(v => v.id)
			reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
			for (let i of anu) {
				await sleep(1500)
				let btn = [{
					quickReplyButton: {
						displayText: '🎀Menu🎀',
						id: 'menu'
					}
				}]
				let txt = `「 Cheems Bot Broadcast 」\n\n${text}`
				XeonBotInc.send5ButImg(i, txt, XeonBotInc.user.name, global.thumb, btn)
			}
			reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
		}
		break
		case 'sgif': {
			if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
			reply(mess.wait)
			if (/image/.test(mime)) {
				let media = await quoted.download()
				let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
				let media = await quoted.download()
				let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else {
				reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
			}
		}
		break
		case 'toimage':
		case 'toimg': {
			if (!quoted) return reply(`Reply Image`)
			if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
			reply(mess.wait)
			let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			let ran = await getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) reply(err)
				let buffer = fs.readFileSync(ran)
				XeonBotInc.sendMessage(m.chat, {
					image: buffer
				}, {
					quoted: m
				})
				fs.unlinkSync(ran)
			})
		}
		break
		case 'tomp4':
		case 'tovideo': {
			if (!quoted) reply(`Reply Image`)
			if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
			reply(mess.wait)
			let {
				webp2mp4File
			} = require('./lib/uploader')
			let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			let webpToMp4 = await webp2mp4File(media)
			await XeonBotInc.sendMessage(m.chat, {
				video: {
					url: webpToMp4.result,
					caption: 'Convert Webp To Video'
				}
			}, {
				quoted: m
			})
			await fs.unlinkSync(media)
		}
		break
		case 'toaud':
		case 'toaudio': {
			if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
			if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			let {
				toAudio
			} = require('./lib/converter')
			let audio = await toAudio(media, 'mp4')
			XeonBotInc.sendMessage(m.chat, {
				audio: audio,
				mimetype: 'audio/mpeg'
			}, {
				quoted: m
			})
		}
		break
		case 'tomp3': {
			if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
			if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
			if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			let {
				toAudio
			} = require('./lib/converter')
			let audio = await toAudio(media, 'mp4')
			XeonBotInc.sendMessage(m.chat, {
				document: audio,
				mimetype: 'audio/mpeg',
				fileName: `Converted By ${XeonBotInc.user.name}.mp3`
			}, {
				quoted: m
			})
		}
		break
		case 'tourl': {
			reply(mess.wait)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./lib/uploader')
			let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			if (/image/.test(mime)) {
				let anu = await TelegraPh(media)
				reply(util.format(anu))
			} else if (!/image/.test(mime)) {
				let anu = await UploadFileUgu(media)
				reply(util.format(anu))
			}
			await fs.unlinkSync(media)
		}
		break
		case 'yts':
		case 'ytsearch': {
			if (!text) return replay(`Example : ${prefix + command} Anime Story Whatsapp`)
			let yts = require("yt-search")
			let search = await yts(text)
			let teks = 'YouTube Search\n\n Result From ' + text + '\n\n'
			let no = 1
			for (let i of search.all) {
				teks += `🐶 No : ${no++}\n🐶 Type : ${i.type}\n🐶 Video ID : ${i.videoId}\n🐶 Title : ${i.title}\n🐶 Views : ${i.views}\n🐶 Duration : ${i.timestamp}\n🐶 Uploaded On : ${i.ago}\n🐶 Author : ${i.author.name}\n🐶 Url : ${i.url}\n\n─────────────────\n\n`
			}
			XeonBotInc.sendMessage(m.chat, {
				image: {
					url: search.all[0].thumbnail
				},
				caption: teks
			}, {
				quoted: m
			})
		}
		break
		case 'google': {
			if (!text) return reply(`Example : ${prefix + command} cheems shiba inu`)
			let google = require('google-it')
			google({
				'query': text
			}).then(res => {
				let teks = `Google Search Title : ${text}\n\n`
				for (let g of res) {
					teks += `🐶 *Title* : ${g.title}\n`
					teks += `🐶 *Description* : ${g.snippet}\n`
					teks += `🐶 *Link* : ${g.link}\n\n────────────────────────\n\n`
				}
				reply(teks)
			})
		}
		break
		case 'gimage':
		case 'googleimage': {
			if (!text) return reply(`Example : ${prefix + command} cheems`)
			let gis = require('g-i-s')
			gis(text, async (error, result) => {
				n = result
				images = n[Math.floor(Math.random() * n.length)].url
				let buttons = [{
					buttonId: `gimage ${text}`,
					buttonText: {
						displayText: '➡️➡️Next Image➡️➡️'
					},
					type: 1
				}]
				let buttonMessage = {
					image: {
						url: images
					},
					caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
					footer: XeonBotInc.user.name,
					buttons: buttons,
					headerType: 4
				}
				XeonBotInc.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			})
		}
		break
		case 'play':
		case 'song':
		case 'ytplay': {
			if (!text) return reply(`Example : ${prefix + command} Stay`)
			let yts = require("yt-search")
			let search = await yts(text)
			let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
			let buttons = [{
					buttonId: `ytmp3 ${anu.url}`,
					buttonText: {
						displayText: '🎶Audio🎶'
					},
					type: 1
				},
				{
					buttonId: `ytmp4 ${anu.url}`,
					buttonText: {
						displayText: '📽️Video📽️'
					},
					type: 1
				}
			]
			let buttonMessage = {
				image: {
					url: anu.thumbnail
				},
				caption: `
🐶 Title : ${anu.title}
🐶 Ext : Search
🐶 ID : ${anu.videoId}
🐶 Duration : ${anu.timestamp}
🐶 Viewes : ${anu.views}
🐶 Uploaded On : ${anu.ago}
🐶 Author : ${anu.author.name}
🐶 Channel : ${anu.author.url}
🐶 Description : ${anu.description}
🐶 Url : ${anu.url}`,
				footer: XeonBotInc.user.name,
				buttons: buttons,
				headerType: 4
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'ytmp3':
		case 'getmusic':
		case 'ytaudio': {
			let {
				yta
			} = require('./lib/y2mate')
			if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
			let quality = args[1] ? args[1] : '320kbps'
			let media = await yta(text, quality)
			if (media.filesize >= 999999) return reply('File Over Limit ' + util.format(media))
			XeonBotInc.sendImage(m.chat, media.thumb, `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${isUrl(text)}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '320kbps'}`, m)
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: media.dl_link
				},
				mimetype: 'audio/mpeg',
				fileName: `${media.title}.mp3`
			}, {
				quoted: m
			})
		}
		break
		case 'ytmp4':
		case 'getvideo':
		case 'ytvideo': {
			let {
				ytv
			} = require('./lib/y2mate')
			if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
			let quality = args[1] ? args[1] : '360p'
			let media = await ytv(text, quality)
			if (media.filesize >= 999999) return reply('File Over Limit ' + util.format(media))
			XeonBotInc.sendMessage(m.chat, {
				video: {
					url: media.dl_link
				},
				mimetype: 'video/mp4',
				fileName: `${media.title}.mp4`,
				caption: `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${isUrl(text)}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '360p'}`
			}, {
				quoted: m
			})
		}
		break
		case 'getmusicxxx': {
			let {
				yta
			} = require('./lib/y2mate')
			let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
			let quality = args[1] ? args[1] : '128kbps'
			let media = await yta(urls[text - 1], quality)
			if (media.filesize >= 100000) return reply('File Over Limit ' + util.format(media))
			XeonBotInc.sendImage(m.chat, media.thumb, `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${urls[text - 1]}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '128kbps'}`, m)
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: media.dl_link
				},
				mimetype: 'audio/mpeg',
				fileName: `${media.title}.mp3`
			}, {
				quoted: m
			})
		}
		break
		case 'getvideoxxx': {
			let {
				ytv
			} = require('./lib/y2mate')
			if (!text) throw `Example : ${prefix + command} 1`
			if (!m.quoted) throw 'Reply Message'
			if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
			let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
			if (!urls) throw `Maybe The Message You Replied Does Not Contain The Video Search Result`
			let quality = args[1] ? args[1] : '360p'
			let media = await ytv(urls[text - 1], quality)
			if (media.filesize >= 100000) return reply('File Over Limit ' + util.format(media))
			XeonBotInc.sendMessage(m.chat, {
				video: {
					url: media.dl_link
				},
				mimetype: 'video/mp4',
				fileName: `${media.title}.mp4`,
				caption: `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${urls[text - 1]}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '360p'}`
			}, {
				quoted: m
			})
		}
		break
		case 'ping':
		case 'botstatus':
		case 'statusbot': {
			const used = process.memoryUsage()
			const cpus = os.cpus().map(cpu => {
				cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
				return cpu
			})
			const cpu = cpus.reduce((last, cpu, _, {
				length
			}) => {
				last.total += cpu.total
				last.speed += cpu.speed / length
				last.times.user += cpu.times.user
				last.times.nice += cpu.times.nice
				last.times.sys += cpu.times.sys
				last.times.idle += cpu.times.idle
				last.times.irq += cpu.times.irq
				return last
			}, {
				speed: 0,
				total: 0,
				times: {
					user: 0,
					nice: 0,
					sys: 0,
					idle: 0,
					irq: 0
				}
			})
			let timestamp = speed()
			let latensi = speed() - timestamp
			neww = performance.now()
			oldd = performance.now()
			respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
			reply(respon)
		}
		break
		case 'speedtest': {
			reply('Testing Speed...')
			let cp = require('child_process')
			let {
				promisify
			} = require('util')
			let exec = promisify(cp.exec).bind(cp)
			let o
			try {
				o = await exec('python3 speed.py')
			} catch (e) {
				o = e
			} finally {
				let {
					stdout,
					stderr
				} = o
				if (stdout.trim()) reply(stdout)
				if (stderr.trim()) reply(stderr)
			}
		}
		break
		default:
			if (budy.startsWith('=>')) {
				if (!isCreator) return reply(mess.owner)

				function Return(sul) {
					sat = JSON.stringify(sul, null, 2)
					bang = util.format(sat)
					if (sat == undefined) {
						bang = util.format(sul)
					}
					reply(bang)
				}
				try {
					reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) {
					reply(String(e))
				}
			}

			if (budy.startsWith('>')) {
				if (!isCreator) return reply(mess.owner)
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await reply(evaled)
				} catch (err) {
					await reply(String(err))
				}
			}

			if (budy.startsWith('$')) {
				if (!isCreator) return reply(mess.owner)
				exec(budy.slice(2), (err, stdout) => {
					if (err) return reply(err)
					if (stdout) return reply(stdout)
				})
			}

			if (db.data.chats[m.chat].antilink) {
				var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
				var regex = new RegExp(expression);
				if (budy.match(regex)) {
					if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
					let gclink = (`https://chat.whatsapp.com/` + await XeonBotInc.groupInviteCode(m.chat))
					let isLinkThisGc = new RegExp(gclink, 'i')
					let isgclink = isLinkThisGc.test(m.text)
					if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
					if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
					if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🐶`)
					XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}

			if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
				this.anonymous = this.anonymous ? this.anonymous : {}
				let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
				if (room) {
					if (/^.*(next|leave|start)/.test(m.text)) return
					if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
					let other = [room.a, room.b].find(user => user !== m.sender)
					m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
						contextInfo: {
							...m.msg.contextInfo,
							forwardingScore: 0,
							isForwarded: true,
							participant: other
						}
					} : {})
				}
				return !0
			}

			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = global.db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
			}
		}



	} catch (err) {
		m.reply(util.format(err))
	}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})