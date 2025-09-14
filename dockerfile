# 使用官方 Node.js 镜像作为构建环境
FROM node:22.12.0 AS builder

# 设置工作目录
WORKDIR /app
# (修改点 1) 声明构建时需要的变量
# 之后我们会通过 `docker build --build-arg` 命令把值传进来
ARG VITE_ENV
ARG VITE_API_BASE_URL

# 首先复制包管理文件以利用 Docker 缓存层
COPY package.json package-lock.json* ./

# 安装依赖（包括 devDependencies，因为需要构建）
RUN npm install
# 复制项目文件
COPY . .
# (修改点 2) 动态创建 .env 文件
# 这一步是核心！它根据传入的 ARG 变量，在容器内创建了一个临时的 .env 文件。
# 这样，`npm run build` 命令就能找到它所必需的 `.env` 文件了。
RUN echo "VITE_ENV=${VITE_ENV}" > .env
RUN echo "VITE_API_BASE_URL=${VITE_API_BASE_URL}" >> .env
# 构建应用
RUN npm run build

# 使用更小的基础镜像来运行应用
FROM node:22.12.0 AS runner

# 设置工作目录
WORKDIR /app

# 从构建阶段复制构建输出和依赖
COPY --from=builder /app/.output ./


# 环境变量
ENV NODE_ENV=production

# 使用非 root 端口
EXPOSE 3000

# 启动命令
CMD ["node", "/app/server/index.mjs"]

