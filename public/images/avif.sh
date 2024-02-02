#!/bin/sh
set -o noglob
IFS=$'\n'

images=$(find . -type f -name *.png -o -name *.jpg)

for img in $images; do
  avif_out=$img.avif

  if [ $img -nt $avif_out ]; then
    avifenc --speed 0 --min 25 --max 35 $img $avif_out
    rename "png.avif" "avif" $avif_out
    rename "jpg.avif" "avif" $avif_out
    rename "jpeg.avif" "avif" $avif_out
    rm $img
  fi
done
