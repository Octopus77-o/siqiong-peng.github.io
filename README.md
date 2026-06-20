# 彭思琼个人主页

这是一个纯静态个人主页，不需要安装 Hugo、Node.js 或其他工具。上传到 GitHub 后，可以直接用 GitHub Pages 访问。

## 文件说明

- `index.html`：主页结构，一般不需要改。
- `content.js`：主页文字、链接、微信二维码图片路径。后续修改内容，优先改这个文件。
- `style.css`：主页样式，配色、间距、卡片效果在这里修改。
- `script.js`：页面交互逻辑，微信按钮点击后展示二维码，一般不需要改。
- `assets/avatar.png`：头像图片。想换头像时，用新图片替换这个文件，并保持文件名不变。
- `assets/wechat.jpg`：微信二维码图片。想换微信二维码时，用新图片替换这个文件，并保持文件名不变。

## 如何在本地预览

直接双击 `index.html` 即可在浏览器打开预览。

## 如何上传到 GitHub

### 方式一：直接在 GitHub 网页上传，适合不会写代码的情况

1. 登录 GitHub。
2. 点击右上角 `+`，选择 `New repository`。
3. 如果希望主页地址是 `https://Octopus77-o.github.io/`，仓库名填写：`Octopus77-o.github.io`。
   如果使用其他仓库名，主页地址通常会是：`https://Octopus77-o.github.io/仓库名/`。
4. 进入新仓库，点击 `Add file` → `Upload files`。
5. 打开本文件夹，把 `index.html`、`content.js`、`style.css`、`script.js`、`README.md` 和整个 `assets` 文件夹一起拖进去。
6. 点击页面底部的 `Commit changes`。
7. 进入仓库的 `Settings` → `Pages`。
8. 在 `Build and deployment` 中选择：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/root`
9. 点击 `Save`，等待 1-5 分钟。
10. 回到 `Settings` → `Pages`，页面会显示可访问的网址。

### 方式二：后续修改内容

1. 进入 GitHub 仓库。
2. 打开 `content.js`。
3. 点击右上角铅笔图标编辑。
4. 修改文字、链接或时间。
5. 点击 `Commit changes`。
6. 等待 1-5 分钟，刷新个人主页即可看到更新。

## 常见问题

### 页面 404

先等待几分钟；再确认 `index.html` 是否在仓库根目录，不要放在多套了一层的文件夹里。

### 头像或微信二维码不显示

确认图片路径和文件名是否保持为：

- `assets/avatar.png`
- `assets/wechat.jpg`

### 微信二维码如何替换

把新的二维码图片命名为 `wechat.jpg`，替换 `assets` 文件夹里的旧图，再提交到 GitHub。
