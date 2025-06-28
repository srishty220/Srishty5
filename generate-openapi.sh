

echo "Generating OpenAPI spec and client SDK..."

npx tsoa spec-and-routes

npx @openapitools/openapi-generator-cli generate \
  -i ./build/swagger.json \
  -g typescript-fetch \
  -o ./client

echo "Done! Client SDK is in ./client"
