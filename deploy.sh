
# windows 用户请使用 bash 或 cmder 操作，cmd 无效
rm -rf dist
yarn build
cd dist
git init
git add .
git commit . -m "update"
# 这里使用自己仓库的 ssh 地址
git remote add origin git@github.com:xiaolinzi7118/vue3-bells-ui-website.git
git push -f -u origin master
cd -
echo '部署成功，稍等一会儿后，预览地址为：https://xiaolinzi7118.github.io/vue3-bells-ui-website/'



