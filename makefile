#!make
include .env

ARM_PLATFORM=--platform linux/arm64/v8
FIREFOX=--browser firefox
CHROME=--browser chrome

open:
	npx cypress open

run_chrome:
	npx cypress run ${CHROME}

run_firefox:
	npx cypress run ${FIREFOX}

run_record_chrome:
	@npx cypress run ${CHROME} --record --key=$(CYPRESS_RECORD_KEY)

run_record_firefox:
	@npx cypress run ${FIREFOX} --record --key=$(CYPRESS_RECORD_KEY)

build_docker:
	sudo docker build -t fenrir-cypress .

build_docker_arm:
	sudo docker build ${ARM_PLATFORM} -t fenrir-cypress .

stop_docker:
	docker stop fenrir-cypress && docker rm fenrir-cypress

start_docker:
	docker run -d -t -i -v `pwd`/cypress:/fenrir/cypress --name=fenrir-cypress fenrir-cypress

start_docker_arm:
	docker run ${ARM_PLATFORM} -d -t -i -v `pwd`/cypress:/fenrir/cypress --name=fenrir-cypress fenrir-cypress

run_docker_chrome:
	docker exec -t -i fenrir-cypress npx cypress run ${CHROME} --spec "cypress/e2e/features/*"

run_docker_firefox:
	docker exec -t -i fenrir-cypress npx cypress run ${FIREFOX} --spec "cypress/e2e/features/*"

run_docker_arm_firefox:
	docker exec  -t -i fenrir-cypress npx cypress run ${FIREFOX} --spec "cypress/e2e/features/*"


