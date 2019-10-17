.PHONY: build-dev build-packed clean

build-dev:
	packr2
	go build .

build-packed:
	packr2 clean
	go build .

clean:
	packr2 clean
	rm -f colorapp bin releases

xbuild:
	packr2 clean
	../../scripts/xbuild.sh . releases demo 0.1.0

install:
	packr2 clean
	go install
