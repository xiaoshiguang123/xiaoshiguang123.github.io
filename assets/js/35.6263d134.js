(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{532:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本篇主要记录如何在windows平台利用WSL子系统搭建Linux开发环境，及开发环境搭建等相关配置。")]),s._v(" "),a("blockquote",[a("p",[s._v("环境准备")]),s._v(" "),a("ul",[a("li",[s._v("Windows 10 19042.746")])])]),s._v(" "),a("h2",{attrs:{id:"安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),a("h3",{attrs:{id:"第一步-在控制面板启用子系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步-在控制面板启用子系统"}},[s._v("#")]),s._v(" 第一步 在控制面板启用子系统")]),s._v(" "),a("p",[s._v("如图所示")]),s._v(" "),a("img",{attrs:{src:"https://i.loli.net/2021/02/13/ACV5gcGSJaYe67f.png",alt:"ACV5gcGSJaYe67f"}}),s._v(" "),a("h3",{attrs:{id:"第二步-在microsoft-store-搜索-ubuntu并进行安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步-在microsoft-store-搜索-ubuntu并进行安装"}},[s._v("#")]),s._v(" 第二步 在Microsoft Store 搜索 Ubuntu并进行安装")]),s._v(" "),a("img",{attrs:{src:"https://i.loli.net/2021/02/13/2wWRtyaL9FpjuP7.png",alt:"2wWRtyaL9FpjuP7"}}),s._v(" "),a("h3",{attrs:{id:"第三步-在visual-studio-code-中安装-remote-wsl-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步-在visual-studio-code-中安装-remote-wsl-插件"}},[s._v("#")]),s._v(" 第三步 在Visual Studio Code 中安装 Remote - WSL 插件")]),s._v(" "),a("img",{attrs:{src:"https://i.loli.net/2021/02/13/gBP7K4l8uwqS1bZ.png",alt:"gBP7K4l8uwqS1bZ"}}),s._v(" "),a("h2",{attrs:{id:"安装辅助开发工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装辅助开发工具"}},[s._v("#")]),s._v(" 安装辅助开发工具")]),s._v(" "),a("h3",{attrs:{id:"zsh-oh-my-zsh打造高颜值终端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh-oh-my-zsh打造高颜值终端"}},[s._v("#")]),s._v(" zsh+oh-my-zsh打造高颜值终端")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装zsh")]),s._v("\nchsh -s /bin/zsh "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置默认终端")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置密码文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把第一行的/bin/bash改成/bin/zsh，这个是root用户的。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把最后一行的/bin/bash改成/bin/zsh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 oh-my-zsh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装zsh-autosuggestions插件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-autosuggestions "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(".oh-my-zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("custom}")]),s._v("/plugins/zsh-autosuggestions\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装zsh-syntax-highlighting插件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(".oh-my-zsh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("custom}")]),s._v("/plugins/zsh-syntax-highlighting\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑 ~/.zshrc")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("zsh-autosuggestions zsh-syntax-highlighting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 空格分隔")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改主题")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH_THEME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"agnoster"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#应用配置文件使其生效")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("Vssue",{attrs:{title:s.$title}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);