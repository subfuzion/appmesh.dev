#!/usr/bin/env bash

# creates both *.zip and *.tar.gz for specified platform binaries
platforms=("windows/amd64" "linux/amd64" "darwin/amd64")

SRC=$1
DEST=$2
NAME=$3
VERSION=$4

i=0
for arg in "SRC" "DEST" "NAME" "VERSION"; do
  (( i++ ))
  if [ -z ${!arg} ]; then
    echo "error: missing arg #$i: $arg"
    echo "Usage xbuild SRC DEST APPNAME VERSION"
    exit 1
  fi
done

# remove extra slashes and then remove trailing
fixpath() {
  echo $1 | sed 's,//*,/,g' | sed 's,/$,,g'
}

for platform in "${platforms[@]}"; do
  split=(${platform//\// })
  GOOS=${split[0]}
  GOARCH=${split[1]}

  pkg="${NAME}-${GOOS}-${GOARCH}-${VERSION}"
  fname="${pkg}"

  if [ "$GOOS" = "windows" ]; then
    fname+=".exe"
  fi

  zfile="${pkg}.zip"
  zpath="$(fixpath ${DEST})/${zfile}"

  tfile="${pkg}.tar.gz"
  tpath="$(fixpath ${DEST})/${tfile}"

  set -e
  tmpdir=$(mktemp -d)
  env GOOS="$GOOS" GOARCH="$GOARCH" go build -o "$tmpdir/$fname" "$SRC"
  mkdir -p "$DEST"
  zip -j "$zpath" "$tmpdir/$fname" >/dev/null
  tar -czf "$tpath" -C "$tmpdir" .

  rm -rf $tmpdir 2&1>/dev/null
done

