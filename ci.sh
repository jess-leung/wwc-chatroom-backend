main() {
  npm install;
  if [ "$NODE_ENV" = "test" ]; then
    NODE_ENV=test npm test
  else
    npm test
  fi
}

main $1
