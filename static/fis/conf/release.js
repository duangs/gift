/**
 * Created by julien.zhang on 2015/1/29.
 */

//开启simple插件
fis.config.set('modules.postpackager', 'simple');

//项目配置
fis.config.set('project', {
	'include': /^\/(?:html|js|css|img)\/.*\.(?:html|js|map|css|swf|mp4|jpg|png|gif|ico)$/i,
	'fileType.image': 'swf, mp4, ico'
});

//通过pack设置干预自动合并结果，将公用资源合并成一个文件，更加利于页面间的共用
// fis.config.set('merge.pack', {
// 	'/js/pkg/lib.js': ['/js/vendor/underscore-1.6.0.min.js', '/js/vendor/jquery/jquery-1.10.2.min.js', '/js/vendor/fastclick.js'],
// 	'/js/pkg/common.js' : ['/js/common/common.js'],
// 	'/css/pkg/lib.css': ['/css/vendor/normalize.css', '/css/vendor/main.css', '/css/vendor/common.css']
// });

//静态资源文件域名设置
fis.config.set('roadmap.domain', '<?= $assets_url ?>');

//部署设置
fis.config.set('roadmap.path', [
	{
		//bower_components
		reg: '/bower_components/**',
		release: 'public/assets/zhitou-web$&',
		url: '$&',
		useDomain: true,
		useHash: true,
		useCache: false
	}, {
		//css目录下css文件
		reg: '/css/**.css',
		release: 'public/assets/zhitou-web$&',
		url: '$&',
		useDomain: true,
		useSprite: true,
		useHash: true
	}, {
		//其它css文件
		reg: '**.css',
		release: 'public/assets/zhitou-web/css$&',
		url: '/css$&',
		useDomain: true,
		useSprite: true,
		isCssLike: true,
		useHash: true
	}, {
		//js目录下js文件
		reg: '/js/**.js',
		release: 'public/assets/zhitou-web$&',
		url: '$&',
		useDomain: true,
		isJsLike: true,
		useHash: true
	}, {
		//其它js文件
		reg: '**.js',
		release: 'public/assets/zhitou-web/js$&',
		url: '/js$&',
		useDomain: true,
		isJsLike: true,
		useHash: true
	}, {
		//模板html
		reg: /^\/html\/(.*?(tpl\.html))$/i,
		release: 'application/views/$1',
	}, {
		//html/include目录下图片
		reg: /\/html\/include\/(.+\.(?:jpg|png|gif))/i,
		release: 'public/assets/zhitou-web/img/$1',
		url: '/zhitou-web/img/$1',
		useDomain: false,
		useHash: true
	}, {
		//html目录下图片
		reg: /\/html\/(.+\.(?:jpg|png|gif))/i,
		release: 'public/assets/zhitou-web/img/$1',
		url: '/img/$1',
		useDomain: true,
		useHash: true
	}, {
		//img目录图片
		reg: '/img/**',
		release: 'public/assets/zhitou-web$&',
		url: '/zhitou-web$&',
		useDomain: false,
		useHash: false
	}, {
		//前面规则未匹配到的其他文件
		reg : '**',
		release : false
	}
]);

//背景图片sprite设置
fis.config.set('settings.spriter.csssprites', {
	'margin': 10,
	'layout': 'matrix',
	'htmlUseSprite': true,
	'styleReg': /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig
});

//使用fis release --dest remote来使用这个配置
fis.config.merge({
	deploy : {
		remote : {
			to : '../',
			exclude : /(?:\/(?:include|src|demo|example|data|test)\/.+\.(?:html|js|css))|(?:\/_[-_\w\d]+\.html)|(?:\/.+\.md)/i
		}
	}
});