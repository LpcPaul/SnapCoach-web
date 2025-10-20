# SnapCoach Web 部署指南

完整的 Vercel 部署指南和最佳实践。

## 📋 部署前检查清单

- [ ] 所有代码已提交到 Git
- [ ] 项目可以本地构建成功 (`npm run build`)
- [ ] 所有测试通过 (`npm run lint`)
- [ ] 环境变量已配置（如需要）
- [ ] GitHub 仓库已创建

## 🚀 Vercel 部署步骤

### 方法一：通过 Vercel Dashboard（推荐）

1. **准备 GitHub 仓库**

\`\`\`bash
# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 创建初始提交
git commit -m "Initial commit: SnapCoach website"

# 设置主分支
git branch -M main

# 添加远程仓库
git remote add origin https://github.com/your-username/snapcoach-web.git

# 推送到 GitHub
git push -u origin main
\`\`\`

2. **连接 Vercel**

- 访问 [vercel.com](https://vercel.com) 并登录
- 点击 "Add New Project"
- 选择 "Import Git Repository"
- 授权 Vercel 访问你的 GitHub 账户
- 选择 `snapcoach-web` 仓库

3. **配置项目**

Vercel 会自动检测到这是一个 Vite 项目，默认配置应该是：

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

4. **部署**

- 点击 "Deploy" 按钮
- 等待构建完成（通常需要 1-2 分钟）
- 部署成功后会得到一个 `.vercel.app` 域名

### 方法二：使用 Vercel CLI

\`\`\`bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 在项目目录中运行部署命令
vercel

# 第一次部署时会询问：
# - Set up and deploy? [Y/n] → Y
# - Which scope? → 选择你的账户
# - Link to existing project? [y/N] → N
# - What's your project's name? → snapcoach-web
# - In which directory is your code located? → ./

# 部署到生产环境
vercel --prod
\`\`\`

## 🔧 环境变量配置

### 在 Vercel Dashboard 中配置

1. 进入项目 → Settings → Environment Variables
2. 添加以下变量（根据需要）：

\`\`\`
# 示例环境变量
VITE_API_URL=https://api.snapcoach.app
VITE_GA_TRACKING_ID=GA-XXXXXXXXX
\`\`\`

3. 选择环境：
   - Production（生产环境）
   - Preview（预览环境）
   - Development（开发环境）

### 通过 CLI 配置

\`\`\`bash
# 添加环境变量
vercel env add VITE_API_URL production

# 拉取环境变量到本地
vercel env pull
\`\`\`

## 🌐 自定义域名配置

### 添加自定义域名

1. 在 Vercel Dashboard 中：
   - 进入项目 → Settings → Domains
   - 点击 "Add" 输入你的域名
   - 按照指示配置 DNS 记录

2. DNS 配置示例（以 Cloudflare 为例）：

\`\`\`
类型: A
名称: @
值: 76.76.21.21
代理: 启用

类型: CNAME
名称: www
值: cname.vercel-dns.com
代理: 启用
\`\`\`

## 🔄 自动部署配置

项目已配置自动部署：

- ✅ **主分支 (main)** → 自动部署到生产环境
- ✅ **其他分支** → 自动部署到预览环境
- ✅ **Pull Requests** → 自动创建预览部署

### GitHub Actions CI

项目包含 CI 工作流 (`.github/workflows/ci.yml`)：

- ✅ 代码检查 (ESLint)
- ✅ 构建测试
- ✅ 多版本 Node.js 测试 (18.x, 20.x)

## 📊 性能监控

### Vercel Analytics

启用 Vercel Analytics：

1. 进入项目 → Analytics
2. 点击 "Enable Analytics"
3. 添加到项目：

\`\`\`bash
npm install @vercel/analytics
\`\`\`

4. 在 `src/main.tsx` 中添加：

\`\`\`typescript
import { inject } from '@vercel/analytics'

inject()
\`\`\`

### Web Vitals 监控

项目已优化的性能指标：

- ✅ **LCP** (Largest Contentful Paint) < 2.5s
- ✅ **FID** (First Input Delay) < 100ms
- ✅ **CLS** (Cumulative Layout Shift) < 0.1

## 🛠️ 故障排查

### 构建失败

1. **检查本地构建**
   \`\`\`bash
   npm run build
   \`\`\`

2. **检查 Node.js 版本**
   - Vercel 默认使用 Node.js 18.x
   - 在 `package.json` 中指定版本：
   \`\`\`json
   "engines": {
     "node": ">=18.0.0"
   }
   \`\`\`

3. **查看构建日志**
   - 在 Vercel Dashboard 的 Deployments 页面查看详细日志

### 部署后页面空白

1. 检查控制台错误
2. 确认静态资源路径正确
3. 检查 `vercel.json` 路由配置

### 环境变量不生效

1. 确保变量名以 `VITE_` 开头
2. 重新部署项目
3. 清除浏览器缓存

## 🔒 安全建议

1. **敏感信息**
   - 不要在前端代码中硬编码 API 密钥
   - 使用 Vercel 环境变量存储敏感信息
   - 将 `.env` 文件添加到 `.gitignore`

2. **依赖安全**
   \`\`\`bash
   # 检查依赖漏洞
   npm audit

   # 自动修复
   npm audit fix
   \`\`\`

3. **HTTPS**
   - Vercel 自动提供免费 SSL 证书
   - 强制 HTTPS 重定向（默认启用）

## 📈 优化建议

### 图片优化

使用 Vercel Image Optimization：

\`\`\`tsx
import Image from 'next/image' // 如果使用 Next.js

// 或者使用 vite-plugin-imagemin
\`\`\`

### 代码分割

已在 `vite.config.ts` 中配置：
- ✅ Vendor chunks (React, React-DOM)
- ✅ 动态导入支持
- ✅ 代码压缩和优化

### CDN 缓存

`vercel.json` 已配置：
- ✅ 静态资源缓存 1 年
- ✅ HTML 文件不缓存（始终最新）

## 📚 更多资源

- [Vercel 文档](https://vercel.com/docs)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [React 优化最佳实践](https://react.dev/learn/render-and-commit)

## 💬 获取帮助

遇到问题？

1. 查看 [Vercel 社区](https://github.com/vercel/vercel/discussions)
2. 查看 [Vite 文档](https://vitejs.dev/)
3. 提交 Issue 到项目仓库

---

最后更新：2025-10-18
