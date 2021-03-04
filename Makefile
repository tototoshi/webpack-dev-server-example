.PHONY: install build serve clean

build:
	yarn webpack

install:
	yarn install

serve:
	yarn webpack serve

clean:
	rm -rf dist/

