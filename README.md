# mk-template

一个用于快速创建项目模板的脚手架工具。

## 功能特点

- 支持多种项目模板：
  - Vue3通用模板
  - React模板
  - 自定义上传模板
- Vue3通用模板包含常用依赖：
  - Vue Router
  - Vuex
  - Pinia
  - Element Plus
  - Axios
  - Lodash
- 可选集成多语言支持 (i18n)
- 预设文件结构和基础组件（包含登录页面和404页面）
- 交互式命令行界面
- 自动安装依赖
- 自动扫描可用模板
- 支持用户创建和上传自定义模板

## 安装

```bash
# 全局安装
npm install -g mk-template

# 或者直接使用 npx
npx mk-template
```

## 使用方法

```bash
# 如果全局安装了
mk-template

# 或者使用 npx
npx mk-template
```

按照提示选择项目模板类型、输入项目名称等信息，脚手架将自动创建项目并询问是否安装依赖。

## 模板类型

### Vue3通用模板

包含以下功能：
- Vue3 + Vite
- Vue Router
- Vuex
- Pinia
- Element Plus
- Axios
- Lodash
- 登录页面
- 404页面
- 可选的多语言支持

### React模板

包含以下功能：
- React 18
- React Router
- Axios
- 基础页面结构

### 自定义上传模板

您可以通过以下步骤创建和上传自己的模板：

1. 选择"我要上传模板"选项
2. 输入模板名称
3. 输入克隆目录
4. 系统会克隆仓库到指定目录，并创建模板目录
5. 将您的模板文件添加到创建的模板目录中
6. 修改 package.json 中的版本号
7. 运行 npm publish 发布您的模板

## 开发

1. 克隆仓库
```bash
git clone https://github.com/xian-644/mk-template.git
cd mk-template
```

2. 安装依赖
```bash
npm install
```

3. 本地测试
```bash
npm link
```

4. 使用
```bash
mk-template
```

## 发布

1. 登录到 npm
```bash
npm login
```

2. 发布包
```bash
npm publish
```

## 许可证

ISC