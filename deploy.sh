cd /var/www/ShopboxTask
rm package-lock.json
git pull origin master
npm install
npm run build
pm2 restart ShopboxTask
