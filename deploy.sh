###
 # @Author: your name
 # @Date: 2020-11-15 19:10:38
 # @LastEditTime: 2020-11-15 19:42:29
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: /vuepressBlog/aaa.sh
### 

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.haohio.xyz' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f https://github.com/LYao0919/LYao0919.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
