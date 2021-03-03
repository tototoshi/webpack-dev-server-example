.PHONY: install build start clean

build:
	yarn webpack

install:
	yarn install

start:
	yarn webpack-dev-server --open

clean:
	rm -rf dist/

