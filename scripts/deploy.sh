#!/bin/bash
# Deploy de Nebula Estudio a SiteGround: build + sube solo lo que cambió.
# Uso: npm run deploy   (o: npm run deploy -- --prueba  para ver qué subiría sin subir nada)
set -e
cd "$(dirname "$0")/.."

if [ ! -f .deploy.env ]; then
  echo "Falta .deploy.env con SG_USER y SG_HOST (Site Tools > Devs > SSH Keys Manager > SSH Credentials)"; exit 1
fi
source .deploy.env
DESTINO="${SG_PATH:-www/nebulaestudio.com.mx/public_html}"

PRUEBA=""
[ "$1" = "--prueba" ] && PRUEBA="--dry-run" && echo "Modo prueba: no se sube nada"

npm run build

# Respaldo del .htaccess que estaba en el servidor (solo la primera vez)
if [ ! -f .htaccess-servidor-respaldo ]; then
  scp -P 18765 "$SG_USER@$SG_HOST:$DESTINO/.htaccess" .htaccess-servidor-respaldo 2>/dev/null \
    && echo "Respaldo del .htaccess del servidor guardado en .htaccess-servidor-respaldo" \
    || echo "(No había .htaccess en el servidor o no se pudo respaldar)"
fi

# 1) Assets primero y SIN borrar los viejos: si el caché de SiteGround sirve un index.html
#    viejo, sus JS/CSS siguen existiendo y el sitio nunca se queda en blanco.
rsync -avz $PRUEBA -e "ssh -p 18765" dist/assets/ "$SG_USER@$SG_HOST:$DESTINO/assets/"

# 2) Todo lo demás. --delete borra en el servidor lo que ya no existe en dist/,
#    EXCEPTO assets/ y estos archivos que solo viven en el servidor
#    (calculadora/.htaccess = la contraseña que pone SiteGround en Protected URLs):
rsync -avz $PRUEBA --delete \
  --exclude 'assets/' \
  --exclude '.DS_Store' \
  --exclude 'systeme-proxy.php' \
  --exclude '.well-known' \
  --exclude 'cgi-bin' \
  --exclude 'calculadora/.htaccess' \
  --exclude '.htpasswd*' \
  -e "ssh -p 18765" \
  dist/ "$SG_USER@$SG_HOST:$DESTINO/"

echo ""
echo "IMPORTANTE: limpia el caché en SiteGround (Site Tools > Velocidad > Caché > Caché dinámico > Vaciar)"
echo "Listo: https://nebulaestudio.com.mx"
