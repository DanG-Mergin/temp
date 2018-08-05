// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	socketIoConfig: { 
		url: 'http://192.168.89.32:3000', options: {} 
	},
	TESTsocketIoConfig: {
		url: 'http://localhost:5000', options: {} //for testing files when dev server is down
	}
};
