# Images Directory

请将以下图片文件放在此目录：

1. **logo.png** - SnapCoach Logo（橙色相机图标）
   - 建议尺寸：512x512px 或更大
   - 格式：PNG（透明背景）

2. **hero-bg.jpg** - Hero 背景图片（摄影师拍摄山景）
   - 建议尺寸：1920x1080px 或更大
   - 格式：JPG

## 如何添加图片

### 方法1：从聊天中保存
1. 在聊天界面中右键点击图片
2. 选择"另存为..."
3. 保存到此目录

### 方法2：使用 URL
如果你有图片的 URL，可以使用以下命令下载：

```bash
# 从项目根目录运行
cd public/images

# 下载 logo
curl -o logo.png "YOUR_LOGO_URL"

# 下载背景图
curl -o hero-bg.jpg "YOUR_HERO_BG_URL"
```

### 方法3：手动拖放
1. 在 Finder 中打开：/Users/hujing/Desktop/code/SnapCoach-web/public/images/
2. 将图片拖放到此文件夹
3. 确保文件名正确
