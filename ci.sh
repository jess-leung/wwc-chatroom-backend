main() {
  npm install;
  ./node_modules/.bin/sequelize db:migrate
  npm test;
}

main $1
