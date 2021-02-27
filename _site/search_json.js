window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "Introduction",
      "content": "基于javadoc&KDoc&ScalaDoc解析API文档\n注意, 你可以在保持代码零侵入的情况下得到相当完整的api文档, 但是特殊的需求还是需要部分特殊的注释/注解配合\n与之相对的是, 你可以灵活的运用配置规则来适应你的项目特性以减少代码侵入.\n特殊声明: 由于scala插件中提供的openapi变化过于频繁, 不再作为默认支持选项. 需要在scala项目中使用的开发者可自行从easy-yapi/releases获得支持scala的插件包\n",
      "url": "/documents/index.html",
      "children": [
        {
          "title": "功能特性",
          "url": "/documents/index.html#功能特性",
          "content": "功能特性导出API文档到Postman\n导出API文档到Yapi\n导出API文档到Markdown\n导出RPC文档到Yapi\n导出RPC文档到Markdown\n在IDEA中直接发起API请求\nApi DashBoard\nYApi DashBoard\n"
        },
        {
          "title": "Contribution",
          "url": "/documents/index.html#contribution",
          "content": "Contribution帮助维护文档: easyyapi.com\n请将您的PR提交到dev分支\n讨论 新的功能 or提交 BUG: Issues\n开发 新的功能 or修复 BUG: PR\n维护推荐配置: .recommend.easy.api.config\n丰富demo: spring-demo\n修复IDE兼容问题: intellij-kotlin\n"
        },
        {
          "title": "Contributors",
          "url": "/documents/index.html#contributors",
          "content": "Contributorstangcent\necho-layker\nzjz6b6\ngcdd1993\nMiZhuo\nHEYANGLI23\nvisionarygit\n"
        }
      ]
    },
    {
      "title": "安装",
      "content": "支持以下IDEIntelliJ IDEA 173+(2017.3+)\nIntelliJ IDEA Community Edition 173+(2017.3+)\n从IDEA仓库中安装Preferences(Settings) > Plugins > Browse repositories... > find\"EasyYapi\" > Install Plugin\n手动下载安装:下载插件 Jetbrains or Github -> Preferences(Settings) > Plugins > Install plugin from disk...\n重启 IDE.",
      "url": "/documents/installation.html",
      "children": []
    },
    {
      "title": "使用",
      "content": "支持以下使用方法\n打开项目中的包含api/rpc的文件或者在IDEA的左边项目文件区域选择文件或者文件夹\n使用快捷键alt shift E(windows)/ctrl E(mac)\n然后选择要导出的API,选择导出渠道Yapi/Markdown/Postman\n点击[✔]按钮或者按回车键完成导出\n\n\n打开项目中的包含api/rpc的文件\n右键文件内容选择Generate...或者用[Alt + Insert]/[Ctrl+Enter](快捷键可能不一样)\"\n然后选择ExportYapi/ExportPostman/ExportMarkdown\n\n\n在IDEA的左边项目文件区域选择文件或者文件夹\n鼠标点击最上方Code > ExportYapi/ExportPostman/ExportMarkdown\n\n\n鼠标点击最上方Code > YapiDashBoard\n然后就可以用鼠标将左边的API拖动到右边yapi目录中，完成API导出到Yapi\n\n\n鼠标点击最上方Code > ApiDashBoard\n然后就可以用鼠标将左边的API拖动到右边postman目录中，完成API导出到Postman\n\n\n打开项目中的包含api/rpc的文件\n右键文件内容选择Generate...或者用[Alt + Insert]/[Ctrl+Enter] (快捷键可能不一样)\"\n然后选择Call,就可以发起对当前文件中的API的请求\n\n",
      "url": "/documents/use.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export2yapi.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export2postman.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export2markdown.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export_rpc.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/login_mode_yapi.html",
      "children": []
    },
    {
      "title": "进阶使用",
      "content": "yapi备注渲染: Yapi Render\n类Postman: Call Api\n脚本执行器: Script Executor\n",
      "url": "/documents/advanced_use.html",
      "children": []
    },
    {
      "title": "Yapi Render(v1.6.1+)",
      "content": "目前yapi的open api更新接口并不会渲染接口备注信息，如果接口备注信息中含有markdown内容，需要配置markdown渲染器\n",
      "url": "/documents/yapi_render.html",
      "children": [
        {
          "title": "markdown渲染器",
          "url": "/documents/yapi_render.html#markdown渲染器",
          "content": "markdown渲染器渲染器目前分为两种，一种是本地渲染器，一种是远程渲染器本地渲染器有三条可用的配置规则:markdown.render.shell:渲染执行的shell，插件将需要渲染的markdown暂存到临时目录，将文件绝对路径作为参数追加到此shell后.\n如果希望将绝对路径放在其他位置，使用#fileName占位.\nmarkdown.render.work.dir: 执行渲染shell的工作文件夹\nmarkdown.render.timeout:渲染超时时间\n配置示例:markdown.render.shell=/usr/local/bin/node render.jsmarkdown.render.work.dir=/项目路径/yapi-markdown-render\nmarkdown.render.timeout=3000\n远程渲染器只需要配置远程服务地址即可:markdown.render.server:远程服务地址，这个地址接受POSTHTTP请求\n配置示例:markdown.render.server=http://localhost:3000/render"
        },
        {
          "title": "目前可用渲染器:",
          "url": "/documents/yapi_render.html#目前可用渲染器",
          "content": "目前可用渲染器:node版markdown渲染器:yapi-markdown-render\n目前提供的渲染服务服务保证不以任何途径保存用户上传的内容,服务运行的代码始终与yapi-markdown-render主分支保持一致.\n不保证此服务长期稳定有效.请尽量自行部署yapi-markdown-render使用\n为防止服务被攻击/滥用,服务可能记录访问ip,亦有可能将异常ip加入黑名单.如有顾虑,请自行部署.\nmarkdown.render.server=http://www.itangcent.com/render"
        }
      ]
    },
    {
      "title": "Call(类Postman)",
      "content": "打开项目中的包含api的文件\n右键文件内容选择Generate...或者用[Alt + Insert]/[Ctrl+Enter](快捷键可能不一样)\"\n然后选择Call\n可以自行配置快捷键\n可以通过相关配置实现自动登录\nCall相关规则\n\n    规则的key\n规则目标(上下文)\n版本\n规则描述\n\n\n\n\n    http.call.before\nrequest\nv1.9.0+\nhttp请求前回调\n\n\n    http.call.after\nrequest&response\nv1.9.0+\nhttp请求后回调\n\n\n点击规则配置查看更多.",
      "url": "/documents/call.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/script_executor.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/docs.html",
      "children": [
        {
          "title": "Javadoc",
          "url": "/documents/docs.html#javadoc",
          "content": "Javadocwiki\noracle\nbaike\n"
        },
        {
          "title": "KDoc",
          "url": "/documents/docs.html#kdoc",
          "content": "KDockotlin-doc\n"
        },
        {
          "title": "ScalaDoc",
          "url": "/documents/docs.html#scaladoc",
          "content": "ScalaDocscaladoc\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/java_doc_demo.html",
      "children": [
        {
          "title": "api demo",
          "url": "/documents/java_doc_demo.html#api-demo",
          "content": "api demo/**\n * 分类名称\n * 分类备注/描述\n *\n * @module 归属项目\n */\n@RestController\n@RequestMapping(value = \"/pathOfCtrl\")\npublic class MockCtrl {\n\n    /**\n    * api名称\n    * api描述\n    * @param param1 参数1的名称或描述\n    * @param param2 可以用`@link`来表示当前参数的取值是某个枚举{@link some.enum.or.constant.class}\n    * @param param3 当目标枚举字段与当前字段名不一致,额外指定{@link some.enum.or.constant.class#property1}\n    * @return 响应描述\n    */\n    @RequestMapping(value = \"/pathOfApi1\")\n    public Result methodName1(long param1,\n                      @RequestParam String param2,\n                      @RequestParam(required = false, defaultValue = \"defaultValueOfParam3\") String param3){\n        ...\n    }\n\n\n    /**\n    * 默认使用`application/x-www-form-urlencoded`,\n    * 对于`@RequestBody`将使用`application/json`\n    * 可以用注解`@Deprecated`来表示api废弃\n    * 也可以用注释`@deprecated`\n    *\n    * @deprecated 改用{@link #methodName3(String)}\n    */\n    @Deprecated\n    @RequestMapping(value = \"/pathOfApi2\")\n    public Result methodName2(@RequestBody MockDtoOrVo jsonModel){\n        ...\n    }\n\n    /**\n    * 所有注释或者参数描述中都可以使用`@link`来引用另一个API\n    * 例如:\n    * 请先访问{@link #methodName4(String)}\n\n    * 也可以使用`@see`来引用另一个API\n    *\n    * @param param1 参数1的名称或描述 可以从{@link #methodName5(String)}中获得\n    * @see #methodName6(String)\n    * @deprecated 改用{@link #methodName7(String)}\n    */\n    @Deprecated\n    @RequestMapping(value = \"/pathOfApi3\")\n    public Result methodName3(long param1){\n        ...\n    }\n\n    ...\n}\n"
        },
        {
          "title": "model(dto/vo) demo",
          "url": "/documents/java_doc_demo.html#modeldtovo-demo",
          "content": "model(dto/vo) demopublic class MockDtoOrVo {\n    /**\n     * 字段注释\n     */\n    private Long field1;\n\n    private Double field2;//注释也可以写在这\n\n    /**\n     * 使用@see来说明当前字段的取值是某个枚举\n     * @see some.enum.or.constant.class\n     */\n    private int field3;\n\n    /**\n     * 当目标枚举字段与当前字段名不一致,额外指定\n     * @see some.enum.or.constant.class#property1\n     */\n    private int field4;\n\n    /**\n     * 可以用注解`@Deprecated`来表示字段被废弃\n     * 也可以用注释`@deprecated`\n     * @deprecated It's a secret\n     */\n    @Deprecated\n    private int field5;\n\n    /**\n     * 如果使用javax.validation的话\n     * 可以使用@NotBlank/@NotNull表示字段必须\n     */\n    @NotBlank\n    @NotNull\n    private String field6;\n\n    ...\n}\n"
        }
      ]
    }
  ],
  "配置": [
    {
      "title": "通用配置",
      "content": "",
      "url": "/setting/index.html",
      "children": [
        {
          "title": "零配置,开箱即用",
          "url": "/setting/index.html#零配置,开箱即用",
          "content": "零配置,开箱即用插件安装后，无需任何配置即可使用. 一般来说, 当导出API的过程中需要提供某些参数, 插件将以弹框的方式提供输入.\n按要求填入即可\n"
        },
        {
          "title": "额外的配置方法",
          "url": "/setting/index.html#额外的配置方法",
          "content": "额外的配置方法\n在IDEA中设置\n\n方便快捷, 可以对插件的默认行为做出调整\n\n\n\n使用项目内配置文件\n\n可定制化程度高，可以高度适配个性化业务\n\n\n警告:文档所有规则均为示例,请自行按照需求调整."
        }
      ]
    },
    {
      "title": "在IDE中设置(全局)",
      "content": "Preferences(Settings) > Other Settings > EasyApi\n",
      "url": "/setting/ide-setting.html",
      "children": [
        {
          "title": "通用配置",
          "url": "/setting/ide-setting.html#通用配置",
          "content": "通用配置Common :log: 一般来说使用一段时间后,log可以设置为HIGH,减少不必要的输出当出现异常情况时,可以设置为LOW,获的更多信息\nSupport :methodDoc: 勾选后，允许导出方法文档, 亦可用于导出rpc相关文档\n支持导出到markdown/yapi\n"
        },
        {
          "title": "Postman:",
          "url": "/setting/ide-setting.html#通用配置-postman",
          "content": "Postman:token: 用于设置或更新postman privateToken, 可以从Postman Integrations Dashboard获得\n"
        },
        {
          "title": "Yapi:",
          "url": "/setting/ide-setting.html#通用配置-yapi",
          "content": "Yapi:server 即部署的yapi地址，如:http://127.0.0.1:3000/\ntokens 即yapi项目中用于请求项目openapi的私有token，获取方式为项目->设置->token 配置 -> 工具标识\nMarkdown :outputDemo: 导出markdown文档时, 为每个API生成一个响应demo\noutputCharset: 选择导出markdown文档时使用的字符集\nCache :global: 全局缓存\nproject: 当前项目缓存\nintelligent :inferEnable: 允许插件在遇到不确定的方法返回类型为(Object，Some)时尝试通过代码流进行推断,并根据项目需求设置maxDeep(最大推断深度)\nmaxDeep: 允许推断的最大深度\ngetter as field: 尝试读取getter方法作为json字段\nuse recommend config: 使用内置的推荐配置\n"
        },
        {
          "title": "内置可选推荐配置",
          "url": "/setting/ide-setting.html#内置可选推荐配置",
          "content": "内置可选推荐配置可以通过勾选来选择需要的配置\n内置推荐配置源代码: portal\n"
        }
      ]
    },
    {
      "title": "使用配置文件(当前项目)",
      "content": "",
      "url": "/setting/local-file-config.html",
      "children": [
        {
          "title": "将配置文件添加到项目或模块根目录中",
          "url": "/setting/local-file-config.html#将配置文件添加到项目或模块根目录中",
          "content": "将配置文件添加到项目或模块根目录中\n\n文件\n类型\n适用的操作\n\n\n\n\n.easy.api.config\nproperties\nmarkdown/postman/yapi/call\n\n\n.easy.api.yml/.easy.api.yaml\nyml\nmarkdown/postman/yapi/call\n\n\n.postman.config\nproperties\npostman\n\n\n.postman.yml/.postman.yaml\nyml\npostman\n\n\n.yapi.config\nproperties\nyapi\n\n\n.yapi.yml/.yapi.yaml\nyml\nyapi\n\n\n"
        },
        {
          "title": "properties类型配置(推荐)",
          "url": "/setting/local-file-config.html#properties类型配置推荐",
          "content": "properties类型配置(推荐)\n一般的配置是:key=value\n\n\n简单的多行配置,以\\结尾:\n\nkey=value\\    aaaa\\\n    bbb\nkey2=value2\n复杂的多行配置,以```结尾开启多行配置,以单独一行```表示结束:\nkey=groovy:```if(condition){\n    //some script\n}\n```\n带filter的配置:\nkey[filter]=value注意key[filter]=value有可能解析错误,可以尝试切换成\nkey=groovy:if(filter)value以下三条配置等价:\n#单行配置http.call.before=groovy:logger.info(\"call:\"+request.url())\n#以\\接新行\nhttp.call.before=groovy:\\\nlogger.info(\"call:\"+request.url())\n#以```包裹多行\nhttp.call.before=groovy:```\nlogger.info(\"call:\"+request.url())\n```\n"
        },
        {
          "title": "yml/yaml (兼容)",
          "url": "/setting/local-file-config.html#ymlyaml-兼容",
          "content": "yml/yaml (兼容)\n使用snakeyaml解析\n\n\n参考:\nbaike | wiki\n\n"
        },
        {
          "title": "properties.additional",
          "url": "/setting/local-file-config.html#properties.additional",
          "content": "properties.additional在配置文件中可以使用properties.additional来加载额外的配置文件:\nproperties.additional=$additional_properties_file_path$常用于需要存放用户相关的配置\n"
        },
        {
          "title": "假设配置后的目录结构如下:",
          "url": "/setting/local-file-config.html#properties.additional-假设配置后的目录结构如下",
          "content": "假设配置后的目录结构如下:project-root├── java(module1)\n│   ├── common.iml\n│   ├── pom.xml\n│   ├── src\n│   │   ├── main\n│   │   │   ├── java\n│   │   │   │   └── com\n│   │   │   │       └── **\n│   │   │   │           └── **\n│   │   │   │               └── **\n│   │   │   │                   └── **.java\n│   │   │   └── resources\n│   │   └── test\n│   │       └── java\n│   └────.easy.api.config①\n├── kotlin(module2)\n│   ├── kotlin-demo.iml\n│   ├── pom.xml\n│   ├── src\n│   │   ├── main\n│   │   │   ├── kotlin\n│   │   │   │   └── com\n│   │   │   │       └── **\n│   │   │   │           └── **\n│   │   │   │               └── **\n│   │   │   │                   └── **\n│   │   │   │                       └── **.kt\n│   │   │   └── resources\n│   │   │       ├── application.yaml②\n│   │   │       ├── static\n│   │   │       └── templates\n│   │   └── test\n│   │       └── kotlin\n│   └────.easy.api.yml③\n├── springboot-demo(module3)\n│   ├── pom.xml\n│   ├── springboot-demo.iml\n│   └── src\n│       ├── main\n│       │   ├── java\n│       │   │   └── com\n│       │   │       └── **\n│       │   │           └── **\n│       │   │               └── **\n│       │   │                   └── **\n│       │   │                       └── **\n│       │   │                           └── **.java\n│       │   └── resources\n│       │       ├── application.properties④\n│       │       ├── static\n│       │       └── templates\n│       └── test\n├── springboot-webflux-demo(module4)\n│   ├── pom.xml\n│   ├── springboot-webflux-demo.iml\n│   └── src\n│       ├── main\n│       │   ├── java\n│       │   │   └── **\n│       │   │       └── **\n│       │   │           └── **\n│       │   │               └── **\n│       │   │                   └── **\n│       │   │                       └── **.java\n│       │   └── resources\n│       │       └── application.yml⑤\n│       └── test\n└────.easy.api.config⑥\n"
        },
        {
          "title": "上述结构中:",
          "url": "/setting/local-file-config.html#properties.additional-上述结构中",
          "content": "上述结构中:①: 只对java(module1)生效\n②: 如果开启了默认推荐配置的话,默认会加载,所以其中的参数可以在③中通过{property}来使用\n③: 只对kotlin(module2)生效\n④/⑤: 与②一样application.properties/application.yml/application.yaml都可以被加载\n⑥: 对java(module1)/kotlin(module2)/springboot-demo(module3)/springboot-webflux-demo(module4)都生效\n①/③/④/⑤/⑥均为可选配置. 一般来说尽量在项目根目录下创建配置文件(即⑥)来管理配置即可.\n"
        }
      ]
    },
    {
      "title": "Yapi相关参数配置",
      "content": "在导出过程中如果需要yapi相关参数，将会以弹窗的方式提供输入\n也可以在Preferences(Settings) > Other Settings > EasyApi 中手动配置\n需要提供的参数有\n\nserver 即部署的yapi地址，如:http://127.0.0.1:3000/\ntokens 即yapi项目中用于请求项目openapi的私有token，获取方式为 项目->设置->token 配置 -> 工具标识\n\n\n",
      "url": "/setting/yapi.html",
      "children": []
    },
    {
      "title": "Postman相关参数配置",
      "content": "\n在导出过程中如果需要postman的token，将会以弹窗的方式提供输入\n\n\n也可以在Preferences(Settings) > Other Settings > EasyApi 中手动配置\n\n\npostman的token,可以从Postman Integrations Dashboard获得\n\n",
      "url": "/setting/postman.html",
      "children": []
    },
    {
      "title": "Yapi mock规则",
      "content": "默认对于枚举类型或注释里引用的枚举类型的字段，会mock为目标枚举值\n有两种额外的配置方式，根据实际情况选择适合的方式配置\n",
      "url": "/setting/yapi-mock.html",
      "children": [
        {
          "title": "通过合适的注释关联枚举/常量",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量",
          "content": "通过合适的注释关联枚举/常量"
        },
        {
          "title": "字段名与关联的枚举值字段名相同",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量-字段名与关联的枚举值字段名相同",
          "content": "字段名与关联的枚举值字段名相同/*** 用户类型\n* @see UserType\n*/\nprivate Integer type;\n导出API结果为:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "字段名与关联的枚举值字段名不同",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量-字段名与关联的枚举值字段名不同",
          "content": "字段名与关联的枚举值字段名不同/*** 用户类型\n* @see UserType#type\n*/\nprivate Integer userType;\n导出API结果为:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nuserType\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "关联一个类中的所有常量",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量-关联一个类中的所有常量",
          "content": "关联一个类中的所有常量/*** 用户类型\n* @see com.itangcent.common.constant.UserTypeConstant\n*/\nprivate Integer type;\n导出API结果为:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "关联一个类中的部分常量",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量-关联一个类中的部分常量",
          "content": "关联一个类中的部分常量/*** 用户类型\n* @see com.itangcent.common.constant.UserTypeConstant#ADMIN\n* @see com.itangcent.common.constant.UserTypeConstant#MEMBER\n*/\nprivate Integer type;\n导出API结果为:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2枚举备注: 1 :管理员 2 :成员 mock: @pick([1,2])\n\n\n"
        },
        {
          "title": "从代码中获取mock规则",
          "url": "/setting/yapi-mock.html#从代码中获取mock规则",
          "content": "从代码中获取mock规则配置灵活, 但有代码/注释侵入性\n非常适合有校验框架的情况, 如javax.validation\n参见:field.mock\n"
        },
        {
          "title": "通过字段名及类型等特征来配置mock规则",
          "url": "/setting/yapi-mock.html#通过字段名及类型等特征来配置mock规则",
          "content": "通过字段名及类型等特征来配置mock规则配置稍难, 零侵入\n非常适合字段名定义很规范的项目\n配置方式为: mock.[field|type]=@mock,参见下方示例.\n一般先增加一些自定义mock规则## 增加自定义mock规则#mockjs官方示例: http://mockjs.com/examples.html\n#定义一些基础的规则\n#中国手机号\nphone=1@pick([\"34\",\"35\",\"36\",\"37\",\"38\",\"39\",\"50\",\"5\",\"52\",\"58\",\"59\",\"57\",\"82\",\"87\",\"88\",\"70\",\"47\",\"30\",\"3\",\"32\",\"55\",\"56\",\"85\",\"86\",\"33\",\"53\",\"80\",\"89\"])@string(\"number\", 8)\n#毫秒时间戳\nmtimestamp=@now('T')\n#0-9\ndigit=@natural(0,9)\n#小于1000的自然数\nnatural_lt_1000=@natural(0,1000)\n#小数点后两位\nfloat_with_two=@natural(0,10000).@natural(0,100)\n#http url\nhttp_url=@pick([\"http\",\"https\"])://www.@domain()/@string('lower',1,8)?@string('lower',2,4)=@string('number',1,2)\n#objectId 只是字符和位数，不满足具体协议\nobjectId=@string(\"0123456789abcdef\",24,24)\n然后使用 mockjs 提供的规则与自定义的规则来定制最后输出到YAPI的mock信息#常见的响应mockmock.[c|integer]=0\nmock.[code|integer]=0\nmock.[status|integer]=0\nmock.[ok|boolean]=true\nmock.[success|boolean]=true\nmock.[m|string]=\nmock.[msg|string]=\nmock.[message|string]=\nmock.[errMsg|string]=\n\n#常见的分页mock\nmock.[*.p|integer]=1\nmock.[*.l|integer]=@pick([\"10\",\"15\",\"100\"])\nmock.[*.t|integer]=@natural(0,1000)\nmock.[*.offset|integer]=1\nmock.[*.page|integer]=1\nmock.[*.pageIndex|integer]=1\nmock.[*.pageSize|integer]=@pick([\"10\",\"15\",\"100\"])\nmock.[*.limit|integer]=@pick([\"10\",\"15\",\"100\"])\nmock.[*.total|integer]=@natural(0,1000)\n\n# 整型的xxxTime mock为时间戳\nmock.[*Time|integer]=${mtimestamp}\n\n#性别\nmock.[*.sex|integer]=@natural(0,2)\nmock.[*.sex|string]=@pick([\"男\",\"女\"])\nmock.[*.gender|integer]=@natural(0,2)\nmock.[*.gender|string]=@pick([\"男\",\"女\"])\n\n#用户信息相关\nmock.[*.phone|string]=${phone}\nmock.[*.mobile|string]=${phone}\nmock.[*Phone|string]=${phone}\nmock.[*Mobile|string]=${phone}\nmock.[*.provinceName|string]=@province\nmock.[*ProvinceName|string]=@province\nmock.[*.cityName|string]=@city\nmock.[*CityName|string]=@city\nmock.[*.districtName|string]=@county\nmock.[*DistrictName|string]=@county\nmock.[*.address]=@cword(2,3)路@natural(1,1500)号\n\n#链接\nmock.[*.url|string]=${http_url}\nmock.[*.link|string]=${http_url}\nmock.[*.linkUrl|string]=${http_url}\nmock.[*Link|string]=${http_url}\n\n# integer和number更自然一些\nmock.[*Type|integer]=${digit}\nmock.[*Status|integer]=${digit}\nmock.[*.type|integer]=${digit}\nmock.[*.status|integer]=${digit}\nmock.[*|integer]=@natural(0,10000)\nmock.[*|number]=@float(0,10000)\n\n"
        }
      ]
    },
    {
      "title": "支持的规则value的取值规则",
      "content": "\n\n    规则的key\n规则目标(上下文)\n版本\n规则描述\n\n\n\n\n    module\nclass\nv0.7.2+\n为api分组\n\n\n    ignore\nclass/method\nv0.7.2+\n忽略API\n\n\n    json.rule.field.name\nfield\nv0.7.2+\n设置输出的字段名(用于json中字段名与类中字段名不一致)\n\n\n    json.rule.field.ignore\nfield\nv0.7.2+\n忽略字段(设置某些字段不出现在json中,或不需要请求时给出) 已废弃, 使用field.ignore代替\n\n\n    field.ignore\nfield\nv2.0.0+\n忽略字段(设置某些字段不出现在json中,或不需要请求时给出)\n\n\n☆json.rule.convert\n-\nv0.7.2+\n用于设置某些类型转换为其他类型处理，通常用于使用了Spring的自定义类型转换器的情况\n\n\n    json.rule.enum.convert\nclass\nv1.2.0+\n用于枚举类型的特殊转换\n\n\n☆field.doc\nfield\nv0.7.2+\n字段的额外注释\n\n\n    method.doc\nmethod\nv0.7.2+\n方法(api)的额外注释\n\n\n    class.doc\nclass\nv1.3.0+\n类上的额外注释\n\n\n    param.doc\narg\nv1.3.0+\n参数的额外注释\n\n\n    param.required\narg\nv0.7.3+\nAPI参数是否为必须(即不可为空)\n\n\n    param.ignore\narg\nv1.3.0+\n忽略API参数\n\n\n    param.default.value\narg\nv1.3.0+\nAPI参数的默认值\n\n\n    param.http.type\narg\nv2.0.0+\n用于设置API参数在HTTP请求中的类型\n\n\n    param.demo\n-\nv1.9.3+\n用以设置参数的示例值\n\n\n    method.content.type\n-\nv1.9.7+\n用以设置API请求的content-type\n\n\n    method.default.http.method\nmethod\nv1.4.2+\n设置默认的api的HttpMethod\n\n\n    method.additional.header\nmethod\nv1.3.0+\nAPI需要额外的header\n\n\n\n\n\n{name: \"header name\",value: \"\",desc: \"\",required:false, example:\"\"}\n\n\n    method.additional.param\nmethod\nv1.3.0+\nAPI需要额外的参数\n\n\n\n\n\n{name: \"param name\",value: \"defaultValue\",desc: \"\",required:false}\n\n\n    method.additional.response.header\nmethod\nv1.3.0+\nAPI的响应包含额外的header\n\n\n\n\n\n{name: \"header name\",value: \"\",desc: \"\",required:false, example:\"\"}\n\n\n    field.required\nfield\nv0.7.3+\n字段是否为必须(即不可为空)\n\n\n☆field.mock\nfield\nv1.4.2+\n生成yapimock信息\n\n\n    field.mock.resolveProperty\n-\nv1.4.2+\n用以开关是否解析field.mock规则结果中的占位符\n\n\n    field.default.value\n-\nv1.7.1+\n用以设置字段的默认值\n\n\n    field.demo\n-\nv1.9.3+\n用以设置字段的示例值\n\n\n    api.tag\nmethod\nv0.7.5+\n标记接口tag\n\n\n    api.open\nmethod\nv1.9.4+\n标记接口是否公开\n\n\n    api.status\nmethod\nv0.8.0+\n标记接口status(应返回done/undone)\n\n\n    class.is.ctrl\nmethod\nv2.0.8+\n允许导出指定类中的api\n\n\n    mdoc.class.filter\nclass\nv0.9.5+\n选择哪些类可以导出方法文档(rpc)\n\n\n    mdoc.method.filter\nmethod\nv0.9.5+\n选择哪些方法可以导出方法文档(rpc)\n\n\n    mdoc.method.path\nmethod\nv0.9.5+\n设置方法文档(rpc)的路径\n\n\n    mdoc.method.http.method\nmethod\nv0.9.5+\n设置方法文档(rpc)HTTP请求方式\n\n\n    class.prefix.path\nclass\nv1.3.0+\n设置API请求前缀\n\n\n    constant.field.ignore\nfield\nv1.3.8+\n忽略常量字段\n\n\n☆method.return.main\nmethod\nv1.3.8+\n设置返回值的核心主体\n\n\n☆method.return\nmethod\nv1.6.1+\n设置返回值的类型\n\n\n    api.name\nmethod\nv1.4.1+\n设置api的名称\n\n\n    folder.name\nmethod\nv1.9.2+\n设置api所属文件夹\n\n\n    path.multi\nmethod\nv1.9.2+\n当API有多个路径时如何选择\n\n\n    postman.host\nclass\nv1.5.2+\n设置postmanAPI的host\n\n\n    postman.prerequest\nclass\nv1.9.5+\n设置postmanAPI的prerequest\n\n\n    class.postman.prerequest\nclass\nv1.9.5+\n设置postman·folder上的prerequest\n\n\n    collection.postman.prerequest\nclass\nv1.9.5+\n设置postman·collection上的prerequest\n\n\n    postman.test\nclass\nv1.9.5+\n设置postmanAPI的test\n\n\n    class.postman.test\nclass\nv1.9.5+\n设置postman·folder上的test\n\n\n    collection.postman.test\nclass\nv1.9.5+\n设置postman·collection上的test\n\n\n    http.call.before\nrequest\nv1.9.0+\nhttp请求前回调\n\n\n    http.call.after\nrequest&response\nv1.9.0+\nhttp请求后回调\n\n\nNOTES:本地文件配置",
      "url": "/setting/config-rule.html",
      "children": [
        {
          "title": "简单规则",
          "url": "/setting/config-rule.html#简单规则",
          "content": "简单规则\n# 读取注释上的tag\n\n\n如 #fake对应取的注释如下:\n/**\n* @fake\n*/\n\n\n\n\n\n@ 读取注解\n\n\n@xxx 读取方法或字段上的注解,如@org.springframework.web.bind.annotation.RequestMapping\n@RequestMapping(\"path\")\npublic class FakeClass{...}\n\n\n\n@xxx#yyy 读取方法或字段上的注解中的attr值,如@org.springframework.web.bind.annotation.RequestMapping#value\n@RequestMapping(value = \"path\")\npublic class FakeClass{...}\n\n\n\n\n"
        },
        {
          "title": "高级脚本规则",
          "url": "/setting/config-rule.html#高级脚本规则",
          "content": "高级脚本规则由于JDK11后js引擎可能缺失，故推荐使用groovy作为首选\ngroovy规则为 groovy:groovyScript\njs规则为 js:jsScript\n脚本中可用工具/对象: tools\n脚本调试: script-executor\n"
        }
      ]
    },
    {
      "title": "module",
      "content": "用于API分组\n当无配置生效时, 默认使用当前模块/项目名\n导出postman时,将为每个module创建一个文件夹\n导出yapi时,每个module对应yapi中的一个项目\n",
      "url": "/setting/rules/module.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/module.html#默认推荐配置",
          "content": "默认推荐配置module=#module"
        },
        {
          "title": "demo",
          "url": "/setting/rules/module.html#demo",
          "content": "demo/*** Mock Apis\n*\n* @module mock\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n"
        }
      ]
    },
    {
      "title": "ignore",
      "content": "用于忽略class/method，不进行解析\n注释在class上时,整个类将被忽略\n注释在method上时,当前方法将被忽略\n",
      "url": "/setting/rules/ignore.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/ignore.html#默认推荐配置",
          "content": "默认推荐配置ignore=#ignore"
        },
        {
          "title": "demo",
          "url": "/setting/rules/ignore.html#demo",
          "content": "demo在类上注释@ignore忽略当前类\n/*** Mock Apis\n*\n* @ignore\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n在方法上注释@ignore忽略当前API\n/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n        * Mock String\n        * @ignore\n        */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "json.rule.field.name",
      "content": "用于设置输出/输入的字段名(用于json中字段名与类中字段名不一致)\n",
      "url": "/setting/rules/json_rule_field_name.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/json_rule_field_name.html#默认推荐配置",
          "content": "默认推荐配置#Support for Jackson annotationsjson.rule.field.name=@com.fasterxml.jackson.annotation.JsonProperty#value\n\n#Support for Gson annotations\njson.rule.field.name=@com.google.gson.annotations.SerializedName#value\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/json_rule_field_name.html#demo",
          "content": "demoTestJsonFieldBean.javapublic class TestJsonFieldBean {    @JsonProperty(\"a\")\n    private Long propertyA;\n\n    @SerializedName(\"b\")\n    private Long propertyB;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/json_rule_field_name.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\na\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nb\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
        }
      ]
    },
    {
      "title": "json.rule.field.ignore",
      "content": "忽略字段(设置某些字段不出现在json中,或不需要请求时给出)\ndeprcated, see field.ignore\n",
      "url": "/setting/rules/json_rule_field_ignore.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/json_rule_field_ignore.html#默认推荐配置",
          "content": "默认推荐配置#Support for Jackson annotationsjson.rule.field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value\n\n#Support for Gson annotations\njson.rule.field.ignore=!@com.google.gson.annotations.Expose#serialize\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/json_rule_field_ignore.html#demo",
          "content": "demoTestJsonIgnoreBean.javapublic class TestJsonIgnoreBean {\n    @Expose(serialize = true)\n    private Long shouldNotIgnoreForGson;\n\n    @Expose(serialize = false)\n    private Long shouldIgnoreForGson;\n\n    @JsonIgnore(false)\n    private Long shouldNotIgnoreForJackson;\n\n    @JsonIgnore\n    private Long shouldIgnoreForJackson;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/json_rule_field_ignore.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nshouldNotIgnoreForGson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nshouldNotIgnoreForJackson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
        },
        {
          "title": "定制化配置示例",
          "url": "/setting/rules/json_rule_field_ignore.html#定制化配置示例",
          "content": "定制化配置示例\n忽略指定名称的字段:\n\n\n配置如下\n# ignore field 'log'\njson.rule.field.ignore=log\n\n\n\n将忽略如下字段\nprivate String log;\n\n\n\n\n\n忽略指定类型的字段:\n\n\n配置如下\n# ignore field 'log' typed xxx.xxx.Log\njson.rule.field.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\n\n将忽略如下字段\nprivate Log xxx;\n\n\n\n\n\n忽略指定modifier的字段:\n\n\n配置如下\n#ignore transient field\njson.rule.field.ignore=groovy:it.hasModifier(\"transient\")||it.hasModifier(\"protected\")\n\n\n\n将忽略如下字段\nprivate transient Int xxx;\nprotected Long yyy;\n\n\n\n\n"
        }
      ]
    },
    {
      "title": "field.ignore",
      "content": "忽略字段(设置某些字段不出现在json中,或不需要请求时给出)\n",
      "url": "/setting/rules/field_ignore.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/field_ignore.html#默认推荐配置",
          "content": "默认推荐配置#Support for Jackson annotationsfield.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value\n\n#Support for Gson annotations\nfield.ignore=!@com.google.gson.annotations.Expose#serialize\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_ignore.html#demo",
          "content": "demoTestJsonIgnoreBean.javapublic class TestJsonIgnoreBean {\n    @Expose(serialize = true)\n    private Long shouldNotIgnoreForGson;\n\n    @Expose(serialize = false)\n    private Long shouldIgnoreForGson;\n\n    @JsonIgnore(false)\n    private Long shouldNotIgnoreForJackson;\n\n    @JsonIgnore\n    private Long shouldIgnoreForJackson;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_ignore.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nshouldNotIgnoreForGson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nshouldNotIgnoreForJackson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
        },
        {
          "title": "定制化配置示例",
          "url": "/setting/rules/field_ignore.html#定制化配置示例",
          "content": "定制化配置示例\n忽略指定名称的字段:\n\n\n配置如下\n# ignore field 'log'\nfield.ignore=log\n\n\n\n将忽略如下字段\nprivate String log;\n\n\n\n\n\n忽略指定类型的字段:\n\n\n配置如下\n# ignore field 'log' typed xxx.xxx.Log\nfield.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\n\n将忽略如下字段\nprivate Log xxx;\n\n\n\n\n\n忽略指定modifier的字段:\n\n\n配置如下\n#ignore transient field\nfield.ignore=groovy:it.hasModifier(\"transient\")||it.hasModifier(\"protected\")\n\n\n\n将忽略如下字段\nprivate transient Int xxx;\nprotected Long yyy;\n\n\n\n\n"
        }
      ]
    },
    {
      "title": "json.rule.convert",
      "content": "用于设置某些类型转换为其他类型处理，通常用于使用了Spring的自定义类型转换器的情况\n",
      "url": "/setting/rules/json_rule_convert.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/json_rule_convert.html#默认推荐配置",
          "content": "默认推荐配置#The ObjectId and Date are parsed as stringsjson.rule.convert[org.bson.types.ObjectId]=java.lang.String\njson.rule.convert[java.util.Date]=java.lang.String\njson.rule.convert[java.sql.Timestamp]=java.lang.String\njson.rule.convert[java.time.LocalDateTime]=java.lang.String\njson.rule.convert[java.time.LocalDate]=java.lang.String\n\n#resolve HttpEntity/RequestEntity/ResponseEntity\n###set resolveProperty = false\njson.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object\njson.rule.convert[#regex:org.springframework.http.HttpEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.RequestEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object\njson.rule.convert[#regex:org.springframework.http.ResponseEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object\n###set resolveProperty = true\n"
        }
      ]
    },
    {
      "title": "json.rule.enum.convert",
      "content": "用于设置枚举类型的转换\n优先级低于json.rule.convert\n假定有如下枚举类public enum UserType {    //管理员\n    ADMIN(1, \"管理员\"),\n\n    //成员\n    MEMBER(2, \"成员\"),\n\n    //游客\n    GUEST(3, \"游客\");\n\n    private int type;\n    private String desc;\n\n    public int getType() {\n        return type;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int type, String desc) {\n        this.type = type;\n        this.desc = desc;\n    }\n}\n对于如下字段/*** 用户类型\n*/\nprivate UserType type;\n",
      "url": "/setting/rules/json_rule_enum_convert.html",
      "children": [
        {
          "title": "默认情况",
          "url": "/setting/rules/json_rule_enum_convert.html#默认情况",
          "content": "默认情况\n默认将枚举类型转换为String处理,给出可用值为枚举中的实例名\n\n\n上述字段将被处理为\n\n/*** 用户类型\n* @see UserType\n*/\nprivate String type;\n导出API结果为:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\nstring\n非必须\n\n用户类型\n枚举: ADMIN,MEMBER,GUEST枚举备注: ADMIN :管理员 MEMBER :成员 GUEST :游客mock: @pick([\"ADMIN\",\"MEMBER\",\"GUEST\"]))\n\n\n"
        },
        {
          "title": "增加配置",
          "url": "/setting/rules/json_rule_enum_convert.html#增加配置",
          "content": "增加配置做如下配置,将其转换为int处理,给出可用值为枚举中的type字段\njson.rule.enum.convert[com.itangcent.common.constant.UserType]=~#type则上述字段将被处理为\n/*** 用户类型\n* @see UserType#type\n*/\nprivate int type;\n导出API结果为:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "统一处理",
          "url": "/setting/rules/json_rule_enum_convert.html#统一处理",
          "content": "统一处理特殊的，声明如下接口:\npackage com.itangcent.common.constant;\npublic interface TypeAble {\n    int getType();\n}\n改造UserType,使其继承TypeAble\npublic enum UserType implements TypeAble {    ...\n}\n则可做如下配置,将所有继承TypeAble的类转换为int处理,给出可用值为枚举中的type字段\njson.rule.enum.convert[groovy:it.isExtend(\"com.itangcent.common.constant.TypeAble\")]=~#type"
        }
      ]
    },
    {
      "title": "field.doc(doc.field)",
      "content": "字段的额外注释\n",
      "url": "/setting/rules/field_doc.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/field_doc.html#默认推荐配置",
          "content": "默认推荐配置#deprecated info(java)field.doc[#deprecated]=groovy:\"\\n「已废弃」\" + it.doc(\"deprecated\")\nfield.doc[@java.lang.Deprecated]=「已废弃」\n\n#deprecated info(kotlin)\nfield.doc[@kotlin.Deprecated]=groovy:\"\\n「已废弃」\" + it.ann(\"kotlin.Deprecated\",\"message\")\n\n"
        },
        {
          "title": "添加对swagger @ApiModelProperty支持",
          "url": "/setting/rules/field_doc.html#添加对swagger-apimodelproperty支持",
          "content": "添加对swagger @ApiModelProperty支持field.doc=@io.swagger.annotations.ApiModelProperty#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_doc.html#demo",
          "content": "demoSwaggerModel.javapublic class SwaggerModel {\n    /**\n     * @deprecated 不再使用\n     */\n    @ApiModelProperty(value = \"字段A\", required = true)\n    private String a;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_doc.html#作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\na\nstring\n非必须\n\n字段A「已废弃」不再使用\n\n\n\n"
        }
      ]
    },
    {
      "title": "method.doc(doc.method)",
      "content": "方法(API)的额外注释\n",
      "url": "/setting/rules/method_doc.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/method_doc.html#默认推荐配置",
          "content": "默认推荐配置#deprecated info(java)method.doc[#deprecated]=groovy:\"\\n「已废弃」\" + it.doc(\"deprecated\")\nmethod.doc[@java.lang.Deprecated]=「已废弃」\n\nmethod.doc[groovy:it.containingClass().hasDoc(\"deprecated\")]=groovy:\"\\n「已废弃」\" + it.containingClass().doc(\"deprecated\")\nmethod.doc[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=「已废弃」\n\n\n#deprecated info(kotlin)\nmethod.doc[@kotlin.Deprecated]=groovy:\"\\n「已废弃」\" + it.ann(\"kotlin.Deprecated\",\"message\")\nmethod.doc[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=groovy:\"\\n「已废弃」 \" + it.containingClass().ann(\"kotlin.Deprecated\",\"message\")\n\n"
        },
        {
          "title": "添加对swagger @ApiOperation支持",
          "url": "/setting/rules/method_doc.html#添加对swagger-apioperation支持",
          "content": "添加对swagger @ApiOperation支持method.doc=@io.swagger.annotations.ApiOperation#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/method_doc.html#demo",
          "content": "demo/**\n* Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @ApiOperation(value = \"mock string\")\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "class.doc(doc.class)",
      "content": "类上的额外注释\n\n将作为yapi接口分类的描述，但是由于yapi openapi并未提供修改分类的接口,故当分类已存在时, 此配置实质上无法生效\n\n\n",
      "url": "/setting/rules/class_doc.html",
      "children": [
        {
          "title": "添加对swagger @Api支持",
          "url": "/setting/rules/class_doc.html#添加对swagger-api支持",
          "content": "添加对swagger @Api支持class.doc=@io.swagger.annotations.Api#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/class_doc.html#demo",
          "content": "demo@Api(value = \"mock api tools\", @RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "param.doc(doc.param)",
      "content": "参数的额外注释\n",
      "url": "/setting/rules/param_doc.html",
      "children": [
        {
          "title": "在注释中给出参数类型",
          "url": "/setting/rules/param_doc.html#在注释中给出参数类型",
          "content": "在注释中给出参数类型param.doc=js:\"类型:\"+it.type().name()"
        },
        {
          "title": "在注释中给出参数类型并去掉java包名",
          "url": "/setting/rules/param_doc.html#在注释中给出参数类型并去掉java包名",
          "content": "在注释中给出参数类型并去掉java包名param.doc=groovy:\"类型:\"+tool.uncapitalize(it.type().name().replace(\"java.lang.\",\"\"))"
        },
        {
          "title": "示例API",
          "url": "/setting/rules/param_doc.html#在注释中给出参数类型并去掉java包名-示例api",
          "content": "示例API    /**     * 更新用户名\n     *\n     * @param id      用户id\n     * @param newName 新的用户名\n     * @param slogon  个人签名\n     * @deprecated 改用{@link #update(UserInfo)}\n     */\n    @RequestMapping(value = \"/set\", method = RequestMethod.PUT)\n    public Object set(long id,\n                      @RequestParam String newName,\n                      @RequestParam(required = false, defaultValue = \"haha\") String slogon,\n                      @RequestParam(required = false, defaultValue = \"10\") long times) {\n            ...\n    }\n"
        },
        {
          "title": "导出结果如下:",
          "url": "/setting/rules/param_doc.html#在注释中给出参数类型并去掉java包名-导出结果如下",
          "content": "导出结果如下:请求参数:\n\n参数名称\n是否必须\n示例\n备注\n\n\n\n\nid\n是\n\n用户id类型:long\n\n\nnewName\n是\n\n新的用户名 类型:string\n\n\nslogon\n否\n\n个人签名 类型:string\n\n\ntimes\n否\n\n类型:long\n\n\n"
        }
      ]
    },
    {
      "title": "param.required",
      "content": "用于标记API参数是否为必须(即不可为空)\n",
      "url": "/setting/rules/param_required.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/param_required.html#默认推荐配置",
          "content": "默认推荐配置#Support for javax.validation annotationsparam.required=@javax.validation.constraints.NotBlank\nparam.required=@\"javax.validation.constraints.NotNull\nparam.required=@javax.validation.constraints.NotEmpty\n"
        },
        {
          "title": "添加对swagger @ApiParam支持",
          "url": "/setting/rules/param_required.html#添加对swagger-apiparam支持",
          "content": "添加对swagger @ApiParam支持param.required=@io.swagger.annotations.ApiParam#required"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_required.html#demo",
          "content": "demoMockCtrl.java@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\", required = true, defaultValue = \"666666\") long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        },
        {
          "title": "导出结果如下:",
          "url": "/setting/rules/param_required.html#demo-导出结果如下",
          "content": "导出结果如下:请求参数:\n\n参数名称\n是否必须\n示例\n备注\n\n\n\n\nseed\n是\n666666\nseed for mock\n\n\n"
        }
      ]
    },
    {
      "title": "param.ignore",
      "content": "忽略API参数\n",
      "url": "/setting/rules/param_ignore.html",
      "children": [
        {
          "title": "添加对swagger @ApiParam支持",
          "url": "/setting/rules/param_ignore.html#添加对swagger-apiparam支持",
          "content": "添加对swagger @ApiParam支持param.ignore=@io.swagger.annotations.ApiParam#hidden"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_ignore.html#demo",
          "content": "demo@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\",hidden = true)  long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "param.default.value",
      "content": "用于设置API参数的默认值\n",
      "url": "/setting/rules/param_default_value.html",
      "children": [
        {
          "title": "添加对swagger @ApiParam支持",
          "url": "/setting/rules/param_default_value.html#添加对swagger-apiparam支持",
          "content": "添加对swagger @ApiParam支持param.default.value=@io.swagger.annotations.ApiParam#defaultValue"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_default_value.html#demo",
          "content": "demo@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\",defaultValue = \"666\")  long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "param.http.type",
      "content": "用于设置API参数在HTTP请求中的类型(位置:body/form/query)\n@RequestBody/@ModelAttribute/@RequestHeader/@PathVariable等忽略此规则\n参数注解有@RequestParam且HttpMehotd为GET也忽略此规则\n其他不满足规则的参数在规则缺省的情况下，优先采取query模式\n",
      "url": "/setting/rules/param_http_type.html",
      "children": [
        {
          "title": "配置示例",
          "url": "/setting/rules/param_http_type.html#配置示例",
          "content": "配置示例"
        },
        {
          "title": "全设置为form, 优先使用表单进行提交:",
          "url": "/setting/rules/param_http_type.html#配置示例-全设置为form,-优先使用表单进行提交",
          "content": "全设置为form, 优先使用表单进行提交:param.http.type=form"
        },
        {
          "title": "RequestParam作为query, 其他做为form:",
          "url": "/setting/rules/param_http_type.html#配置示例-requestparam作为query,-其他做为form",
          "content": "RequestParam作为query, 其他做为form:param.http.type[@org.springframework.web.bind.annotation.RequestParam]=queryparam.http.type=form\n"
        }
      ]
    },
    {
      "title": "param.demo",
      "content": "参数示例信息\n",
      "url": "/setting/rules/param_demo.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/param_demo.html#demo",
          "content": "demo配置如下:param.demo=groovy:it.method().doc(\"demo\",it.name())使用如下:    /**     * @demo newName tangcent\n     */\n    @RequestMapping(value = \"/set\", method = RequestMethod.PUT)\n    public Object set(@RequestParam String newName) {\n                      ...\n    }\n"
        }
      ]
    },
    {
      "title": "method.content.type",
      "content": "用于设置API请求默认的content-type, 插件依然会在必要的时候强行覆盖掉.\n\n如当遇到@RequestBody时，将被强行覆盖为application/json\n\n\n",
      "url": "/setting/rules/method_content_type.html",
      "children": [
        {
          "title": "默认情况下，插件优先使用application/x-www-form-urlencoded, 如希望优先使用multipart/form-data",
          "url": "/setting/rules/method_content_type.html#默认情况下，插件优先使用applicationx-www-form-urlencoded,-如希望优先使用multipartform-data",
          "content": "默认情况下，插件优先使用application/x-www-form-urlencoded, 如希望优先使用multipart/form-data配置如下:method.content.type=multipart/form-data"
        }
      ]
    },
    {
      "title": "method.default.http.method",
      "content": "设置默认的api的HttpMethod\n缺省情况下，当API上未指定HttpMethod，且无特殊参数时默认使用GET\n",
      "url": "/setting/rules/method_default_http_method.html",
      "children": [
        {
          "title": "如希望默认使用POST",
          "url": "/setting/rules/method_default_http_method.html#如希望默认使用post",
          "content": "如希望默认使用POST配置如下:method.default.http.method=POST"
        }
      ]
    },
    {
      "title": "method.additional.header",
      "content": "API需要额外的header\n",
      "url": "/setting/rules/method_additional_header.html",
      "children": [
        {
          "title": "如JWT, 所有的接口都需要在header中携带token",
          "url": "/setting/rules/method_additional_header.html#如jwt,-所有的接口都需要在header中携带token",
          "content": "如JWT, 所有的接口都需要在header中携带tokenmethod.additional.header={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true, example:\"\"}"
        },
        {
          "title": "如果需要排除指定开放的接口不需要token可以这样配置:",
          "url": "/setting/rules/method_additional_header.html#如果需要排除指定开放的接口不需要token可以这样配置",
          "content": "如果需要排除指定开放的接口不需要token可以这样配置:假定有如下注解:\npackage com.itangcent.common.annotation;\n/**\n * 声明接口为公开接口\n */\n@Documented\n@Retention(RUNTIME)\n@Target({TYPE, METHOD})\npublic @interface Public {\n}\n\n则可如此配置\nmethod.additional.header[!@com.itangcent.common.annotation.Public]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true}等价于\nmethod.additional.header[groovy:!it.hasAnn(\"com.itangcent.common.annotation.Public\")]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true}"
        },
        {
          "title": "demo",
          "url": "/setting/rules/method_additional_header.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * public api\n    * Token is not required\n    */\n    @Public\n    @GetMapping(\"/apiWithoutToken\")\n    public Result apiWithoutToken() {\n        return Result.success(\"no token\");\n    }\n\n    /**\n    * private api\n    * Token is required\n    */\n    @GetMapping(\"/apiWithToken\")\n    public Result apiWithToken() {\n        return Result.success(\"wow,you got a token\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "method.additional.param",
      "content": "API需要额外的param\n仅适用于url参数,不支持form/body\n",
      "url": "/setting/rules/method_additional_param.html",
      "children": [
        {
          "title": "例如接口都需要在param中携带token",
          "url": "/setting/rules/method_additional_param.html#例如接口都需要在param中携带token",
          "content": "例如接口都需要在param中携带tokenmethod.additional.param={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true}"
        },
        {
          "title": "如果需要排除指定开放的接口不需要token可以这样配置:",
          "url": "/setting/rules/method_additional_param.html#如果需要排除指定开放的接口不需要token可以这样配置",
          "content": "如果需要排除指定开放的接口不需要token可以这样配置:假定有如下注解:\npackage com.itangcent.common.annotation;\n/**\n * 声明接口为公开接口\n */\n@Documented\n@Retention(RUNTIME)\n@Target({TYPE, METHOD})\npublic @interface Public {\n}\n\n则可如此配置\nmethod.additional.param[!@com.itangcent.common.annotation.Public]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true, example:\"\"}等价于\nmethod.additional.param[groovy:!it.hasAnn(\"com.itangcent.common.annotation.Public\")]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true, example:\"\"}"
        },
        {
          "title": "demo",
          "url": "/setting/rules/method_additional_param.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * public api\n    * Token is not required\n    */\n    @Public\n    @GetMapping(\"/apiWithoutToken\")\n    public Result apiWithoutToken() {\n        return Result.success(\"no token\");\n    }\n\n    /**\n    * private api\n    * Token is required\n    */\n    @GetMapping(\"/apiWithToken\")\n    public Result apiWithToken() {\n        return Result.success(\"wow,you got a token\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "field.required",
      "content": "用于标记字段是否为必须(即不可为空)\n",
      "url": "/setting/rules/field_required.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/field_required.html#默认推荐配置",
          "content": "默认推荐配置#Support for javax.validation annotationsfield.required=@\"javax.validation.constraints.NotBlank\nfield.required=@javax.validation.constraints.NotNull\nfield.required=@javax.validation.constraints.NotEmpty\n"
        },
        {
          "title": "添加对swagger @ApiModelProperty支持",
          "url": "/setting/rules/field_required.html#添加对swagger-apimodelproperty支持",
          "content": "添加对swagger @ApiModelProperty支持field.required=@io.swagger.annotations.ApiModelProperty#required"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_required.html#demo",
          "content": "demoSwaggerModel.javapublic class SwaggerModel {\n    @ApiModelProperty(value = \"字段A\", required = true)\n    private String a;\n\n    public String getA() {\n        return a;\n    }\n\n    public void setA(String a) {\n        this.a = a;\n    }\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_required.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\na\ninteger\n必须\n\n\nmock: @natural(0,10000)\n\n\n"
        }
      ]
    },
    {
      "title": "field.mockfield.mock.resolveProperty",
      "content": "用于生成yapi相关mock信息\n用以开关是否解析field.mock规则结果中的占位符如${float_with_two}\n默认为true,如果不希望解析，可以设置为关闭\nfield.mock.resolveProperty=false",
      "url": "/setting/rules/field_mock.html",
      "children": [
        {
          "title": "默认推荐配置有三部分",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分",
          "content": "默认推荐配置有三部分"
        },
        {
          "title": "允许通过注释@mock定义mock规则",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分-允许通过注释mock定义mock规则",
          "content": "允许通过注释@mock定义mock规则#yapi mockfield.mock=#mock\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分-demo",
          "content": "demoValidationDemoDto.javapublic class ValidationDemoDto {\n    @NotNull\n    private String str;\n\n    @Min(666)\n    private Integer minInt;\n\n    @Max(999)\n    private Integer maxInt;\n\n    @Min(666)\n    private Double minDouble;\n\n    @Max(999)\n    private double maxDouble;\n\n    @Min(666)\n    @Max(999)\n    private Integer rangeInt;\n\n    @Min(66)\n    @Max(9999)\n    private float rangeFloat;\n\n    @Negative\n    private Integer negative;\n\n    @NegativeOrZero\n    private Integer negativeOrZero;\n\n    @Positive\n    private Integer positive;\n\n    @PositiveOrZero\n    private Integer positiveOrZero;\n\n    @Positive\n    private Float positiveFloat;\n\n    @PositiveOrZero\n    private float positiveOrZeroFloat;\n\n    @Email\n    private String email;\n\n    @AssertTrue\n    private boolean assertTrue;\n\n    @AssertFalse\n    private boolean assertFalse;\n\n    //getter&setter\n}\n\n作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nrangeInt\ninteger\n非必须\n\n\nmock: @integer(666,999)\n\n\npositiveOrZeroFloat\nnumber\n非必须\n\n\nmock: @float(0,88888888,6)\n\n\nmaxInt\ninteger\n非必须\n\n\nmock: @integer(0,999)\n\n\nminInt\ninteger\n非必须\n\n\nmock: @integer(666)\n\n\nassertFalse\nboolean\n非必须\n\n\nmock: false\n\n\nmaxDouble\nnumber\n非必须\n\n\nmock: @float(0,999)\n\n\nminDouble\nnumber\n非必须\n\n\nmock: @float(666)\n\n\npositive\ninteger\n非必须\n\n\nmock: @integer(1,88888888)\n\n\npositiveOrZero\ninteger\n非必须\n\n\nmock: @integer(0,88888888)\n\n\nstr\nstring\n必须\n\n\n\n\n\nnegative\ninteger\n非必须\n\n\nmock: @integer(-888888888,-1)\n\n\nrangeFloat\nnumber\n非必须\n\n\nmock: @float(66,9999,6)\n\n\nassertTrue\nboolean\n非必须\n\n\nmock: true\n\n\nnegativeOrZero\ninteger\n非必须\n\n\nmock: @integer(-888888888,0)\n\n\npositiveFloat\nnumber\n非必须\n\n\nmock: @float(0.01,88888888,6)\n\n\nemail\nstring\n非必须\n\n\nmock: @email\n\n\n"
        },
        {
          "title": "通用mock",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分-通用mock",
          "content": "通用mock#mock for date\n###set resolveMulti = first\njava_date_types=[\"java.util.Date\",\"java.sql.Timestamp\",\"java.time.LocalDate\",\"java.time.LocalDateTime\"]\nfield.mock[groovy:${java_date_types}.contains(it.type().name())&&it.jsonType().name()==\"java.lang.String\"] = groovy:\"@date\"\nfield.mock[groovy:${java_date_types}.contains(it.type().name())&&it.jsonType().name()==\"java.lang.Long\"] = groovy:\"@timestamp@string(\\\"number\\\", 3)\"\n###set resolveMulti = error\n"
        },
        {
          "title": "javax.validation相关mock",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分-javax.validation相关mock",
          "content": "javax.validation相关mock# mock for javax.validation\n###set resolveMulti = first\n# define var\nnumber_min=-9999\nnumber_max=9999\nfloat_dmin=2\njava_integer_types=[\"java.lang.Integer\",\"int\",\"java.lang.Long\",\"long\",\"java.lang.Short\",\"short\",\"java.math.BigInteger\"]\njava_float_types=[\"java.lang.Float\",\"float\",\"java.lang.Double\",\"double\",\"java.math.BigDecimal\"]\n# mock_integer_or_float=${java_integer_types}.contains(it.type().name())?\"@integer\":\"@float\"\n\n# AssertTrue|AssertFalse|Email\nfield.mock[@javax.validation.constraints.AssertTrue]=true\nfield.mock[@javax.validation.constraints.AssertFalse]=false\nfield.mock[@javax.validation.constraints.Email]=groovy:\"@email\"\n\n# Positive&PositiveOrZero\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(1,${number_max})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.PositiveOrZero\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,${number_max})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0.01,${number_max},${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.PositiveOrZero\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,${number_max},${float_dmin})\"\n\n# Negative&NegativeOrZero\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(${number_min},-1)\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.NegativeOrZero\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(${number_min},0)\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(${number_min},0.01,${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.NegativeOrZero\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(${number_min},0,${float_dmin})\"\n\n# Max+Min\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&it.hasAnn(\"javax.validation.constraints.Min\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.Min\")+\",\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&it.hasAnn(\"javax.validation.constraints.Min\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.Min\")+\",\"+it.ann(\"javax.validation.constraints.Max\")+\",${float_dmin})\"\n\n# Max|Min\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Min\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.Min\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Min\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.Min\")+\")\"\n\n# DecimalMax+DecimalMin\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\",${float_dmin})\"\n\n# DecimalMax|DecimalMin\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\",${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",${float_dmin})\"\n\n###set resolveMulti = error\n"
        },
        {
          "title": "使用示例",
          "url": "/setting/rules/field_mock.html#使用示例",
          "content": "使用示例配置如下#yapi mockfield.mock=#mock\n\n#小数点后两位\nfloat_with_two=@natural(0,10000).@natural(0,100)\nDemoDto.javapublic class DemoDto {\n    /**\n     * 价格\n     * @mock ${float_with_two}\n     */\n    @NotNull\n    private Float price;\n\n}\n导出结果\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nprice\nnumber\n必须\n\n价格\nmock: @natural(0,10000).@natural(0,100)\n\n\n"
        }
      ]
    },
    {
      "title": "field.default.value(v1.7.1+)",
      "content": "用于设置字段的默认值\n",
      "url": "/setting/rules/field_default_value.html",
      "children": [
        {
          "title": "原生编码支持",
          "url": "/setting/rules/field_default_value.html#原生编码支持",
          "content": "原生编码支持默认的所有含有默认初始值的字段，取其默认初始值.如:private Integer code = 200;//响应码"
        },
        {
          "title": "额外的配置",
          "url": "/setting/rules/field_default_value.html#额外的配置",
          "content": "额外的配置配置如下:field.default.value=#defaultDemoDto.javapublic class DemoDto{\n    /**\n     * 价格\n     * @default 666\n     */\n    @NotNull\n    private Float price;\n\n    ...\n}\n导出结果如下:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nprice\nnumber\n必须\n666\n价格\n\n\n\n"
        }
      ]
    },
    {
      "title": "field.demo",
      "content": "字段示例信息\n",
      "url": "/setting/rules/field_demo.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/field_demo.html#demo",
          "content": "demo配置如下:field.demo=#demo使用如下:    /**     * @demo tangcent\n     */\n    private String name;//用户名\n"
        }
      ]
    },
    {
      "title": "api.tagapi.tag.delimiter",
      "content": "标记接口tag\n用于分割tags, 默认tag的分隔符是,\\n\n\n如规则得到的tag是a,b,则会被切割为[a,b]\n如希望a,b视为一个规则,可以设置api.tag.delimiter=\\n,则不再对,进行切割\n如希望将a|b|c切割为[a,b,c],可以设置api.tag.delimiter=|\\n\n如希望将a,b|c,d切割为[a,b,c,d],可以设置api.tag.delimiter=|,\\n\n\n\n",
      "url": "/setting/rules/api_tag.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/api_tag.html#默认推荐配置",
          "content": "默认推荐配置#yapi tagapi.tag[@java.lang.Deprecated]=deprecated\napi.tag[#deprecated]=deprecated\napi.tag[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=deprecated\napi.tag[groovy:it.containingClass().hasDoc(\"deprecated\")]=deprecated\n\n#yapi tag for kotlin\napi.tag[@kotlin.Deprecated]=deprecated\napi.tag[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=deprecated\n"
        },
        {
          "title": "添加对swagger @ApiOperation支持",
          "url": "/setting/rules/api_tag.html#添加对swagger-apioperation支持",
          "content": "添加对swagger @ApiOperation支持api.tag=@io.swagger.annotations.ApiOperation#tags"
        },
        {
          "title": "demo",
          "url": "/setting/rules/api_tag.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @ApiOperation(value = \"mock string\", tags = {\"swagger\", \"test\"})\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        },
        {
          "title": "导出效果",
          "url": "/setting/rules/api_tag.html#导出效果",
          "content": "导出效果列表页\n\n\n接口名称\n接口路径\n接口分类\n状态\ntag\n\n\n\n\nMock String\n/mock/string\nMock Apis\n已完成\nswaggertest\n\n\n详情页\n\n\n基本信息\n\n\n\n\n接口名称： Mock String               创 建 人：  admin\n\n\n状  态： 已完成                 更新时间：  2019-12-07 22:31:28\n\n\nTag ：    swagger, test\n\n\n接口路径： GET /mock/string\n\n\nMock地址： http://127.0.0.1:3000/mock/172/mock/string\n\n\n"
        }
      ]
    },
    {
      "title": "api.open",
      "content": "标记接口是否公开\n",
      "url": "/setting/rules/api_open.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/api_open.html#demo",
          "content": "demo配置如下:api.open=#open使用如下:/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    * @open\n    */\n    @ApiOperation(value = \"mock string\", opens = {\"swagger\", \"test\"})\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "api.status",
      "content": "标记接口status\n",
      "url": "/setting/rules/api_status.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/api_status.html#默认推荐配置",
          "content": "默认推荐配置#yapi statusapi.status[#undone]=undone\napi.status[#todo]=undone\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/api_status.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    * @undone\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "class.is.ctrl",
      "content": "默认的只会导出注解有org.springframework.stereotype.Controller或org.springframework.web.bind.annotation.RestController\n的类中的api.\n当有导出未注解org.springframework.stereotype.Controller或org.springframework.web.bind.annotation.RestController\n的类中的api的需求时,可以配置此规则\n",
      "url": "/setting/rules/class_is_ctrl.html",
      "children": [
        {
          "title": "允许导出所有类中的api",
          "url": "/setting/rules/class_is_ctrl.html#允许导出所有类中的api",
          "content": "允许导出所有类中的api则可配置\nclass.is.ctrl=true"
        },
        {
          "title": "允许导出注释有ctrl类中的api",
          "url": "/setting/rules/class_is_ctrl.html#允许导出注释有ctrl类中的api",
          "content": "允许导出注释有ctrl类中的api则可配置\nclass.is.ctrl=#ctrlDemo/** * @ctrl\n */\n@RequestMapping(\"/base\")\npublic interface BaseController {\n\n   /**\n    * 当前ctrl名称\n    *\n    * @public\n    */\n   @RequestMapping(\"/ctrl/name\")\n   String ctrlName();\n}\n"
        }
      ]
    },
    {
      "title": "mdoc.class.filter",
      "content": "用于选择哪些类可以导出方法(rpc)文档, 根据当前项目情况\nDemo如果所有的RPC接口类都以Client结尾, 则可配置:\nmdoc.class.filter=groovy:it.name().endsWith(\"Client\")如果所有的RPC接口类包都在a.b.c.client, 则可配置:\nmdoc.class.filter=groovy:it.name().startsWith(\"a.b.c.client\")",
      "url": "/setting/rules/mdoc_class_filter.html",
      "children": []
    },
    {
      "title": "mdoc.method.path",
      "content": "用于设置方法文档(rpc)的路径\n为了防止重载方法覆盖,默认生成的path后加上了参数信息:$className/$methodName/$args\n根据项目情况，可自行配置以简化路径长度\n",
      "url": "/setting/rules/mdoc_method_path.html",
      "children": [
        {
          "title": "修改默认行为",
          "url": "/setting/rules/mdoc_method_path.html#修改默认行为",
          "content": "修改默认行为假设有如下类package com.itangcent.dubbo.demo.client;\n/**\n * 用户相关Client\n *\n * @module user_dubbo\n */\npublic interface UserClient {\n\n    /**\n     * 更新用户名\n     *\n     * @param id      用户id\n     * @param newName 新的用户名\n     * @param slogon  个人签名\n     * @deprecated 改用{@link #update(UserInfo)}\n     */\n    public UserInfo set(long id, String newName,\n                        String slogon,\n                        long times);\n}\n默认情况下导出的路径为:\n/com.itangcent.dubbo.demo.client.UserClient/set/long/java.lang.String/java.lang.String/long/\n如果确认无重载方法，可以尝试去掉参数信息:配置如下:\nmdoc.method.path=groovy:it.containingClass().name()+\"/\"+it.name()导出的接口路径为: /com.itangcent.dubbo.demo.client.UserClient/set\n可以尝试去掉包名:配置如下:\nmdoc.method.path=groovy:it.containingClass().getSimpleName()+\"/\"+it.name()导出的接口路径为:/UserClient/set\n可以进一步将类名转换为小写:配置如下:\nmdoc.method.path=groovy:it.containingClass().getSimpleName().toLowerCase()+\"/\"+it.name()导出的接口路径为:/userclient/update\n"
        }
      ]
    },
    {
      "title": "mdoc.method.http.method",
      "content": "设置方法文档(rpc)HTTP请求方式, 默认POST\n",
      "url": "/setting/rules/mdoc_method_http_method.html",
      "children": [
        {
          "title": "修改默认行为",
          "url": "/setting/rules/mdoc_method_http_method.html#修改默认行为",
          "content": "修改默认行为将无参方法设置为GET配置如下:\nmdoc.method.http.method=groovy:it.argCnt()==0?\"GET\":null"
        }
      ]
    },
    {
      "title": "class.prefix.path",
      "content": "设置API请求前缀\n",
      "url": "/setting/rules/class_prefix_path.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/class_prefix_path.html#默认推荐配置",
          "content": "默认推荐配置#Resolve spring properties###set ignoreUnresolved = true\nclass.prefix.path=${server.servlet.context-path}\n###set ignoreUnresolved = false\n"
        },
        {
          "title": "使用推荐配置后，可识别如下spring配置",
          "url": "/setting/rules/class_prefix_path.html#使用推荐配置后，可识别如下spring配置",
          "content": "使用推荐配置后，可识别如下spring配置spring application.properties\nserver.servlet.context-path=/demospring application.yaml/application.yml\nserver:  servlet:\n      context-path: /demo\n"
        },
        {
          "title": "自定义demo",
          "url": "/setting/rules/class_prefix_path.html#自定义demo",
          "content": "自定义democlass.prefix.path=/demo"
        }
      ]
    },
    {
      "title": "constant.field.ignore",
      "content": "忽略常量字段\n",
      "url": "/setting/rules/constant_field_ignore.html",
      "children": [
        {
          "title": "默认推荐配置(有误,待修复)",
          "url": "/setting/rules/constant_field_ignore.html#默认推荐配置有误,待修复",
          "content": "默认推荐配置(有误,待修复)#ignore serialVersionUIDconstant.field.ignore=serialVersionUID\n使用如下配置代替:#ignore serialVersionUIDconstant.field.ignore=groovy:it.name()==\"serialVersionUID\"\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/constant_field_ignore.html#demo",
          "content": "demo/**\n * 用户类型\n */\npublic class UserTypeConstant implements Serializable {\n\n    private static final long serialVersionUID = -4607862808303533196L;\n\n    public static final int ADMIN = 1;//管理员\n    public static final int MEMBER = 2;//成员\n    public static final int GUEST = 3;//游客\n\n}\n"
        },
        {
          "title": "对于如下注释",
          "url": "/setting/rules/constant_field_ignore.html#对于如下注释",
          "content": "对于如下注释@see com.itangcent.common.constant.UserTypeConstant或者{@link com.itangcent.common.constant.UserTypeConstant}"
        },
        {
          "title": "将被解析为:",
          "url": "/setting/rules/constant_field_ignore.html#将被解析为",
          "content": "将被解析为:枚举: 1,2,3\n枚举备注: 1 :管理员 2 :成员 3 :游客\n\nmock: @pick([\"1\",\"2\",\"3\"])\n"
        }
      ]
    },
    {
      "title": "method.return.main",
      "content": "此配置仅设置返回值的核心主体，使得@return的注释落在主体属性上,不影响返回类型及字段.\n",
      "url": "/setting/rules/method_return_main.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/method_return_main.html#demo",
          "content": "demoResult.javapackage com.itangcent.common.dto;\npublic class Result implements IResult {\n\n    private Integer code;//响应码\n\n    private String msg;//响应消息\n\n    private T data;//响应数据\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "可做如下配置",
          "url": "/setting/rules/method_return_main.html#demo-可做如下配置",
          "content": "可做如下配置method.return.main[groovy:it.returnType().isExtend(\"com.itangcent.common.dto.Result\")]=data"
        },
        {
          "title": "接口示例1:",
          "url": "/setting/rules/method_return_main.html#demo-接口示例1",
          "content": "接口示例1:接口代码:\n    /**     * 获取当前用户类型\n     *\n     * @return 当前用户类型,{@link com.itangcent.common.constant.UserTypeConstant}\n     */\n    @GetMapping(\"/type\")\n    public Result currUserType() {\n        return Result.success(UserType.values()[new Random(System.currentTimeMillis()).nextInt(UserType.values().length)].getType());\n    }\n导出API的响应:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nmsg\nstring\n非必须\n\n响应消息\nmock:\n\n\ncode\ninteger\n非必须\n\n响应码\nmock: 0\n\n\ndata\ninteger\n非必须\n\n响应数据当前用户类型,[用户类型]\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "接口示例2:",
          "url": "/setting/rules/method_return_main.html#demo-接口示例2",
          "content": "接口示例2:接口代码:\n    /**     * 获取所有用户类型\n     *\n     * @return {@link com.itangcent.common.constant.UserType#getType()}\n     */\n    @GetMapping(\"/types\")\n    public Result> types() {\n        final List types = Stream.of(UserType.values()).map(UserType::getType).collect(Collectors.toList());\n        return Result.success(types);\n    }\n导出API的响应:\n\n\n    名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\n    msg\nstring\n非必须\n\n响应消息\nmock:\n\n\n    code\ninteger\n非必须\n\n响应码\nmock: 0\n\n\n＋data\ninteger[]\n非必须\n\n响应数据[用户类型]\nitem 类型: integer\n\n\n\ninteger\n\n\n\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "附:",
          "url": "/setting/rules/method_return_main.html#demo-附",
          "content": "附:UserTypeConstant.java/** * 用户类型\n */\npublic class UserTypeConstant implements Serializable {\n\n    private static final long serialVersionUID = -4607862808303533196L;\n\n    public static final int ADMIN = 1;//管理员\n    public static final int MEMBER = 2;//成员\n    public static final int GUEST = 3;//游客\n\n}\nUserType.javapackage com.itangcent.common.constant;\n/**\n * 用户类型\n */\npublic enum UserType {\n    //管理员\n    ADMIN(1, \"管理员\"),\n\n    //成员\n    MEMBER(2, \"成员\"),\n\n    //游客\n    GUEST(3, \"游客\");\n\n    private int type;//用户类型\n\n    private String desc;\n\n    //constructors...\n\n    //getters...\n}\n"
        }
      ]
    },
    {
      "title": "method.return",
      "content": "设置方法的返回值\n常用于以下情况:\n\n方法返回Object\n方法返回类型中的泛型类型未明确//\n方法返回类型与实际响应无关，例如通过操作HttpServletResponse来返回响应\n\n\n",
      "url": "/setting/rules/method_return.html",
      "children": [
        {
          "title": "如以下API",
          "url": "/setting/rules/method_return.html#如以下api",
          "content": "如以下APIAPI:    /**     * 通过`HttpServletResponse`写入响应\n     */\n    @RequestMapping(value = \"/writeByResponse\", method = RequestMethod.GET)\n    public void writeByResponse(HttpServletResponse response) throws IOException {\n        UserInfo userInfo = new UserInfo();\n        userInfo.setId(1l);\n        userInfo.setName(\"Tom\");\n        userInfo.setAge(25);\n        response.getOutputStream().write(new Gson().toJson(Result.success(userInfo)).getBytes(Charsets.UTF_8));\n    }\n这个方法返回的是void,但实际响应的是Result, 所以需要通过额外的途径来表明此API的实际响应.\n简单的,可做如下配置:method.return=#real_return使用方法:/** * @real_return com.itangcent.common.dto.Result\n */\n为了方便书写，我们可以尝试使用{@link}来设置实际响应类型，利用helper.resolveLink来解析例如做如下配置:method.return[#real_return]=groovy: helper.resolveLink(it.doc(\"real_return\"))使用方法:/** * @real_return {@link Result}\n */\n更进一步的，如果所有的响应都由com.itangcent.common.dto.Result包装做如下配置:method.return[#real_return]=groovy: \"com.itangcent.common.dto.Result\"使用方法:/** * @real_return {@link UserInfo}\n */\n"
        }
      ]
    },
    {
      "title": "api.name",
      "content": "用于设置API名称\n缺省情况下，默认使用api注释的第一行作为API的名称\n",
      "url": "/setting/rules/api_name.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/api_name.html#demo",
          "content": "demo配置如下:# read api name from tag `api.name`api.name=#api.name\n使用如下:/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * @api.name Mock String\n    * @undone\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n"
        }
      ]
    },
    {
      "title": "folder.name",
      "content": "用于设置API所属文件夹的名称\n缺省情况下，默认使用api所在类作为所属文件夹\n",
      "url": "/setting/rules/folder_name.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/folder_name.html#demo",
          "content": "demo配置如下:# read folder name from tag `folder`folder.name=#folder\n使用如下:/*** 一些Mock相关的API\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * @folder Mock字符串\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n默认情况下上述api会归属到文件夹一些Mock相关的API,加上注释@folder Mock字符串后归属到Mock字符串"
        }
      ]
    },
    {
      "title": "path.multi",
      "content": "用于当API有多个可用路径时如何处理\n目前可用策略(策略不区分大小写):\n\n\n可用策略\n策略描述\n\n\n\n\nFIRST\n选择第一个可用路径\n\n\nLAST\n选择最后一个可用路径\n\n\nLONGEST\n选择最长的可用路径\n\n\nSHORTEST\n选择最短的可用路径\n\n\nALL\n为每一个可用路径生成一个api\n\n\n可能的配置如下:选择第一个可用路径\npath.multi=first选择最后一个可用路径\npath.multi=last选择最长的可用路径\npath.multi=longest选择最短的可用路径\npath.multi=shortest为每一个可用路径生成一个api\npath.multi=all也可以由api自行决定选择策略path.multi=#multi使用如下:/*** 一些Mock相关的API\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * @multi all\n    */\n    @GetMapping(value = {\"/string\", \"string2\"})\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n",
      "url": "/setting/rules/path_multi.html",
      "children": []
    },
    {
      "title": "postman.host",
      "content": "设置postmanAPI的host\n默认使用当前模块名作为API的host,例如{{user}}\n",
      "url": "/setting/rules/postman_host.html",
      "children": [
        {
          "title": "固定host配置如下",
          "url": "/setting/rules/postman_host.html#固定host配置如下",
          "content": "固定host配置如下postman.host=http://localhost:8080"
        }
      ]
    },
    {
      "title": "postman.prerequestclass.postman.prerequestcollection.postman.prerequest",
      "content": "\n设置postmanAPI的prerequest\n\n\n允许设置多条规则\n\n\n设置folder上的prerequest\n\n\n允许设置多条规则\n\n\n上下文为class\n\n\n设置collection上的prerequest\n\n\n允许设置多条规则\n\n\n注意collection.postman.prerequest无上下文,即it为null\n\n",
      "url": "/setting/rules/postman_prerequest.html",
      "children": [
        {
          "title": "固定prerequest配置示例如下",
          "url": "/setting/rules/postman_prerequest.html#固定prerequest配置示例如下",
          "content": "固定prerequest配置示例如下postman.prerequest=```pm.environment.get(\"variable_key\");\npm.globals.get(\"variable_key\");\npm.variables.get(\"variable_key\");\npm.environment.set(\"variable_key\", \"variable_value\");\npm.globals.set(\"variable_key\", \"variable_value\");\npm.environment.unset(\"variable_key\");\npm.globals.unset(\"variable_key\");\npm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});\n```\n"
        },
        {
          "title": "为有指定注解的api加上prerequest",
          "url": "/setting/rules/postman_prerequest.html#为有指定注解的api加上prerequest",
          "content": "为有指定注解的api加上prerequestpostman.prerequest[@com.itangcent.common.annotation.RequiredLogin]=```pm.environment.get(\"variable_key\");\npm.globals.get(\"variable_key\");\npm.variables.get(\"variable_key\");\npm.environment.set(\"variable_key\", \"variable_value\");\npm.globals.set(\"variable_key\", \"variable_value\");\npm.environment.unset(\"variable_key\");\npm.globals.unset(\"variable_key\");\npm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});\n```\n"
        },
        {
          "title": "为没有指定注解的api加上prerequest",
          "url": "/setting/rules/postman_prerequest.html#为没有指定注解的api加上prerequest",
          "content": "为没有指定注解的api加上prerequestpostman.prerequest[!@com.itangcent.common.annotation.Public]=```pm.environment.get(\"variable_key\");\npm.globals.get(\"variable_key\");\npm.variables.get(\"variable_key\");\npm.environment.set(\"variable_key\", \"variable_value\");\npm.globals.set(\"variable_key\", \"variable_value\");\npm.environment.unset(\"variable_key\");\npm.globals.unset(\"variable_key\");\npm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});\n```\n"
        },
        {
          "title": "在配置中提供多个prerequest,由代码注释来选择使用哪个",
          "url": "/setting/rules/postman_prerequest.html#在配置中提供多个prerequest,由代码注释来选择使用哪个",
          "content": "在配置中提供多个prerequest,由代码注释来选择使用哪个postman.prerequest.groupA=```pm.environment.get(\"variable_key\");\n```\npostman.prerequest.groupB=```\npm.globals.get(\"variable_key\");\n```\npostman.prerequest.groupC=```\npm.environment.set(\"variable_key\", \"variable_value\");\n```\npostman.prerequest.groupD=```\npm.globals.set(\"variable_key\", \"variable_value\");\n```\npostman.prerequest[#prerequest]=groovy:config.get(\"postman.prerequest.\"+it.doc(\"prerequest\"))\n使用如下:/**  * 获取用户列表\n  *\n  * @param type 用户类型 {@link com.itangcent.common.constant.UserType}\n  * @prerequest groupA\n  */\n@RequestMapping(value = \"/list\", method = RequestMethod.GET)\npublic IResult list(Integer type) {\n    ...\n    return Result.success(Collections.singletonList(userInfo));\n}\n"
        }
      ]
    },
    {
      "title": "postman.testclass.postman.testcollection.postman.test",
      "content": "\n设置postmanAPI的test\n\n\n允许设置多条规则\n\n\n设置folder上的test\n\n\n允许设置多条规则\n\n\n上下文为class\n\n\n设置collection上的test\n\n\n允许设置多条规则\n\n\n注意collection.postman.test无上下文,即it为null\n\n",
      "url": "/setting/rules/postman_test.html",
      "children": [
        {
          "title": "固定test配置示例如下",
          "url": "/setting/rules/postman_test.html#固定test配置示例如下",
          "content": "固定test配置示例如下postman.test=```pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\npm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});\nvar jsonObject = xml2Json(responseBody);\nvar schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});\n```\n"
        },
        {
          "title": "为有指定注解的api加上test",
          "url": "/setting/rules/postman_test.html#为有指定注解的api加上test",
          "content": "为有指定注解的api加上testpostman.test[@com.itangcent.common.annotation.RequiredLogin]=```pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\npm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});\nvar jsonObject = xml2Json(responseBody);\nvar schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});\n```\n"
        },
        {
          "title": "为没有指定注解的api加上test",
          "url": "/setting/rules/postman_test.html#为没有指定注解的api加上test",
          "content": "为没有指定注解的api加上testpostman.test[!@com.itangcent.common.annotation.Public]=```pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\npm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});\nvar jsonObject = xml2Json(responseBody);\nvar schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});\n```\n"
        },
        {
          "title": "在配置中提供多个test,由代码注释来选择使用哪个",
          "url": "/setting/rules/postman_test.html#在配置中提供多个test,由代码注释来选择使用哪个",
          "content": "在配置中提供多个test,由代码注释来选择使用哪个postman.test.groupA=```pm.test(\"Body is correct\", function () {    pm.response.to.have.body(\"response_body_string\");\n});\n```\npostman.test.groupB=```\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\n```\npostman.test.groupC=```\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\n```\npostman.test.groupD=```\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\n```\npostman.test[#test]=groovy:config.get(\"postman.test.\"+it.doc(\"test\"))\n使用如下:/**  * 获取用户列表\n  *\n  * @param type 用户类型 {@link com.itangcent.common.constant.UserType}\n  * @test groupA\n  */\n@RequestMapping(value = \"/list\", method = RequestMethod.GET)\npublic IResult list(Integer type) {\n    ...\n    return Result.success(Collections.singletonList(userInfo));\n}\n"
        }
      ]
    },
    {
      "title": "http.call.before",
      "content": "http请求前回调\n注意:插件所有的http请求都将触发此回调\n",
      "url": "/setting/rules/http_call_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/http_call_before.html#demo",
          "content": "demo记录插件所有的请求http.call.before=groovy:logger.info(\"call:\"+request.url())自动加入指定toeknhttp.call.before=groovy:```request.header(\"token\",\"xxxxxxxxxxxxx\")\n```\n自动加入从localStorage获取的toeknhttp.call.before=groovy:```//从localStorage取token\nrequest.header(\"token\",localStorage.get(\"token\"))\n```\n"
        }
      ]
    },
    {
      "title": "http.call.after",
      "content": "http请求后回调\n注意:插件所有的http请求都将触发此回调\n",
      "url": "/setting/rules/http_call_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/http_call_after.html#demo",
          "content": "demo记录插件所有的请求的响应http.call.after=groovy:logger.info(\"response:\"+response.string())某个接口请求成功后执行其他接口http.call.after=groovy:```//判断是不是指定接口\nif(request.code()==200&&request.url().endsWith(\"/xxx\")){\n    httpClient.post(\"http://xxx/xxx\")\n    .contentType(\"application/json\")\n    .body({\"xxx\":\"xxx\",\"xxx\":\"xxx\"})\n    .call()\n}\n```\nCall自动登陆(Cookie)http.call.after=groovy:```//判断是不是需要登录的接口\nif(response.code()==401){\n    httpClient.post(\"http://xxx/login\")\n        .contentType(\"application/json\")\n        .body({\"username\":\"xxx\",\"passwd\":\"xxx\"})\n        .call()\n    response.discard()//丢弃这一次的请求结果\n}\n```\nCall自动登陆(Token)http.call.after=groovy:```//判断是不是需要登录的接口\nif(response.code()==401){\n    def loginResponse = httpClient.post(\"http://xxx/login\")\n        .contentType(\"application/json\")\n        .body({\"username\":\"xxx\",\"passwd\":\"xxx\"})\n        .call()\n    def token = loginResponse.firstHeader(\"token\")\n    localStorage.set(\"token\",token)\n    response.discard()//丢弃这一次的请求结果\n}\n```\nhttp.call.before=groovy:```\n//从localStorage取token\nrequest.header(\"token\",localStorage.get(\"token\"))\n```\nhost不固定//可以尝试通过正则获取当前请求的hostdef host = regex.getGroup1(\"(https?://.+?)/.*?\",request.url());\nx-www-form-urlencoded提交httpClient.post(\"http://xxx/login\")    .contentType(\"application/x-www-form-urlencoded\")\n    .param(\"username\",\"name\")\n    .param(\"password\",\"pwd\")\n    .call();\n"
        }
      ]
    },
    {
      "title": "提供的工具/对象",
      "content": "\n\n    工具/对象\n规则描述\n\n\n\n\n☆it\n当前规则的应用对象(大多数规则可用)\n\n\n☆tool\n主工具类\n\n\n    regex\n正则工具\n\n\n    logger\n日志工具\n\n\n    helper\n特殊帮助类\n\n\n    httpClient\nhttp相关帮助类\n\n\n    localStorage\n本地存储\n\n\n    config\n配置读取工具\n\n\n",
      "url": "/setting/tools.html",
      "children": []
    },
    {
      "title": "it表示当前规则的应用对象(少数规则没有应用对象)",
      "content": "应用对象只提供方法即it.method()✅，不提供属性it.property❎\n",
      "url": "/setting/tools/it.html",
      "children": [
        {
          "title": "对于class(类)、method(方法/API)、field(字段/属性),arg(参数)都支持如下方法",
          "url": "/setting/tools/it.html#对于class类、method方法api、field字段属性,arg参数都支持如下方法",
          "content": "对于class(类)、method(方法/API)、field(字段/属性),arg(参数)都支持如下方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\nname()\nstring\n名称\nit.name()\n\n\nhasAnn(\"annotation_name\")\nboolean\n是否有指定注解\nit.hasAnn(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nann(\"annotation_name\")\nstring\n获取指定注解值(默认value)\nit.ann(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nann(\"annotation_name\",\"attr\")\nstring\n获取指定注解中的指定参数值\nit.ann(\"org.springframework.web.bind.annotation.RequestMapping\",\"path\")\n\n\ndoc()\nstring\n获取注释值\nit.doc()\n\n\ndoc(\"tag\")\nstring\n获取注释tag值(不需要加@)\nit.doc(\"return\")\n\n\ndocs(\"tag\")\narray\n获取多个注释tag值(不需要加@)\nit.docs(\"see\")\n\n\ndoc(\"tag\",\"subTag\")\nstring\n获取二级注释tag值\nit.doc(\"param\",\"a\")\n\n\nhasDoc(\"tag\")\nstring\n是否有指定注释tag\nit.hasDoc(\"ignore\")\n\n\nhasModifier(\"modifier\")\nstring\n是否有指定修饰\nit.hasModifier(\"public\")\n\n\nmodifiers()\nstring\n获取所有修饰\nit.modifiers()\n\n\nsourceCode()\nstring\n获取当前对象源码\nit.sourceCode()\n\n\ndefineCode()\nstring\n获取当前对象纯定义代码\nit.defineCode()\n\n\ncontextType()\nstring\n当前上下文类型 class/field/method/param\nit.contextType()\n\n\n"
        },
        {
          "title": "不同的应用对象提供额外的方法",
          "url": "/setting/tools/it.html#不同的应用对象提供额外的方法",
          "content": "不同的应用对象提供额外的方法class(类)\n\n\n方法\n返回值\n描述\n示例\n\n\n\n\nmethods()\nmethod[]\n类中的所有方法\nit.methods()\n\n\nmethodCnt()\nint\n类中的方法数\nit.methodCnt()\n\n\nfield()\nfield[]\n类中的所有字段\nit.field()\n\n\nfieldCnt()\nint\n类中的字段数\nit.fieldCnt()\n\n\nisExtend(superClass)\nboolean\n是否继承某个类\nit.isExtend(\"some.class.qualifiedName\")\n\n\nisMap()\nboolean\n是否为Map\nit.isMap()\n\n\nisCollection()\nboolean\n是否为集合\nit.isCollection()\n\n\nisArray()\nboolean\n是否为数组\nit.isArray()\n\n\ntoJson(readGetter)\nstring\n获取当前类型的json字符串\nit.toJson(true)\n\n\ntoJson5(readGetter)\nstring\n获取当前类型的json5字符串\nit.toJson5(true)\n\n\nmethod(方法/API)\n\n\n方法\n返回值\n描述\n示例\n\n\n\n\nreturnType()\nclass\n方法返回类型\nit.returnType()\n\n\nisVarArgs()\nboolean\n是否有不定参\nit.isVarArgs()\n\n\nargs()\narg[]\n方法的所有参数\nit.args()\n\n\nargTypes()\nclass[]\n方法的所有参数类型\nit.argTypes()\n\n\nargCnt()\nint\n方法参数个数\nit.argCnt()\n\n\ncontainingClass()\nclass\n方法所属类\nit.containingClass()\n\n\nreturnJson(needInfer, readGetter)\nclass\n当前方法返回对象的json字符串\nit.returnJson(true,true)\n\n\nfield(字段/属性)\n\n\n方法\n返回值\n描述\n示例\n\n\n\n\ntype()\nclass\n字段类型\nit.type()\n\n\ncontainingClass()\nclass\n字段所属类\nit.containingClass()\n\n\njsonName()\nstring\n字段json名\nit.jsonName()\n\n\njsonType()\nclass\n字段json类型(被转换过的)\nit.jsonType()\n\n\narg(参数)\n\n\n方法\n返回值\n描述\n示例\n\n\n\n\ntype()\nclass\n参数类型\nit.type()\n\n\nisVarArgs()\nboolean\n是否为不定参\nit.isVarArgs()\n\n\n"
        }
      ]
    },
    {
      "title": "tool是提供的主工具类主要方法其他一些方法",
      "content": "\n\n方法\n返回值\n描述\n示例\n\n\n\n\ndebug(obj)\nvoid\ndebug对象,获取对象所有可用方法\ntool.debug(tool)\n\n\nisNullOrEmpty(obj)\nBoolean\n判断对象为null或空,支持null、空字符串、空数组、空集合、空Map\ntool.isNullOrEmpty(obj)\n\n\nnotNullOrEmpty(obj)\nBoolean\n等价于!isNullOrEmpty\ntool.notNullOrEmpty(obj)\n\n\nasArray(obj)\nArray\n将对象转换为数组\ntool.asArray(obj)\n\n\nasList(obj)\nList\n将对象转换为集合\ntool.asList(obj)\n\n\nintersect(any，other)\nArray\n取两个对象的交集\ntool.intersect(any，other)\n\n\nanyIntersect(any，other)\nBoolean\n判断两个对象是否有交集\ntool.anyIntersect(any，other)\n\n\nequalOrIntersect(any，other)\nBoolean\n判断两个对象是否相同或有交集,与anyIntersect不同的是，对于两个空对象，将返回true\ntool.equalOrIntersect(any，other)\n\n\nnewSet(items...)\nSet\n创建Set对象\ntool.newSet(\"ele1\",\"ele2\")\n\n\nnewList(items...)\nList\n创建List对象\ntool.newList(\"ele1\",\"ele2\")\n\n\nnewMap()\nMap\n创建Map对象\ntool.newMap()\n\n\nparseJson(json)\nObject\n解析json字符串\ntool.parseJson(\"{\"key\":\"value\"}\")\n\n\ntoJson(obj)\nObject\n对象转json字符串\ngroovy:tool.toJson([key:\"value\"])js:tool.toJson({key:\"value\"})\n\n\nprettyJson(obj)\nObject\n对象转json字符串(格式化)\ngroovy:tool.prettyJson([key:\"value\"])js:tool.prettyJson({key:\"value\"})\n\n\nheadLine(str)\nstring\n获取字符串第一行\ntool.headLine(\"multi\\nline\")\n\n\ncapitalize(str)\nstring\n字符串首字母大写\ntool.capitalize(\"words\")\n\n\nuncapitalize(str)\nstring\n字符串首字母小写\ntool.uncapitalize(\"Words\")\n\n\nswapCase(str)\nstring\n字符串每个字符大小写转换\ntool.swapCase(\"WoRdS\")\n\n\nupperCase(str)\nstring\n字符串全部大写\ntool.upperCase(\"words\")\n\n\nlowerCase(str)\nstring\n字符串全部小写\ntool.lowerCase(\"words\")\n\n\nreverse(str)\nstring\n字符串反转\ntool.reverse(\"sdrow\")\n\n\nrepeat(str,repeat)\nstring\n重复指定字符串\ntool.repeat(\"x\",10)\n\n\nisNumeric(str)\nstring\n判断字符串是纯数字\ntool.isNumeric(\"123\")\n\n\ntoCamelCase(str)\nstring\n字符串转驼峰式\ntool.toCamelCase(\"some words\",true)\n\n\nnow()\nstring\n获取当前时间 格式为:yyyy-MM-dd HH:mm:ss\ntool.now()\n\n\nnow(pattern)\nstring\n获取当前时间并指定格式\ntool.now(\"yyyy-MM-dd\")\n\n\ntoday()\nstring\n获取当前时间 格式为:yyyy-MM-dd\ntool.today()\n\n\nformat()\nstring\n格视化时间戳\ntool.format(1000000000000,\"yyyy-MM-dd HH:mm:ss\")\n\n\n",
      "url": "/setting/tools/tool.html",
      "children": [
        {
          "title": "isAlpha",
          "url": "/setting/tools/tool.html#isalpha",
          "content": "isAlpha Desc：Checks if the CharSequence contains only Unicode letters.{@code null} will return {@code false}.An empty CharSequence (length()=0) will return {@code false}.tool.isAlpha(null)   = false\ntool.isAlpha(\"\")     = false\ntool.isAlpha(\"  \")   = false\ntool.isAlpha(\"abc\")  = true\ntool.isAlpha(\"ab2c\") = false\ntool.isAlpha(\"ab-c\") = false\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nobject\n{@code true} if only contains letters, and is non-null\n\n\n"
        },
        {
          "title": "substringBefore",
          "url": "/setting/tools/tool.html#substringbefore",
          "content": "substringBefore Desc：Gets the substring before the first occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nA {@code null} separator will return the input string.If nothing is found, the string input is returned.tool.substringBefore(null, *)      = null\ntool.substringBefore(\"\", *)        = \"\"\ntool.substringBefore(\"abc\", \"a\")   = \"\"\ntool.substringBefore(\"abcba\", \"b\") = \"a\"\ntool.substringBefore(\"abc\", \"c\")   = \"ab\"\ntool.substringBefore(\"abc\", \"d\")   = \"abc\"\ntool.substringBefore(\"abc\", \"\")    = \"\"\ntool.substringBefore(\"abc\", null)  = \"abc\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring before the first occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringAfter",
          "url": "/setting/tools/tool.html#substringafter",
          "content": "substringAfter Desc：Gets the substring after the first occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nA {@code null} separator will return the empty string if the\ninput string is not {@code null}.If nothing is found, the empty string is returned.tool.substringAfter(null, *)      = null\ntool.substringAfter(\"\", *)        = \"\"\ntool.substringAfter(*, null)      = \"\"\ntool.substringAfter(\"abc\", \"a\")   = \"bc\"\ntool.substringAfter(\"abcba\", \"b\") = \"cba\"\ntool.substringAfter(\"abc\", \"c\")   = \"\"\ntool.substringAfter(\"abc\", \"d\")   = \"\"\ntool.substringAfter(\"abc\", \"\")    = \"abc\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring after the first occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringBeforeLast",
          "url": "/setting/tools/tool.html#substringbeforelast",
          "content": "substringBeforeLast Desc：Gets the substring before the last occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nAn empty or {@code null} separator will return the input string.If nothing is found, the string input is returned.tool.substringBeforeLast(null, *)      = null\ntool.substringBeforeLast(\"\", *)        = \"\"\ntool.substringBeforeLast(\"abcba\", \"b\") = \"abc\"\ntool.substringBeforeLast(\"abc\", \"c\")   = \"ab\"\ntool.substringBeforeLast(\"a\", \"a\")     = \"\"\ntool.substringBeforeLast(\"a\", \"z\")     = \"a\"\ntool.substringBeforeLast(\"a\", null)    = \"a\"\ntool.substringBeforeLast(\"a\", \"\")      = \"a\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring before the last occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringAfterLast",
          "url": "/setting/tools/tool.html#substringafterlast",
          "content": "substringAfterLast Desc：Gets the substring after the last occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nAn empty or {@code null} separator will return the empty string if\nthe input string is not {@code null}.If nothing is found, the empty string is returned.tool.substringAfterLast(null, *)      = null\ntool.substringAfterLast(\"\", *)        = \"\"\ntool.substringAfterLast(*, \"\")        = \"\"\ntool.substringAfterLast(*, null)      = \"\"\ntool.substringAfterLast(\"abc\", \"a\")   = \"bc\"\ntool.substringAfterLast(\"abcba\", \"b\") = \"a\"\ntool.substringAfterLast(\"abc\", \"c\")   = \"\"\ntool.substringAfterLast(\"a\", \"a\")     = \"\"\ntool.substringAfterLast(\"a\", \"z\")     = \"\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring after the last occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringBetween",
          "url": "/setting/tools/tool.html#substringbetween",
          "content": "substringBetween Desc：Gets the String that is nested in between two Strings.Only the first match is returned.A {@code null} input String returns {@code null}.A {@code null} open/close returns {@code null} (no match).\nAn empty (\"\") open and close returns an empty string.tool.substringBetween(\"wxbyz\", \"\", \"\") = \"b\"\ntool.substringBetween(null, *, *)          = null\ntool.substringBetween(*, null, *)          = null\ntool.substringBetween(*, *, null)          = null\ntool.substringBetween(\"\", \"\", \"\")          = \"\"\ntool.substringBetween(\"\", \"\", \"]\")         = null\ntool.substringBetween(\"\", \"\", \"\")        = null\ntool.substringBetween(\"yabcz\", \"\", \"\")     = \"\"\ntool.substringBetween(\"yabcz\", \"y\", \"z\")   = \"abc\"\ntool.substringBetween(\"yabczyabcz\", \"y\", \"z\")   = \"abc\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nopen\nstring\n\n\n\nclose\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring, {@code null} if no match\n\n\n"
        },
        {
          "title": "substringsBetween",
          "url": "/setting/tools/tool.html#substringsbetween",
          "content": "substringsBetween Desc：Searches a String for substrings delimited by a start and end tag,returning all matching substrings in an array.A {@code null} input String returns {@code null}.A {@code null} open/close returns {@code null} (no match).\nAn empty (\"\") open/close returns {@code null} (no match).tool.substringsBetween(\"abc\", \"\", \"\") = \"a\",\"b\",\"c\"\ntool.substringsBetween(null, *, *)            = null\ntool.substringsBetween(*, null, *)            = null\ntool.substringsBetween(*, *, null)            = null\ntool.substringsBetween(\"\", \"\", \"\")          = \nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nopen\nstring\n\n\n\nclose\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\na String Array of substrings, or {@code null} if no match\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "split",
          "url": "/setting/tools/tool.html#split",
          "content": "split Desc：Splits the provided text into an array, separators specified.This is an alternative to using StringTokenizer.The separator is not included in the returned String array.Adjacent separators are treated as one separator.\nFor more control over the split use the StrTokenizer class.A {@code null} input String returns {@code null}.A {@code null} separatorChars splits on whitespace.tool.split(null, *)         = null\ntool.split(\"\", *)           = \ntool.split(\"abc def\", null) = \"abc\", \"def\"\ntool.split(\"abc def\", \" \")  = \"abc\", \"def\"\ntool.split(\"abc  def\", \" \") = \"abc\", \"def\"\ntool.split(\"ab:cd:ef\", \":\") = \"ab\", \"cd\", \"ef\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparatorChars\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\nan array of parsed Strings, {@code null} if null String input\n\n\n\nstring\n\n\n\n"
        }
      ]
    },
    {
      "title": "regex是提供的正则工具",
      "content": "",
      "url": "/setting/tools/regex.html",
      "children": [
        {
          "title": "getGroup0",
          "url": "/setting/tools/regex.html#getgroup0",
          "content": "getGroup0 Desc：return the group 0 value($0) if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "getGroup1",
          "url": "/setting/tools/regex.html#getgroup1",
          "content": "getGroup1 Desc：return the group 1 value($1) if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "get",
          "url": "/setting/tools/regex.html#get",
          "content": "get Desc：return the special group value if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\ngroupIndex\ninteger\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "getAllGroups",
          "url": "/setting/tools/regex.html#getallgroups",
          "content": "getAllGroups Desc：return all group value as List if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\npattern\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "extract",
          "url": "/setting/tools/regex.html#extract",
          "content": "extract Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\ntemplate\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "delFirst",
          "url": "/setting/tools/regex.html#delfirst",
          "content": "delFirst Desc：Remove the first subString of the input String that matches thepattern with the given replacement string.Params：\n\nname\ntype\ndesc\n\n\n\n\npattern\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "delAll",
          "url": "/setting/tools/regex.html#delall",
          "content": "delAll Desc：Remove the first subString of the input String that matches thepatternParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "delBefore",
          "url": "/setting/tools/regex.html#delbefore",
          "content": "delBefore Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "findAllGroup0",
          "url": "/setting/tools/regex.html#findallgroup0",
          "content": "findAllGroup0 Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "findAllGroup1",
          "url": "/setting/tools/regex.html#findallgroup1",
          "content": "findAllGroup1 Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "findAll",
          "url": "/setting/tools/regex.html#findall",
          "content": "findAll Params：\n\nname\ntype\ndesc\n\n\n\n\npattern\nobject\n\n\n\n  |─pattern\nstring\nThe original regular-expression pattern string.\n\n\n  |─flags\ninteger\nThe original pattern flags.\n\n\ncontent\nstring\n\n\n\ngroup\ninteger\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "count",
          "url": "/setting/tools/regex.html#count",
          "content": "count Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\ninteger\n\n\n\n"
        },
        {
          "title": "contains",
          "url": "/setting/tools/regex.html#contains",
          "content": "contains Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nobject\n\n\n\n"
        },
        {
          "title": "isMatch",
          "url": "/setting/tools/regex.html#ismatch",
          "content": "isMatch Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nobject\n\n\n\n"
        },
        {
          "title": "replaceAll",
          "url": "/setting/tools/regex.html#replaceall",
          "content": "replaceAll Params：\n\nname\ntype\ndesc\n\n\n\n\ncontent\nstring\n\n\n\nregex\nstring\n\n\n\nreplacementTemplate\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "escape",
          "url": "/setting/tools/regex.html#escape",
          "content": "escape Desc：escape for Regex keywordsParams：\n\nname\ntype\ndesc\n\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        }
      ]
    },
    {
      "title": "logger是提供的日志工具类",
      "content": "可以打印日志到控制台, 受日志级别设置影响, 部分级别的日志可能不会显示\n\n方法\n返回值\n描述\n示例\n\n\n\n\nlog(str)\nvoid\n打印日志\nlogger.log(\"some log\")\n\n\ntrace(str)\nvoid\n打印日志(日志级别trace)\nlogger.trace(\"some log\")\n\n\ndebug(str)\nvoid\n打印日志(日志级别debug)\nlogger.debug(\"some log\")\n\n\ninfo(str)\nvoid\n打印日志(日志级别info)\nlogger.info(\"some log\")\n\n\nwarn(str)\nvoid\n打印日志(日志级别warn)\nlogger.warn(\"some log\")\n\n\nerror(str)\nvoid\n打印日志(日志级别error)\nlogger.error(\"some log\")\n\n\n",
      "url": "/setting/tools/logger.html",
      "children": []
    },
    {
      "title": "helper是提供的特殊帮助类(v1.6.1+)主要方法",
      "content": "\n\n方法\n返回值\n描述\n示例\n\n\n\n\nfindClass(str)\nclass\n获取类,类似Class.forName()\nhelper.findClass(\"java.lang.String\")\n\n\nresolveLink(str)\nclass\n解析字符串中的link\nhelper.resolveLink(\"{@link java.lang.String}\")\n\n\nresolveLinks(str)\narray\n解析字符串中的所有link\nhelper.resolveLink(\"{@link java.lang.String},{@link java.lang.Long}\")\n\n\n",
      "url": "/setting/tools/helper.html",
      "children": []
    },
    {
      "title": "httpClient是提供的http相关帮助类(v1.9.0+)request,一般由httpClient创建cookieStore,可以从httpClient.cookieStore()获得",
      "content": "",
      "url": "/setting/tools/httpClient.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/httpClient.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\ncookieStore()\ncookieStore\n获取cookie管理器\nhttpClient.cookieStore()\n\n\nrequest()\nrequest\n创建request\nhttpClient.request()\n\n\ndelete()\nrequest\n创建request,并设置method为DELETE\nhttpClient.delete()\n\n\ndelete(str)\nrequest\n创建request,并设置method为DELETE、设置url\nhttpClient.delete(\"http://www.easyyapi.com\")\n\n\nget()\nrequest\n创建request,并设置method为GET\nhttpClient.get()\n\n\nget(str)\nrequest\n创建request,并设置method为GET、设置url\nhttpClient.get(\"http://www.easyyapi.com\")\n\n\noptions()\nrequest\n创建request,并设置method为OPTIONS\nhttpClient.options()\n\n\noptions(str)\nrequest\n创建request,并设置method为OPTIONS、设置url\nhttpClient.options(\"http://www.easyyapi.com\")\n\n\npost()\nrequest\n创建request,并设置method为POST\nhttpClient.post()\n\n\npost(str)\nrequest\n创建request,并设置method为POST、设置url\nhttpClient.post(\"http://www.easyyapi.com\")\n\n\nput()\nrequest\n创建request,并设置method为PUT\nhttpClient.put()\n\n\nput(str)\nrequest\n创建request,并设置method为PUT、设置url\nhttpClient.put(\"http://www.easyyapi.com\")\n\n\ntrace()\nrequest\n创建request,并设置method为TRACE\nhttpClient.trace()\n\n\ntrace(str)\nrequest\n创建request,并设置method为TRACE、设置url\nhttpClient.trace(\"http://www.easyyapi.com\")\n\n\n"
        },
        {
          "title": "主要方法有:",
          "url": "/setting/tools/httpClient.html#主要方法有",
          "content": "主要方法有:\n\n方法\n返回值\n描述\n示例\n\n\n\n\naddCookie(cookie)\nvoid\n添加一个cookie\nhttpClient.cookieStore().addCookie(cookie)\n\n\naddCookies(cookies)\nvoid\n添加多个cookie\nhttpClient.cookieStore().addCookies(cookies)\n\n\nclear()\nvoid\n清除cookie\nhttpClient.cookieStore().clear()\n\n\ncookies()\narray\n获得当前的cookies\nhttpClient.cookieStore().cookies()\n\n\nnewCookie()\ncookie\n创建一个cookie,注意:并不会自动添加到cookieStore中，需要手动调用addCookie加入\nhttpClient.cookieStore().newCookie()\n\n\n"
        }
      ]
    },
    {
      "title": "localStorage是提供的本地存储(v1.9.1+)",
      "content": "未指定分组时所有操作都在默认分组\nlocalStorage默认是存储在用户根目录下,可以跨项目读写,如果需要仅在当前项目读写,所有的操作都需要指定一个group.\n注意:set(key,value)中的value与get(key)得到的value并非同一对象.\ndef obj = [\"a\":\"b\"]localStorage.set(\"key\",obj)\nlocalStorage.get(\"key\")[\"a\"]=c //这里对get(\"key\")得到的对象进行赋值不会影响到原始的obj\nobj[\"a\"] == \"b\" //obj还是[\"a\":\"b\"]\n",
      "url": "/setting/tools/localStorage.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/localStorage.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\nset(key,value)\nvoid\n设置一个键值\nlocalStorage.set(\"key\",\"value\")\n\n\nset(group,key,value)\nvoid\n设置一个键值(指定分组)\nlocalStorage.set(\"groupA\",\"key\",\"value\")\n\n\nget(key)\nobject\n获取一个设置的键值\nlocalStorage.get(\"key\")\n\n\nget(group,key)\nobject\n获取一个设置的键值(指定分组)\nlocalStorage.get(\"groupA\",\"key\")\n\n\nremove(key)\nvoid\n删除一个设置的键值\nlocalStorage.remove(\"key\")\n\n\nremove(group,key)\nvoid\n删除一个设置的键值(指定分组)\nlocalStorage.remove(\"groupA\",\"key\")\n\n\nclear()\nvoid\n移除所有设置的键值(仅默认分组)\nlocalStorage.clear()\n\n\nclear(group)\nvoid\n移除所有设置的键值(指定分组)\nlocalStorage.clear(\"groupA\")\n\n\nkeys()\narray\n获取所有设置的键值(仅默认分组)\nlocalStorage.keys()\n\n\nkeys(group)\narray\n获取所有设置的键值(指定分组)\nlocalStorage.keys(\"groupA\")\n\n\n"
        }
      ]
    },
    {
      "title": "config是提供的配置读取工具(v1.9.5+)",
      "content": "读取当前配置\n",
      "url": "/setting/tools/config.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/config.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\nget(key)\nstring\n获取配置中的一个值\nconfig.get(\"key\")\n\n\ngetValues(key)\narray\n获取配置中的多个值\nconfig.getValues(\"key\")\n\n\nresolveProperty(str)\nstring\n解析字符串中的占位符\nconfig.resolveProperty(\"${key}\")\n\n\n"
        }
      ]
    },
    {
      "title": "groovy本地扩展",
      "content": "",
      "url": "/setting/groovy-ext-config.html",
      "children": [
        {
          "title": "介绍",
          "url": "/setting/groovy-ext-config.html#介绍",
          "content": "介绍针对极其特殊的情况, 无法使用简单配置实现需求时, 可以使用groovy扩展以获得极高的定制化功能\n相对普通配置来说, 对于开发者有一定的技术要求,包括groovy以及当前插件的结构等都要有一定的了解\nwiki\noffical\ndemo\n"
        },
        {
          "title": "使用步骤",
          "url": "/setting/groovy-ext-config.html#使用步骤",
          "content": "使用步骤\n在项目目录下创建 /.easyapi/ext\n\n\n创建扩展文件 ${ActionName}Ext.groovy当前可支持的操作有:\n\nApiCallAction\nApiDashBoardAction\nYApiDashBoardAction\nFieldsToJsonAction\nMarkdownExportAction\nPostmanExportAction\nYapiExportAction\n\n\n\n在扩展文件中声明扩展类:\n\nclass ActionNameExt implements ActionExt {\n    void init(ActionContext.ActionContextBuilder builder) {\n        //在这里通过`bind`注入定制化组件,实现需要的功能\n        builder.bind(Xxx.class, KtHelper.INSTANCE.ktFunction({\n            it.to(Yyy.class).in(com.google.inject.Singleton.class)\n            return null\n        }))\n    }\n}\n"
        },
        {
          "title": "demo",
          "url": "/setting/groovy-ext-config.html#使用步骤-demo",
          "content": "demoYapiExportActionExt.groovy\nimport com.intellij.psi.*import com.itangcent.common.model.Request\nimport com.itangcent.idea.plugin.api.export.ClassExporter\nimport com.itangcent.idea.plugin.api.export.SpringRequestClassExporter\nimport com.itangcent.idea.plugin.api.export.yapi.YapiClassExportRuleKeys\nimport com.itangcent.idea.plugin.api.export.yapi.YapiRequestKitKt\nimport com.itangcent.idea.plugin.script.ActionExt\nimport com.itangcent.idea.plugin.utils.KtHelper\nimport com.itangcent.intellij.context.ActionContext\n\nimport java.util.stream.Collectors\nimport java.util.stream.Stream\n\nclass YapiExportActionExt implements ActionExt {\n\n    void init(ActionContext.ActionContextBuilder builder) {\n\n        builder.bind(ClassExporter.class, KtHelper.INSTANCE.ktFunction({\n            it.to(CustomClassExporter.class).in(com.google.inject.Singleton.class)\n            return null\n        }))\n\n    }\n\n    static class CustomClassExporter extends SpringRequestClassExporter {\n\n        void processCompleted(PsiMethod method, Request request) {\n            super.processCompleted(method, request)\n\n            String tags = ruleComputer.computer(YapiClassExportRuleKeys.TAG, method)\n            if (tags != null && !tags.isEmpty()) {\n                YapiRequestKitKt.setTags(request, Stream.of(tags.split(\"\\n\"))\n                        .map { it.trim() }\n                        .filter { !it.isEmpty() }\n                        .collect(Collectors.toList())\n                )\n            }\n\n            String status = ruleComputer.computer(YapiClassExportRuleKeys.STATUS, method)\n            logger.info(YapiRequestKitKt.class.toString())\n            YapiRequestKitKt.setStatus(request, status)\n        }\n    }\n}\n"
        },
        {
          "title": "特别注意",
          "url": "/setting/groovy-ext-config.html#特别注意",
          "content": "特别注意"
        },
        {
          "title": "由于插件源码语言是kotlin,在groovy中无法使用一些语法糖",
          "url": "/setting/groovy-ext-config.html#特别注意-由于插件源码语言是kotlin,在groovy中无法使用一些语法糖",
          "content": "由于插件源码语言是kotlin,在groovy中无法使用一些语法糖kotlin中声明的扩展方法如\nfun Doc.setTags(tags: List?) {    ...\n}\n在groovy中使用如下:YapiRequestKitKt.setTags(request,tags)"
        }
      ]
    }
  ],
  "demo": [
    {
      "title": "demo项目介绍",
      "content": "\nspringboot\n\n\nspringboot-webflux\n\n\ndubbo\n\n\nkotlin\n\n",
      "url": "/demo/index.html",
      "children": []
    }
  ],
  "框架支持": [
    {
      "title": "使用配置支持不同的框架",
      "content": "基于性能考虑, 内置推荐配置并不会覆盖所有框架的所有功能\n如需增加对指定框架的支持, 参考配置\n",
      "url": "/framwork/index.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/springboot.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/springboot-webflux.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/swagger.html",
      "children": [
        {
          "title": "默认推荐配置中不包含swagger的支持",
          "url": "/framwork/swagger.html#默认推荐配置中不包含swagger的支持",
          "content": "默认推荐配置中不包含swagger的支持"
        },
        {
          "title": "如果需要支持swagger,可自行按需增加如下配置",
          "url": "/framwork/swagger.html#默认推荐配置中不包含swagger的支持-如果需要支持swagger,可自行按需增加如下配置",
          "content": "如果需要支持swagger,可自行按需增加如下配置基础配置\n# swagger\n\n# ApiParam\nparam.doc=@io.swagger.annotations.ApiParam#value\nparam.default.value=@io.swagger.annotations.ApiParam#defaultValue\nparam.required=@io.swagger.annotations.ApiParam#required\nparam.ignore=@io.swagger.annotations.ApiParam#hidden\n\n# Api\nclass.doc=@io.swagger.annotations.Api#value\n\n# ApiModel\nclass.doc=io.swagger.annotations.ApiModel#value\nclass.doc=io.swagger.annotations.ApiModel#description\n\n# ApiModelProperty\njson.rule.field.name=@io.swagger.annotations.ApiModelProperty#name\nfield.ignore=@io.swagger.annotations.ApiModelProperty#hidden\nfield.doc=@io.swagger.annotations.ApiModelProperty#value\nfield.doc=@io.swagger.annotations.ApiModelProperty#notes\nfield.required=@io.swagger.annotations.ApiModelProperty#required\n\n# ApiOperation\nmethod.doc=@io.swagger.annotations.ApiOperation#value\napi.tag=@io.swagger.annotations.ApiOperation#tags\n快速配置properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/swagger.config增强配置, 可根据实际情况修改\n# swagger-advanced\n\n# resolve the parameters from ApiImplicitParam\nresolve_api_implicit_param=```\n    def desc = map.value\n    def allowableValues = map.allowableValues\n    if(tool.notNullOrBlank(allowableValues)){\n        desc = desc + \"\\n允许的值:\" + allowableValues\n    }\n\n    def paramType = map.paramType ?: \"query\"\n    def required = map.required?:true\n    if(paramType==\"\"||paramType==\"query\"){\n        api.setParam(map.name,map.defaultValue,required,desc)\n    }else if(paramType==\"form\"){\n        api.setFormParam(map.name,map.defaultValue,required,desc)\n    }else if(paramType==\"path\"){\n        api.setPathParam(map.name,map.defaultValue,desc)\n    }else if(paramType==\"header\"){\n        api.setHeader(map.name,map.defaultValue,required,desc)\n    }\n```\n\n# extract map from ApiImplicitParam\nexport.after[@io.swagger.annotations.ApiImplicitParam]=groovy:```\n    def map = it.annMap(\"io.swagger.annotations.ApiImplicitParam\")\n    ${resolve_api_implicit_param}\n```\n\n# extract maps from ApiImplicitParams\nexport.after[@io.swagger.annotations.ApiImplicitParams]=groovy:```\n    def maps = it.annMap(\"io.swagger.annotations.ApiImplicitParams\")\n    for(map in maps.value){\n        ${resolve_api_implicit_param}\n    }\n```\n\n\n# Resolve the response from `APIResponse` into the API description\nresolve_api_response=```\n    def desc = \"\\\\n\\\\n***响应码***:\"+map.code+\"\\\\n\\\\n\"\n    desc += map.message+\"\\\\n\\\\n\"\n    def response = map.response\n    if(response!=null){\n        def responseClass = helper.findClass(response)\n        if(responseClass!=null){\n            desc += \"响应内容:\\\\n```json\\\\n\" + responseClass.toJson(true) + \"\\\\n```\\\\n\"\n        }\n    }\n    api.appendDesc(desc)\n```\n\n\n# Resolve `APIResponse` into the API description\nexport.after[@io.swagger.annotations.ApiResponse]=groovy:```\n    def map = it.annMap(\"io.swagger.annotations.ApiResponse\")\n    ${resolve_api_response}\n```\n\n# Resolve `APIResponses` into the API description\nexport.after[@io.swagger.annotations.ApiResponses]=groovy:```\n    def maps = it.annMap(\"io.swagger.annotations.ApiResponses\")\n    for(map in maps.value){\n        ${resolve_api_response}\n    }\n```\n\n\n# Resolve one `APIResponse` into the API description\nexport.after[@io.swagger.annotations.ApiResponse]=groovy:```\n    def map = it.annMap(\"io.swagger.annotations.ApiResponse\")\n\n    api.setResponseCode(map.code?:200)\n    api.appendResponseBodyDesc(map.message)\n    def responseHeaders = map.responseHeaders\n    if(responseHeaders!=null){\n        for(responseHeader in responseHeaders) {\n            api.setResponseHeader(responseHeader.name,\"\",true,responseHeader.description)\n        }\n    }\n    def response = map.response\n    if(response!=null){\n        api.setResponseBodyClass(response)\n    }\n```\n\n快速配置properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/swagger.advanced.config"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/javax_validation.html",
      "children": [
        {
          "title": "在推荐配置中有部分javax.validation相关的配置",
          "url": "/framwork/javax_validation.html#在推荐配置中有部分javax.validation相关的配置",
          "content": "在推荐配置中有部分javax.validation相关的配置默认选择的是不分组模式#[javax.validation]*#Support for javax.validation annotations\nparam.required=@javax.validation.constraints.NotBlank\nfield.required=@javax.validation.constraints.NotBlank\nparam.required=@javax.validation.constraints.NotNull\nfield.required=@javax.validation.constraints.NotNull\nparam.required=@javax.validation.constraints.NotEmpty\nfield.required=@javax.validation.constraints.NotEmpty\n分组校验模式默认未选中#[javax.validation(grouped)]json.cache.disable=true\nparam.before=groovy:```\n    logger.info(\"set curr groups:\"+it.annValue(\"org.springframework.validation.annotation.Validated\"))\n    session.set(\"json-group\", it.annValue(\"org.springframework.validation.annotation.Validated\"))\n```\nparam.after=groovy:```\n    session.remove(\"json-group\")\n```\nparam.required=@javax.validation.constraints.NotBlank\nparam.required=@javax.validation.constraints.NotNull\nparam.required=@javax.validation.constraints.NotEmpty\nfield.required[@javax.validation.constraints.NotBlank]=groovy:```\n    it.annMaps(\"javax.validation.constraints.NotBlank\")?.any{tool.equalOrIntersect(session.get(\"json-group\"),it[\"groups\"])}\n```\nfield.required[@javax.validation.constraints.NotNull]=groovy:```\n    it.annMaps(\"javax.validation.constraints.NotNull\")?.any{tool.equalOrIntersect(session.get(\"json-group\"),it[\"groups\"])}\n```\nfield.required[@javax.validation.constraints.NotEmpty]=groovy:```\n    it.annMaps(\"javax.validation.constraints.NotEmpty\")?.any{tool.equalOrIntersect(session.get(\"json-group\"),it[\"groups\"])}\n```\n需要开启分组校验可以在 Preferences(Settings) > Other Settings > EasyApi >Recommend 中移除勾选javax.validation, 勾选javax.validation(grouped)"
        },
        {
          "title": "相关mock不在内置推荐中, 有需要的话可自行增加如下配置",
          "url": "/framwork/javax_validation.html#相关mock不在内置推荐中,-有需要的话可自行增加如下配置",
          "content": "相关mock不在内置推荐中, 有需要的话可自行增加如下配置# mock for javax.validation\n###set resolveMulti = first\n# define var\nnumber_min=-9999\nnumber_max=9999\nfloat_dmin=2\njava_integer_types=[\"java.lang.Integer\",\"int\",\"java.lang.Long\",\"long\",\"java.lang.Short\",\"short\",\"java.math.BigInteger\"]\njava_float_types=[\"java.lang.Float\",\"float\",\"java.lang.Double\",\"double\",\"java.math.BigDecimal\"]\n# mock_integer_or_float=${java_integer_types}.contains(it.type().name())?\"@integer\":\"@float\"\n\n# AssertTrue|AssertFalse|Email\nfield.mock[@javax.validation.constraints.AssertTrue]=true\nfield.mock[@javax.validation.constraints.AssertFalse]=false\nfield.mock[@javax.validation.constraints.Email]=groovy:\"@email\"\n\n# Positive&PositiveOrZero\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(1,${number_max})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.PositiveOrZero\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,${number_max})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0.01,${number_max},${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.PositiveOrZero\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,${number_max},${float_dmin})\"\n\n# Negative&NegativeOrZero\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(${number_min},-1)\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.NegativeOrZero\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(${number_min},0)\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(${number_min},0.01,${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.NegativeOrZero\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(${number_min},0,${float_dmin})\"\n\n# Max+Min\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&it.hasAnn(\"javax.validation.constraints.Min\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.Min\")+\",\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&it.hasAnn(\"javax.validation.constraints.Min\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.Min\")+\",\"+it.ann(\"javax.validation.constraints.Max\")+\",${float_dmin})\"\n\n# Max|Min\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Min\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.Min\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Min\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.Min\")+\")\"\n\n# DecimalMax+DecimalMin\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\",${float_dmin})\"\n\n# DecimalMax|DecimalMin\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\",${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",${float_dmin})\"\n\n###set resolveMulti = error\n上述配置可根据实际情况予以必要的调整\n\n\nkey\ndesc\n\n\n\n\nnumber_min\n数字最小值\n\n\nnumber_max\n数字最大值\n\n\nfloat_dmin\n浮点数小数位数\n\n\n快速配置properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/javax.validation.mock.config"
        }
      ]
    }
  ],
  "QA": [
    {
      "title": "",
      "content": "",
      "url": "/qa/index.html",
      "children": [
        {
          "title": "如何添加配置文件",
          "url": "/qa/index.html#如何添加配置文件",
          "content": "如何添加配置文件see local-file-config\n"
        },
        {
          "title": "如何组织API到指定文件夹",
          "url": "/qa/index.html#如何组织api到指定文件夹",
          "content": "如何组织API到指定文件夹\nmodule用于分类api\n\n导出postman时,每个module将作为一个单独的文件夹\n导出yapi时,每个module需要配置相应的token,即对应一个yapi中的项目\n\n\n\n默认情况下取当前模块名(单模块项目取项目名)\n\n\n默认推荐配置:\n\n#find module from comment tag module=#module\n在类上这样注释:\n/** * Mock Apis\n *\n * @module mock\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n"
        },
        {
          "title": "如何忽略API",
          "url": "/qa/index.html#如何忽略api",
          "content": "如何忽略API增加配置:\n#ignore class or method which has comment tag 'ignore' ignore=#ignore\n在类上注释@ignore忽略当前类\n/** * Mock Apis\n *\n * @ignore\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n在方法上注释@ignore忽略当前API\n/** * Mock Apis\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n     /**\n      * Mock String\n      * @ignore\n      */\n     @GetMapping(\"/string\")\n     public String mockString() {\n         return Result.success(\"mock string\");\n     }\n\n}\n"
        },
        {
          "title": "如何设置API/文件夹的名称/描述",
          "url": "/qa/index.html#如何设置api文件夹的名称描述",
          "content": "如何设置API/文件夹的名称/描述\n一般来说:\n/**\n * 第一行注释作为文件夹的标题\n * 剩余行注释作为文件夹的描述\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n     * 第一行行注释作为API的标题\n     * 剩余行注释作为API的描述\n     */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n\n\n特殊需求参见:class.doc | method.doc | api.name\n\n"
        },
        {
          "title": "如何在API/文件夹的描述中说明API/文件夹被废弃了",
          "url": "/qa/index.html#如何在api文件夹的描述中说明api文件夹被废弃了",
          "content": "如何在API/文件夹的描述中说明API/文件夹被废弃了\n默认推荐配置如下:\nmethod.doc[#deprecated]=groovy:\"\\n「deprecated」\" + it.doc(\"deprecated\")\nmethod.doc[@java.lang.Deprecated]=「deprecated」\nmethod.doc[@kotlin.Deprecated]=groovy:\"\\n「deprecated」\" + it.ann(\"kotlin.Deprecated\",\"message\")\n\nmethod.doc[groovy:it.containingClass().hasDoc(\"deprecated\")]=groovy:\"\\n「deprecated」\" + it.containingClass().doc(\"deprecated\")\nmethod.doc[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=「deprecated」\nmethod.doc[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=groovy:\"\\n「deprecated」 \" + it.containingClass().ann(\"kotlin.Deprecated\",\"message\")\n\n\n\n\n使用注解或者注释标记API废弃即可:\n/**\n* 可以用注解`@Deprecated`来表示api废弃\n* 也可以用注释`@deprecated`\n*\n* @deprecated 改用{@link #methodName3(String)}\n*/\n@Deprecated\n@RequestMapping(value = \"/pathOfApi2\")\npublic Result methodName2(@RequestBody MockDtoOrVo jsonModel){\n    ...\n}\n\n\n"
        },
        {
          "title": "如何在API描述中声明API需要的权限(javax annotation security)",
          "url": "/qa/index.html#如何在api描述中声明api需要的权限javax-annotation-security",
          "content": "如何在API描述中声明API需要的权限(javax annotation security)可考虑增加如下配置:\n## security descriptionmethod.doc[@javax.annotation.security.RolesAllowed]=groovy:\"require role:\"+it.ann(\"javax.annotation.security.RolesAllowed\")\n示例:\n/** * 第一行注释作为文件夹的标题\n * 剩余行注释作为文件夹的描述\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n     * 第一行行注释作为API的标题\n     * 剩余行注释作为API的描述\n     */\n    @GetMapping(\"/string\")\n    @RolesAllowed(\"admin\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n"
        },
        {
          "title": "如何在API描述中声明API需要的权限(spring security)",
          "url": "/qa/index.html#如何在api描述中声明api需要的权限spring-security",
          "content": "如何在API描述中声明API需要的权限(spring security)可考虑增加如下配置:\n## security descriptionfind_role_in_PreAuthorize=(function(exp){var str=\"\";if(exp.indexOf(\"hasRole\")!=-1){var roles=exp.match(/hasRole\\\\((.*?)\\\\)/);if(roles&&roles.length>1){str+=\"require role:\"+roles[1];}};return str})\nmethod.doc[@org.springframework.security.access.prepost.PreAuthorize]=js:${find_role_in_PreAuthorize}(it.ann(\"org.springframework.security.access.prepost.PreAuthorize\"))\n示例:\n/** * 第一行注释作为文件夹的标题\n * 剩余行注释作为文件夹的描述\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n     * 第一行行注释作为API的标题\n     * 剩余行注释作为API的描述\n     */\n    @GetMapping(\"/string\")\n    @PreAuthorize(\"hasRole('admin')\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n"
        },
        {
          "title": "如何忽略某些字段",
          "url": "/qa/index.html#如何忽略某些字段",
          "content": "如何忽略某些字段\n使用规则:json.rule.field.ignore\n\n忽略特定名称的字段:\n\n## ignore field 'log'\njson.rule.field.ignore=log\n\n\n忽略特定类型的字段:\n\n## ignore field 'log' typed xxx.xxx.Log\njson.rule.field.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\n忽略特定限定符的字段:\n\n#ignore transient field\njson.rule.field.ignore=groovy:it.hasModifier(\"transient\")\n\n\n"
        },
        {
          "title": "如何将指定类型转换为另一种类型处理",
          "url": "/qa/index.html#如何将指定类型转换为另一种类型处理",
          "content": "如何将指定类型转换为另一种类型处理将java.time.LocalDateTime作为yyyy-mm-dd形式字符串处理\n#Resolve 'java.time.LocalDateTime' as 'java.lang.String'json.rule.convert[java.time.LocalDateTime]=java.lang.String\njson.rule.convert[java.time.LocalDate]=java.lang.String\n将java.time.LocalDateTime作为timestamp处理\n#Resolve 'java.time.LocalDateTime' as 'java.lang.Long'json.rule.convert[java.time.LocalDateTime]=java.lang.Long\njson.rule.convert[java.time.LocalDate]=java.lang.Long\n"
        },
        {
          "title": "部分接口可能有不同的返回",
          "url": "/qa/index.html#部分接口可能有不同的返回",
          "content": "部分接口可能有不同的返回可以使用method.doc将可能的返回放在方法备注中\n配置如下:method.doc[#result]=groovy: it.docs(\"result\").collect{helper.resolveLink(it)}.grep{it!=null}.collect{\"可能的返回:\\n\\n```json\\n\"+it.toJson(true)+\"\\n```\\n\\n\"}.join(\"\\n\")使用如下: /**  * @result {@link UserInfo}\n  * @result {@link Result}\n  */\n public Result mockString() {\n     ...\n }\n"
        },
        {
          "title": "有的字段可能有不同类型的值",
          "url": "/qa/index.html#有的字段可能有不同类型的值",
          "content": "有的字段可能有不同类型的值可以使用field.doc将可能的类型值放在字段备注中\n配置如下: field.doc[#maybe]=groovy:it.docs(\"maybe\").collect{helper.resolveLink(it)}.collect{\"可能是:\\n\\n```json\\n\" + it.toJson(true) +\"\\n```\\n\\n\"}.join(\"\\n\")使用如下: /**  * @maybe {@link UserInfo}\n  * @maybe {@link java.lang.String}\n  */\n public Object target;\n"
        },
        {
          "title": "如何开启javax_validation分组校验",
          "url": "/qa/index.html#如何开启javax_validation分组校验",
          "content": "如何开启javax_validation分组校验参见javax_validation,\n在 Preferences(Settings) > Other Settings > EasyApi >Recommend 中移除勾选javax.validation, 勾选javax.validation(grouped)\n"
        },
        {
          "title": "如何激活对com.fasterxml.jackson.annotation.JsonIgnoreProperties的支持",
          "url": "/qa/index.html#如何激活对com.fasterxml.jackson.annotation.jsonignoreproperties的支持",
          "content": "如何激活对com.fasterxml.jackson.annotation.JsonIgnoreProperties的支持在 Preferences(Settings) > Other Settings > EasyApi >Recommend 中勾选Jackson_JsonIgnoreProperties\n"
        }
      ]
    }
  ]
}