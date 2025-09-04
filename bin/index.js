#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const { execSync } = require('child_process');

// 版本信息
program.version('1.0.0', '-v, --version');

// 获取可用模板列表
function getAvailableTemplates() {
  const templatesDir = path.join(__dirname, '..');
  const items = fs.readdirSync(templatesDir);
  
  // 过滤出以 template 开头的目录作为模板
  const templates = items
    .filter(item => {
      const fullPath = path.join(templatesDir, item);
      return fs.statSync(fullPath).isDirectory() && item.startsWith('template');
    })
    .map(item => {
      // 将 template-xxx 转换为更友好的名称
      let name = item;
      if (item === 'template') {
        name = 'Vue3通用模板';
      } else if (item === 'template-react') {
        name = 'React模板';
      } else {
        // 将 template-xxx 转换为 Xxx模板
        name = item.replace('template-', '');
        name = name.charAt(0).toUpperCase() + name.slice(1) + '模板';
      }
      
      return {
        name: name,
        value: item
      };
    });
  
  // 添加"我要上传模板"选项
  templates.push({
    name: '我要上传模板',
    value: 'custom'
  });
  
  return templates;
}

// 创建项目命令
program
  .name('mk-template')
  .description('一个用于快速创建项目模板的脚手架工具')
  .action(async () => {
    console.log(chalk.blue('欢迎使用 mk-template 脚手架工具！'));
    console.log(chalk.blue('正在创建项目模板...\n'));

    // 获取项目名称
    const { projectName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: '请输入项目名称:',
        default: 'my-app'
      }
    ]);

    // 获取可用模板列表
    const templateChoices = getAvailableTemplates();

    // 选择模板类型
    const { templateType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'templateType',
        message: '请选择项目模板类型:',
        choices: templateChoices,
        default: 'template'
      }
    ]);

    // 如果选择了自定义模板
    if (templateType === 'custom') {
      console.log(chalk.green('\n您选择了上传自己的模板。'));
      console.log(chalk.yellow('接下来将引导您创建并上传自己的模板。\n'));
      
      console.log(chalk.blue('要创建自己的模板，您需要：'));
      console.log(chalk.yellow('1. 克隆 mk-template 仓库'));
      console.log(chalk.yellow('2. 在仓库中创建您的模板'));
      console.log(chalk.yellow('3. 发布您的模板\n'));
      
      console.log(chalk.blue('请执行以下命令：'));
      console.log(chalk.yellow('git clone https://github.com/xian-644/mk-template.git'));
      console.log(chalk.yellow('cd create-mk-template'));
      console.log(chalk.yellow('mkdir template-your-template-name'));
      console.log(chalk.yellow('# 将您的模板文件添加到 template-your-template-name 目录中'));
      console.log(chalk.yellow('# 修改 package.json 中的版本号'));
      console.log(chalk.yellow('npm publish\n'));
      
      console.log(chalk.blue('是否需要在浏览器中打开仓库地址？'));
      
      const { openRepo } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'openRepo',
          message: '是否在浏览器中打开仓库地址?',
          default: true
        }
      ]);
      
      if (openRepo) {
        try {
          const repoUrl = 'https://www.npmjs.com/package/mk-template';
          // 根据不同操作系统打开浏览器
          const platform = process.platform;
          if (platform === 'win32') {
            execSync(`start ${repoUrl}`);
          } else if (platform === 'darwin') {
            execSync(`open ${repoUrl}`);
          } else {
            execSync(`xdg-open ${repoUrl}`);
          }
          console.log(chalk.green('\n已在浏览器中打开仓库地址'));
        } catch (err) {
          console.error(chalk.red('打开浏览器失败:'), err);
        }
      }
      
      return;
    }

    // 如果选择了Vue3模板，询问是否需要集成多语言
    let needI18n = false;
    if (templateType === 'template') {
      const i18nAnswer = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'needI18n',
          message: '是否需要集成多语言(i18n)?',
          default: false
        }
      ]);
      needI18n = i18nAnswer.needI18n;
    }

    // 创建项目目录
    const targetDir = path.join(process.cwd(), projectName);
    
    // 检查目录是否已存在
    if (fs.existsSync(targetDir)) {
      const { overwrite } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'overwrite',
          message: `目录 ${projectName} 已存在，是否覆盖?`,
          default: false
        }
      ]);
      
      if (overwrite) {
        await fs.remove(targetDir);
      } else {
        console.log(chalk.red('操作取消'));
        return;
      }
    }
    
    // 创建项目目录
    await fs.ensureDir(targetDir);
    
    // 复制模板文件
    try {
      // 获取模板目录路径
      let templateDir;
      
      // 根据选择的模板类型和是否需要多语言来确定使用哪个模板
      if (templateType === 'template') {
        // 如果选择了Vue3通用模板，根据是否需要多语言选择不同的子模板
        if (needI18n) {
          templateDir = path.join(__dirname, '..', 'template', 'i18n');
        } else {
          templateDir = path.join(__dirname, '..', 'template', 'zh');
        }
      } else {
        // 其他模板类型直接使用对应的模板目录
        templateDir = path.join(__dirname, '..', templateType);
      }
      
      // 复制模板文件到目标目录
      await fs.copy(templateDir, targetDir);
      
      // 修改package.json中的项目名称
      const pkgPath = path.join(targetDir, 'package.json');
      if (fs.existsSync(pkgPath)) {
        const pkg = require(pkgPath);
        pkg.name = projectName;
        await fs.writeJson(pkgPath, pkg, { spaces: 2 });
      }
      
      console.log(chalk.green('\n✨ 项目创建成功!'));
      
      // 询问是否安装依赖
      const { installDeps } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'installDeps',
          message: '是否立即安装依赖?',
          default: true
        }
      ]);
      
      if (installDeps) {
        console.log(chalk.blue('\n📦 正在安装依赖...'));
        
        // 切换到项目目录并安装依赖
        process.chdir(targetDir);
        execSync('npm install', { stdio: 'inherit' });
        
        console.log(chalk.green('\n✅ 依赖安装完成!'));
        console.log(chalk.blue('\n🚀 开始使用:'));
        console.log(chalk.yellow(`  cd ${projectName}`));
        
        // 根据模板类型显示不同的启动命令
        if (templateType === 'template-react') {
          console.log(chalk.yellow('  npm start'));
        } else {
          console.log(chalk.yellow('  npm run dev'));
        }
      } else {
        console.log(chalk.blue('\n🚀 开始使用:'));
        console.log(chalk.yellow(`  cd ${projectName}`));
        console.log(chalk.yellow('  npm install'));
        
        // 根据模板类型显示不同的启动命令
        if (templateType === 'template-react') {
          console.log(chalk.yellow('  npm start'));
        } else {
          console.log(chalk.yellow('  npm run dev'));
        }
      }
    } catch (err) {
      console.error(chalk.red('创建项目时出错:'), err);
      // 清理创建的目录
      await fs.remove(targetDir);
    }
  });

// 解析命令行参数
program.parse(process.argv);