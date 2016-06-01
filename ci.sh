main() {
  npm install;
  if [ "$NODE_ENV" = "test" ]; then
    npm ciTest
  else
    npm test
  fi
}

main $1
