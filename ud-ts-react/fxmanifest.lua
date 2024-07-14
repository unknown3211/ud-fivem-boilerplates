fx_version "cerulean"
game 'gta5'
author 'UnKnownJohn'
description 'UD FiveM TS + TSX Boilerplate'
version '1.0.0'

ui_page 'frontend/build/index.html'

client_scripts {
  'dist/client.js',
}

server_scripts {
  'dist/server.js',
}

files {
	'frontend/build/index.html',
	'frontend/build/**/*',
}

lua54 'yes'