install:
		npm install
start:
		npx babel-node src/bin/brain-games.js	
publishdry:
		npm publish --dry-run
lint:
		npx eslint .
