#!/bin/sh
set -eu

SITE_URL="${BUDDHA_MD_BASE_URL:-https://buddha.md}"
INSTALL_DIR="${BUDDHA_MD_INSTALL_DIR:-$HOME/.local/bin}"
TARGET="$INSTALL_DIR/buddha-md"

command -v curl >/dev/null 2>&1 || { echo "curl is required to install buddha-md" >&2; exit 1; }
mkdir -p "$INSTALL_DIR"
curl -fsSL "$SITE_URL/cli" -o "$TARGET"
chmod +x "$TARGET"

echo "Installed buddha-md to $TARGET"
case ":$PATH:" in
  *":$INSTALL_DIR:"*) ;;
  *) echo "Add $INSTALL_DIR to PATH if buddha-md is not found." ;;
esac
echo "Try: buddha-md --help"
