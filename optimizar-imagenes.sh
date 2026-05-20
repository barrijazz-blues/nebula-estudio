#!/bin/bash
# Optimizador agresivo de imágenes para public/
# Requiere: brew install imagemagick

PUBLIC="$(dirname "$0")/public"

if [ ! -d "$PUBLIC" ]; then
  echo "❌ No se encontró la carpeta public/"
  echo "   Corre este script desde la raíz del proyecto (nebula-vite/)"
  exit 1
fi

echo "🚀 Optimizando imágenes en $PUBLIC..."
echo ""

# JPGs — calidad 60, máximo 1400px de ancho
for img in "$PUBLIC"/*.{jpg,jpeg,JPG,JPEG}; do
  [ -f "$img" ] || continue
  before=$(du -k "$img" | cut -f1)
  magick "$img" -resize "1400x>" -quality 60 -strip "$img"
  after=$(du -k "$img" | cut -f1)
  echo "✓ $(basename $img): ${before}KB → ${after}KB"
done

# PNGs — convertir a JPG si son fotos grandes, mantener PNG solo logos
for img in "$PUBLIC"/*.{png,PNG}; do
  [ -f "$img" ] || continue
  filename=$(basename "$img")
  before=$(du -k "$img" | cut -f1)
  
  # Si es logo o favicon, solo strip metadata
  if [[ "$filename" == logo-* ]] || [[ "$filename" == favicon* ]]; then
    magick "$img" -strip "$img"
    after=$(du -k "$img" | cut -f1)
    echo "✓ $filename (logo): ${before}KB → ${after}KB"
  else
    # Si es foto, convertir a JPG
    newname="${img%.png}.jpg"
    magick "$img" -resize "1400x>" -quality 60 -strip "$newname"
    after=$(du -k "$newname" | cut -f1)
    echo "✓ $filename → $(basename $newname): ${before}KB → ${after}KB"
    # Solo borrar el PNG si el JPG quedó más pequeño
    if [ "$after" -lt "$before" ]; then
      rm "$img"
    fi
  fi
done

echo ""
echo "✅ Listo. Imágenes optimizadas para web."
