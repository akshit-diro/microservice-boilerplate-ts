.PHONY: dev build start test docker
dev:
	npm run dev
build:
	npm run build
start:
	npm start
test:
	npm test
docker:
	docker build -t boilerplate-microservice:local -f deployment/Dockerfile .
