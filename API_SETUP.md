# API 设置指南

本指南帮助你设置 SnapCoach 的后端 API 服务，用于自动发送 Waitlist 注册邮件。

## 前置要求

1. Gmail 账户
2. Node.js 已安装

## 步骤 1: 获取 Gmail App Password

### 为什么需要 App Password？

Gmail 不允许使用普通密码来发送邮件（出于安全考虑）。你需要生成一个专门的"应用专用密码"。

### 如何获取：

1. **访问 Google 账户设置**
   - 打开 https://myaccount.google.com/security

2. **启用两步验证（如果还没有）**
   - 在"登录 Google"部分找到"两步验证"
   - 按照提示启用

3. **生成应用专用密码**
   - 返回安全设置页面
   - 在"登录 Google"部分找到"应用专用密码"
   - 选择"邮件"和"其他设备"
   - 点击"生成"
   - 复制生成的 16 位密码（格式：xxxx xxxx xxxx xxxx）

## 步骤 2: 配置环境变量

1. **复制示例文件**
   \`\`\`bash
   cp .env.example .env
   \`\`\`

2. **编辑 .env 文件**
   \`\`\`bash
   # Server Configuration
   PORT=3001

   # Email Configuration
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-16-digit-app-password
   \`\`\`

   **重要：**
   - `EMAIL_USER`: 填写你的完整 Gmail 地址
   - `EMAIL_PASS`: 填写刚才生成的 16 位应用专用密码（移除空格）

## 步骤 3: 启动服务

### 方式 1: 同时启动前端和后端（推荐）

\`\`\`bash
npm run dev:all
\`\`\`

这会同时启动：
- 前端开发服务器（http://localhost:5173）
- 后端 API 服务器（http://localhost:3001）

### 方式 2: 分别启动

**终端 1 - 前端：**
\`\`\`bash
npm run dev
\`\`\`

**终端 2 - 后端：**
\`\`\`bash
npm run dev:api
\`\`\`

## 步骤 4: 测试

1. 打开浏览器访问 http://localhost:5173
2. 滚动到"Join the Android Waitlist"部分
3. 输入测试邮箱地址
4. 点击"Submit"
5. 检查 lipengcheng808@gmail.com 是否收到邮件

## API 端点

### POST /api/waitlist

注册新的 Waitlist 用户

**请求体：**
\`\`\`json
{
  "email": "user@example.com"
}
\`\`\`

**成功响应（200）：**
\`\`\`json
{
  "success": true,
  "message": "Thank you for joining the waitlist!"
}
\`\`\`

**错误响应（400/500）：**
\`\`\`json
{
  "error": "Error message"
}
\`\`\`

### GET /api/health

健康检查端点

**响应：**
\`\`\`json
{
  "status": "ok"
}
\`\`\`

## 故障排查

### 邮件发送失败

1. **检查 .env 配置**
   - 确认 EMAIL_USER 和 EMAIL_PASS 正确
   - 确认没有多余的空格或引号

2. **检查 Gmail 设置**
   - 确认两步验证已启用
   - 确认应用专用密码是最新生成的

3. **检查服务器日志**
   - 查看终端中的错误信息
   - 常见错误：
     - "Invalid login" - 密码错误
     - "Connection timeout" - 网络问题

### 前端无法连接后端

1. **检查后端是否运行**
   \`\`\`bash
   curl http://localhost:3001/api/health
   \`\`\`
   应该返回：`{"status":"ok"}`

2. **检查 CORS 设置**
   - 后端已配置允许所有来源，应该不会有 CORS 问题

3. **检查浏览器控制台**
   - 打开开发者工具查看是否有错误

## 生产环境部署

在 Vercel 或其他平台部署时：

1. **设置环境变量**
   - 在平台的环境变量设置中添加 `EMAIL_USER` 和 `EMAIL_PASS`

2. **使用 Serverless Functions**
   - Vercel 支持 Serverless Functions
   - 将 `api/server.ts` 改写为 Serverless Function

3. **推荐使用专门的邮件服务**
   - SendGrid
   - Mailgun
   - Amazon SES

## 安全提示

⚠️ **重要安全建议：**

1. **永远不要提交 .env 文件到 Git**
   - 已在 `.gitignore` 中排除

2. **定期更换应用专用密码**
   - 建议每 3-6 个月更换一次

3. **限制 API 访问**
   - 考虑添加速率限制（Rate Limiting）
   - 考虑添加验证码（reCAPTCHA）

4. **使用专门的邮件服务**
   - 生产环境建议使用 SendGrid 等专业服务
   - 更稳定、有更好的送达率

## 需要帮助？

如果遇到问题：
1. 检查上面的故障排查部分
2. 查看终端和浏览器控制台的错误信息
3. 确认所有依赖已正确安装（`npm install`）
