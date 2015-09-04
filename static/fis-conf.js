fis.set('project',{
	// 'files': [],
	// 'ignore': ['fis/**','fis3/**', 'bower.json','fis-conf.js','deploy.cmd']
});

fis.match('**',{
	release: false,
	useMap: true
});
// 加 md5
fis.match('**/*.{js,css,png,jpg}', {
	useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
	spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('**/*.css', {
	// 给匹配到的文件分配属性 `useSprite`
	useSprite: true
});
fis.match('**/*.css', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
	optimizer: fis.plugin('clean-css')
});

fis.match('**/*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js')
});

fis.match('**/*.png', {
	// fis-optimizer-png-compressor 插件进行压缩，已内置
	optimizer: fis.plugin('png-compressor')
});

fis.match('html/{*,**/*}.tpl.html',{
	release: '../public/$0'
});

fis.match('js/{*,**/*}.js',{
	release: '../public/assets/$0',
	url: '$0',
	domain: 'http://www.gift.net/assets'
});

fis.match('css/{*,**/*}.css',{
	release: '../public/assets/$0',
	url: '$0',
	domain: 'http://www.gift.net/assets'
});

fis.match('img/{*,**/*}.{png,jpg,ico,gif}',{
	release: '../public/assets/$0',
	url: '$0',
	domain: 'http://www.gift.net/assets'
});

fis.match('bower_components/**/{**.js,**.png,**.jpg,**.css,**.map}',{
	release: '../public/assets/$0',
	url: '$0',
	domain: 'http://www.gift.net/assets'
});

fis.match('bower_components/**/fonts/**',{
	release: '../public/assets/$0',
	url: '/assets$0'
});