SRC = ./src
OUT = ./assets

CACHE = ./cache

NODE_MODULES = ./node_modules
NPM = /usr/bin/npm
NODE = /usr/bin/node
BABEL_NODE = ./node_modules/babel-cli/bin/babel-node.js
WEBPACK = ./node_modules/webpack/bin/webpack.js
ESLINT = ./node_modules/eslint/bin/eslint.js

# Tests
MOCHA = ./node_modules/mocha/bin/mocha
JEST = ./node_modules/jest-cli/bin/jest.js
# JASMINE = ./node_modules/jasmine/bin/jasmine.js

.PHONY: test clean all build prepare lint configure bundle server mocha jest

all: clean configure build bundle

build: export NODE_ENV = production
build: $(SRC)/*.js assets
	cp $(SRC)/index.html $(OUT)/
	$(WEBPACK) --optimize-minimize --optimize-dedupe --progress

dev: assets
	cp $(SRC)/index.html $(OUT)/
	$(WEBPACK) --progress -w

server:
	$(BABEL_NODE) server/server.js

mocha:
	$(MOCHA) -c --require babel-register mocha_test/* --reporter nyan

jest:
	$(JEST)

assets:
	mkdir -p assets

clean:
	rm -rf $(OUT) $(NODE_MODULES)

# test: $(if $(wildcard $(JASMINE)),,configure) build
# 	$(JASMINE)

lint: $(if $(wildcard $(ESLINT)),,configure)
	$(ESLINT) $(SRC)

# prepare запускать только когда добавляется/удаляется
# npm-модуль из build.packages.list или dist.packages.list
prepare:
	rm -rf $(CACHE) $(NODE_MODULES)
	npm --cache=$(CACHE) install

configure: clean
	$(NPM) \
		--offline \
		--cache=$(CACHE) \
		--cache-min 999999999 \
		--progress=true \
		install

bundle:
	rm -rf $(NODE_MODULES)
	$(NPM) \
		--offline \
		--cache=$(CACHE) \
		--cache-min 999999999 \
		--progress=true \
		install --production

# https://github.com/npm/npm/issues/3429
# https://github.com/npm/npm/issues/2568 (!!!!!)
# See npm link. With bundleDependencies that should cover the entire thing.
# --no-registry
# npm --offline --cache=cache --cache-min 999999999 install --prefix=qwe webpack
