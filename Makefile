# Makefile

build:
	@echo "빌드 중..."
	mkdir -p ./dist
	go build -o ./dist/gome ./cmd/gome
