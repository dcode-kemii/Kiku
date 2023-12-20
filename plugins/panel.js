const moment = require("moment-timezone");
const fetch = require('node-fetch')
const crypto = require('crypto')
const { sizeFormatter } = require('human-readable')

const format = sizeFormatter()
let handler = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {
const linkgc = '-' // Group


// Time
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    const date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

	const webPage = domain // Web Page
    
    switch (command) {
        case "1gb": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) return conn.reply(m.chat, `• *Example :* ${_p + command} kemii,${nomorown}`, m)
            let nomor = t[1]
			
			let name = t[0];
			let memo = '1024'
			let egg = eggs
			let loc = locs
			let memo_disk = memo.split`/`;
			let cpu = '40'

            //let password
            let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomor + "@s.whatsapp.net";

            if (!u) return conn.reply(m.chat, `• *Example :* ${_p + command} kemii,${nomorown}`, m)
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = name + "001"

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": name + profil.toString() + "@gmail.com", // Email
                    "username": name + profil.toString(), // Username
                    "first_name": name + profil.toString(), // Nama Depan
                    "last_name": name, // Nama Belakang
                    "language": "en", // Bahasa
                    "password": password // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes
			await conn.sendMessage(u, {
                text: `*===[ Pesanan Panel ]===*\n
Id: ${user.id}                
Username: ${user.username}
Password: ${password}
Login: ${webPage}
Aktif : 1 Bulan
`,})
			
			let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let dataa = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z ${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=$(echo ${CUSTOM_ENVIRONMENT_VARIABLES} | tr ";" "\n");      for line in $vars;     do export $line;     done fi;  /usr/local/bin/' + "${CMD_RUN}"

            let f3 = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": `Dibuat Pada ${date} Aktif 1Bulan`,
                    "user": user.id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "npm start"
                    },
                    "limits": {
                        "memory": 1024,
                        "swap": 0,
                        "disk": 1024,
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f3.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            await m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }
            break
          case "2gb": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) return conn.reply(m.chat, `• *Example :* ${_p + command} kemii,${nomorown}`, m)
            let nomor = t[1]
			
			let name = t[0];
			let memo = '2048'
			let egg = eggs
			let loc = locs
			let memo_disk = memo.split`/`;
			let cpu = '70'

            //let password
            let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomor + "@s.whatsapp.net";

            if (!u) return conn.reply(m.chat, `• *Example :* ${_p + command} kemii,${nomorown}`, m)
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = name + "001"

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": name + profil.toString() + "@gmail.com", // Email
                    "username": name + profil.toString(), // Username
                    "first_name": name + profil.toString(), // Nama Depan
                    "last_name": name, // Nama Belakang
                    "language": "en", // Bahasa
                    "password": password // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes
			await conn.sendMessage(u, {
                text: `*===[ Pesanan Panel ]===*\n
Id: ${user.id}                
Username: ${user.username}
Password: ${password}
Login: ${webPage}
Aktif : 1 Bulan
`,})
			
			let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let dataa = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z ${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=$(echo ${CUSTOM_ENVIRONMENT_VARIABLES} | tr ";" "\n");      for line in $vars;     do export $line;     done fi;  /usr/local/bin/' + "${CMD_RUN}"

            let f3 = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": `Dibuat Pada ${date} Aktif 1Bulan`,
                    "user": user.id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "npm start"
                    },
                    "limits": {
                        "memory": 2048,
                        "swap": 0,
                        "disk": 2048,
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f3.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            await m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }  
            break
            // Takashi Kemii
        case "3gb": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) throw `• *Example :* ${_p + command} kemii,${nomorown}`
            let nomor = t[1]
			
			let name = t[0];
			let memo = '3072'
			let egg = eggs
			let loc = locs
			let memo_disk = memo.split`/`;
			let cpu = '100'

            //let password
            let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomor + "@s.whatsapp.net";

            if (!u) throw `• *Example :* ${_p + command} kemii,${nomorown}`
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = name + "001"

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": name + profil.toString() + "@gmail.com", // Email
                    "username": name + profil.toString(), // Username
                    "first_name": name + profil.toString(), // Nama Depan
                    "last_name": name, // Nama Belakang
                    "language": "en", // Bahasa
                    "password": password // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes
			await conn.sendMessage(u, {
                text: `*===[ Pesanan Panel ]===*\n
Id: ${user.id}                
Username: ${user.username}
Password: ${password}
Login: ${webPage}
Aktif : 1 Bulan
`,})
			
			let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let dataa = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z ${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=$(echo ${CUSTOM_ENVIRONMENT_VARIABLES} | tr ";" "\n");      for line in $vars;     do export $line;     done fi;  /usr/local/bin/' + "${CMD_RUN}"

            let f3 = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": `Dibuat Pada ${date} Aktif 1Bulan`,
                    "user": user.id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "npm start"
                    },
                    "limits": {
                        "memory": 3072,
                        "swap": 0,
                        "disk": 3072,
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f3.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            await m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }
            break
            // Takashi Kemii
        case "4gb": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) throw`• *Example :* ${_p + command} kemii,${nomorown}`
            let nomor = t[1]
			
			let name = t[0];
			let memo = '4114'
			let egg = eggs
			let loc = locs
			let memo_disk = memo.split`/`;
			let cpu = '120'

            //let password
            let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomor + "@s.whatsapp.net";

            if (!u) throw`• *Example :* ${_p + command} kemii,${nomorown}`
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = name + "001"

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": name + profil.toString() + "@gmail.com", // Email
                    "username": name + profil.toString(), // Username
                    "first_name": name + profil.toString(), // Nama Depan
                    "last_name": name, // Nama Belakang
                    "language": "en", // Bahasa
                    "password": password // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes
			await conn.sendMessage(u, {
                text: `*===[ Pesanan Panel ]===*\n
Id: ${user.id}                
Username: ${user.username}
Password: ${password}
Login: ${webPage}
Aktif : 1 Bulan
`,})
			
			let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let dataa = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z ${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=$(echo ${CUSTOM_ENVIRONMENT_VARIABLES} | tr ";" "\n");      for line in $vars;     do export $line;     done fi;  /usr/local/bin/' + "${CMD_RUN}"

            let f3 = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": `Dibuat Pada ${date} Aktif 1Bulan`,
                    "user": user.id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "npm start"
                    },
                    "limits": {
                        "memory": 4114,
                        "swap": 0,
                        "disk": 4114,
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f3.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            await m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }
            break
            // Takashi Kemii
        case "5gb": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) throw`• *Example :* ${_p + command} kemii,${nomorown}`
            let nomor = t[1]
			
			let name = t[0];
			let memo = '5138'
			let egg = eggs
			let loc = locs
			let memo_disk = memo.split`/`;
			let cpu = '140'

            //let password
            let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomor + "@s.whatsapp.net";

            if (!u) throw `• *Example :* ${_p + command} kemii,${nomorown}`
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = name + "001"

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": name + profil.toString() + "@gmail.com", // Email
                    "username": name + profil.toString(), // Username
                    "first_name": name + profil.toString(), // Nama Depan
                    "last_name": name, // Nama Belakang
                    "language": "en", // Bahasa
                    "password": password // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes
			await conn.sendMessage(u, {
                text: `*===[ Pesanan Panel ]===*\n
Id: ${user.id}                
Username: ${user.username}
Password: ${password}
Login: ${webPage}
Aktif : 1 Bulan
`,})
			
			let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let dataa = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z ${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=$(echo ${CUSTOM_ENVIRONMENT_VARIABLES} | tr ";" "\n");      for line in $vars;     do export $line;     done fi;  /usr/local/bin/' + "${CMD_RUN}"

            let f3 = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": `Dibuat Pada ${date} Aktif 1Bulan`,
                    "user": user.id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "npm start"
                    },
                    "limits": {
                        "memory": 5138,
                        "swap": 0,
                        "disk": 5138,
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f3.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            await m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }
            break
            // Takashi Kemii
        case "6gb": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) throw `• *Example :* ${_p + command} kemii,${nomorown}`
            let nomor = t[1]
			
			let name = t[0];
			let memo = '6144'
			let egg = eggs
			let loc = locs
			let memo_disk = memo.split`/`;
			let cpu = '170'

            //let password
            let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomor + "@s.whatsapp.net";

            if (!u) throw`• *Example :* ${_p + command} kemii,${nomorown}`
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = name + "001"

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": name + profil.toString() + "@gmail.com", // Email
                    "username": name + profil.toString(), // Username
                    "first_name": name + profil.toString(), // Nama Depan
                    "last_name": name, // Nama Belakang
                    "language": "en", // Bahasa
                    "password": password // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes
			await conn.sendMessage(u, {
                text: `*===[ Pesanan Panel ]===*\n
Id: ${user.id}                
Username: ${user.username}
Password: ${password}
Login: ${webPage}
Aktif : 1 Bulan
`,})
			
			let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let dataa = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z ${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=$(echo ${CUSTOM_ENVIRONMENT_VARIABLES} | tr ";" "\n");      for line in $vars;     do export $line;     done fi;  /usr/local/bin/' + "${CMD_RUN}"

            let f3 = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": `Dibuat Pada ${date} Aktif 1Bulan`,
                    "user": user.id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "npm start"
                    },
                    "limits": {
                        "memory": 6144,
                        "swap": 0,
                        "disk": 6144,
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f3.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            await m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }
            break
            // Takashi Kemii
        case "7gb": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) throw`• *Example :* ${_p + command} kemii,${nomorown}`
            let nomor = t[1]
			
			let name = t[0];
			let memo = '7168'
			let egg = eggs
			let loc = locs
			let memo_disk = memo.split`/`;
			let cpu = '200'

            //let password
            let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomor + "@s.whatsapp.net";

            if (!u) throw`• *Example :* ${_p + command} kemii,${nomorown}`
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = name + "001"

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": name + profil.toString() + "@gmail.com", // Email
                    "username": name + profil.toString(), // Username
                    "first_name": name + profil.toString(), // Nama Depan
                    "last_name": name, // Nama Belakang
                    "language": "en", // Bahasa
                    "password": password // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes
			await conn.sendMessage(u, {
                text: `*===[ Pesanan Panel ]===*\n
Id: ${user.id}                
Username: ${user.username}
Password: ${password}
Login: ${webPage}
Aktif : 1 Bulan
`,})
			
			let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let dataa = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z ${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=$(echo ${CUSTOM_ENVIRONMENT_VARIABLES} | tr ";" "\n");      for line in $vars;     do export $line;     done fi;  /usr/local/bin/' + "${CMD_RUN}"

            let f3 = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": `Dibuat Pada ${date} Aktif 1Bulan`,
                    "user": user.id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "npm start"
                    },
                    "limits": {
                        "memory": 7168,
                        "swap": 0,
                        "disk": 7168,
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f3.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            await m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }
            break
            // Takashi Kemii
        case "unli": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) throw`• *Example :* ${_p + command} kemii,${nomorown}`
            let nomor = t[1]
			
			let name = t[0];
			let memo = '0'
			let egg = eggs
			let loc = locs
			let memo_disk = memo.split`/`;
			let cpu = '0'

            //let password
            let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomor + "@s.whatsapp.net";

            if (!u) throw`• *Example :* ${_p + command} kemii,${nomorown}`
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = name + "001"

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": name + profil.toString() + "@gmail.com", // Email
                    "username": name + profil.toString(), // Username
                    "first_name": name + profil.toString(), // Nama Depan
                    "last_name": name, // Nama Belakang
                    "language": "en", // Bahasa
                    "password": password // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes
			await conn.sendMessage(u, {
                text: `*===[ Pesanan Panel ]===*\n
Id: ${user.id}                
Username: ${user.username}
Password: ${password}
Login: ${webPage}
Aktif : 1 Bulan
`,})
			
			let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let dataa = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z ${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=$(echo ${CUSTOM_ENVIRONMENT_VARIABLES} | tr ";" "\n");      for line in $vars;     do export $line;     done fi;  /usr/local/bin/' + "${CMD_RUN}"

            let f3 = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": `Dibuat Pada ${date} Aktif 1Bulan`,
                    "user": user.id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "npm start"
                    },
                    "limits": {
                        "memory": 0,
                        "swap": 0,
                        "disk": 0,
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f3.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            await m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }
            
    }
}
handler.help = [
"1gb",
"2gb",
"3gb",
"4gb",
"5gb",
"6gb",
"7gb",
"unli"
].map(v => v + ' *<name>,<number>*')
handler.command = /^(1gb|2gb|3gb|4gb|5gb|6gb|7gb|unli)$/i  
handler.tags = ['panel']
handler.limit = 5
handler.owner = true
module.exports = handler