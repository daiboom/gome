# Makefile

COMMIT ?= $(shell git rev-parse --short=8 HEAD)
YARN := $(shell command -v yarn 2> /dev/null)

BINARY=gome
CTLBINARY=gomectl

BUILD_TYPE ?= cli


build:
	@echo "빌드 중..."
	mkdir -p ./dist
ifeq ($(BUILD_TYPE), web)
	go build -o ./dist/gome ./cmd/gome
else
	go build -o ./dist/gomectl ./cmd/gomectl
endif

clean:
	rm -rf ./dist
	cd ui && yarn run clean
	rm -rf node_modules

e2e:
	cd ui && yarn run e2e

