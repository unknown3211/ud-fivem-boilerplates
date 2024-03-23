fx_version 'cerulean'
game 'gta5'
description 'UD Typescript + Lua Template'

client_scripts {
	'typescript/build/client/client.js',
	'lua/client/*.lua',
}

server_scripts {
	'typescript/build/server/server.js',
	'lua/server/*.lua',
}

shared_scripts {
	'lua/shared/*.lua',
}