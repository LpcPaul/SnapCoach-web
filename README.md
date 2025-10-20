# SnapCoach Web

SnapCoach 官网 - 您的AI驱动摄影伴侣

## 项目简介

SnapCoach 是一个现代化的 APP 官网，采用 React + TypeScript + Tailwind CSS 构建，提供响应式设计和优雅的用户体验。

## 技术栈

- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **ESLint** - 代码质量

## 功能特性

- 🎨 现代化设计风格
- 📱 完全响应式布局
- ⚡ 快速加载和优化性能
- 🎯 清晰的功能展示
- 📧 邮件订阅功能
- 🔗 应用商店下载链接

## 开始使用

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 开发模式

\`\`\`bash
npm run dev
\`\`\`

访问 [http://localhost:5173](http://localhost:5173) 查看网站

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产版本

\`\`\`bash
npm run preview
\`\`\`

## 项目结构

\`\`\`
src/
├── components/          # React 组件
│   ├── Hero.tsx        # 首页 Hero 区域
│   ├── Features.tsx    # 功能特性展示
│   ├── Download.tsx    # 下载和订阅区域
│   └── Footer.tsx      # 页脚
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
└── index.css           # 全局样式
\`\`\`

## 自定义配置

### 颜色主题

在 `tailwind.config.js` 中修改主题颜色：

\`\`\`javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#319948',
        dark: '#267a38',
      },
    },
  },
}
\`\`\`

### 内容更新

- **Hero 区域**: 编辑 `src/components/Hero.tsx`
- **功能特性**: 编辑 `src/components/Features.tsx`
- **下载链接**: 编辑 `src/components/Download.tsx`
- **页脚信息**: 编辑 `src/components/Footer.tsx`

## 部署到 Vercel

### 快速部署

1. **推送到 GitHub**

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
\`\`\`

2. **连接到 Vercel**

- 访问 [vercel.com](https://vercel.com)
- 点击 "Import Project"
- 选择你的 GitHub 仓库
- Vercel 会自动检测 Vite 配置并部署

3. **环境变量配置**

如果需要环境变量，在 Vercel Dashboard 中：
- 进入项目设置 → Environment Variables
- 添加 `.env.example` 中列出的变量

### 本地 Vercel CLI 部署

\`\`\`bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 部署到生产环境
vercel --prod
\`\`\`

### 自动部署

项目配置了自动部署：
- **主分支推送** → 自动部署到生产环境
- **其他分支推送** → 自动部署到预览环境

### 性能优化

项目已配置：
- ✅ 静态资源缓存 (1 年)
- ✅ SPA 路由重写
- ✅ 自动代码分割
- ✅ 资源压缩和优化

## 参考设计

本项目参考了 [CameraCoach](https://www.cameracoach.app/) 的设计理念，采用简洁现代的单页布局。

## License

MIT
