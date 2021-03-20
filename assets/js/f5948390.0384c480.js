(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{158:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/worldgen-simplex-9c526aa4a9f9148d3b1f60f522f36050.png"},159:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/worldgen-brownian-f86e203983ffe799e9635a00b7986503.png"},160:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/worldgen-whitenoise-721cc2bdc4a0d93a20916081d8942a58.png"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(3),o=t(7),r=(t(0),t(95)),a={title:"World Generation"},s={unversionedId:"topics/noise-worldgen",id:"topics/noise-worldgen",isDocsHomePage:!1,title:"World Generation",description:"This page explains usages of different types of noise, basic mechanics and implementation. You can read detailed implementation in Noise Implementation page.",source:"@site/docs/topics/noise-worldgen.md",slug:"/topics/noise-worldgen",permalink:"/docs/topics/noise-worldgen",editUrl:"https://github.com/terasology/TutorialWorldGeneration/edit/develop/docs/docs/topics/noise-worldgen.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/topics/noise/"},next:{title:"Implementation",permalink:"/docs/topics/noise-implementation"}},l=[{value:"Simple Terrain - <code>SimplexNoise</code>",id:"simple-terrain---simplexnoise",children:[]},{value:"Complex Terrain (Noise Overlaying) - <code>BrownianNoise</code>",id:"complex-terrain-noise-overlaying---browniannoise",children:[]},{value:"White Noise",id:"white-noise",children:[]},{value:"Summary - Which noise to use?",id:"summary---which-noise-to-use",children:[]}],c={toc:l};function p(e){var n=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page explains usages of different types of noise, basic mechanics and implementation. You can read detailed implementation in ",Object(r.b)("a",{parentName:"p",href:"Noise-Implementation"},"Noise Implementation")," page. "),Object(r.b)("p",null,"This page also features some example terrains, covered in this tutorial (Rolling hills and Mountains) - ",Object(r.b)("a",{parentName:"p",href:"/docs/tutorial-03"},"Noise Sampling")," and ",Object(r.b)("a",{parentName:"p",href:"/docs/tutorial-04"},"Facet Modification"),". "),Object(r.b)("h3",{id:"simple-terrain---simplexnoise"},"Simple Terrain - ",Object(r.b)("inlineCode",{parentName:"h3"},"SimplexNoise")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Simplex Noise",src:t(158).default}),"\nThe above is a terrain (rolling hills) generated using ",Object(r.b)("inlineCode",{parentName:"p"},"SimplexNoise"),". Code sample:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void setSeed(long seed) {\n    terrainNoise = new SubSampledNoise(new SimplexNoise(seed), new Vector2f(0.01f, 0.01f), 1);\n}\n")),Object(r.b)("p",null,"The noise generates random numbers between -1 and 1. We get this result by scaling up (multiplying) the random numbers and use them  to build up world. We also use ",Object(r.b)("inlineCode",{parentName:"p"},"SubsampledNoise"),' to smooth out the noise by "zooming in" or "stretching" the values out.'),Object(r.b)("h3",{id:"complex-terrain-noise-overlaying---browniannoise"},"Complex Terrain (Noise Overlaying) - ",Object(r.b)("inlineCode",{parentName:"h3"},"BrownianNoise")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Browninan Noise Perlin",src:t(159).default}),"\nThis is a terrain (mountains) generated by overlaying the first terrain which uses ",Object(r.b)("inlineCode",{parentName:"p"},"SimplexNoise")," with another terrain which uses ",Object(r.b)("inlineCode",{parentName:"p"},"BrownianNoise(PerlinNoise)"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void setSeed(long seed) {\n    terrainNoise = new SubSampledNoise(new BrownianNoise(new PerlinNoise(seed + 2), 8), new Vector2f(0.001f, 0.001f), 1);\n}\n")),Object(r.b)("p",null," We overlay this noise map ",Object(r.b)("inlineCode",{parentName:"p"},"BrownianNoise(PerlinNoise)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"simplexNoise")," map - from the first one - in order to get a more interesting terrain."),Object(r.b)("p",null," The mountains here are calculated by combining multiple octaves of Perlin noise at different frequencies. The octave here is ",Object(r.b)("inlineCode",{parentName:"p"},"8"),"."),Object(r.b)("p",null,"We use ",Object(r.b)("inlineCode",{parentName:"p"},"seed + 2")," because we want a different noise map. And same as the first terrain, we multiply the random numbers to get high mountains."),Object(r.b)("h3",{id:"white-noise"},"White Noise"),Object(r.b)("p",null,"In this tutorial, White Noise is used to place houses.\nThis noise is used for placing discrete things randomly in the world. For instance, houses, trees, floras and things that you want to evenly cover the area in."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void setSeed(long seed) {\n    treesNoise = new WhiteNoise(seed);\n}\n")),Object(r.b)("p",null,"Below is the example terrain with trees placed using White Noise. The tree generator is also in this tutorial repo."),Object(r.b)("p",null,Object(r.b)("img",{alt:"WhiteNoiseTrees",src:t(160).default})),Object(r.b)("p",null,"The trees are naturally scattered. To achieve this, we place the tree's trunk (center) at the point where random number generated by White Noise is more than 0.99. You can increase the density of trees by using a value less than 0.99. Because white noise is in the range ","[-1,+1]",", this test passes with a probability of 1/200."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void process(GeneratingRegion region) {\n    Border3D border = region.getBorderForFacet(TreesFacet.class).extendBy(0, 7, 1);\n    TreesFacet facet = new TreesFacet(region.getRegion(), border);\n\n    SurfacesFacet surfacesFacet = region.getRegionFacet(SurfacesFacet.class);\n    Region3i worldRegion = surfacesFacet.getWorldRegion();\n\n    for (int wz = worldRegion.minZ(); wz <= worldRegion.maxZ(); wz++) {\n        for (int wx = worldRegion.minX(); wx <= worldRegion.maxX(); wx++) {\n            for (int surfaceHeight : surfacesFacet.getWorldColumn(wx, wz)) {\n\n                // check if point is within this region\n                if (facet.getWorldRegion().encompasses(wx, surfaceHeight, wz)) {\n                \n                    if (treesNoise.noise(wx, surfaceHeight, wz) > 0.99) {\n                        facet.setWorld(wx, surfaceHeight, wz, new Tree());\n                    }\n                }\n            }\n        }\n    }\n\n    region.setRegionFacet(TreesFacet.class, facet);\n}\n")),Object(r.b)("p",null,"We compare the noise at that point to our threshold, 0.99 and only place a tree if it's higher. This is also the logic used for houses in this tutorial."),Object(r.b)("p",null,"As you can see, we don't need ",Object(r.b)("inlineCode",{parentName:"p"},"SubSampledNoise")," because  we don't have to smooth out the noise values. We only compare the values and then place some trees."),Object(r.b)("p",null,"This terrain works almost the same as houses, covered in this tutorial. This is only to show how White Noise can help to achieve natural vegetation."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Up till now you can see, there are a lot of parameters in ",Object(r.b)("inlineCode",{parentName:"strong"},"BrownianNoise")," and ",Object(r.b)("inlineCode",{parentName:"strong"},"SubSampledNoise"),". Those parameters are crucial to build up your world and to get desirable results. You may want to learn more about ",Object(r.b)("inlineCode",{parentName:"strong"},"BrownianNoise"),", ",Object(r.b)("inlineCode",{parentName:"strong"},"SubsampledNoise")," parameters, including octave and zooming noise map. Please head to the ",Object(r.b)("a",{parentName:"strong",href:"/docs/topics/noise-implementation"},"Noise Implementation")," page.")),Object(r.b)("h2",{id:"summary---which-noise-to-use"},"Summary - Which noise to use?"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PerlinNoise"),", ",Object(r.b)("inlineCode",{parentName:"p"},"SimplexNoise"),": use to create simple, organic terrain. ",Object(r.b)("strong",{parentName:"p"},"It's best to use Simplex Noise as it is faster.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"WhiteNoise"),": use for placing discrete things randomly in the world. For instance, houses, trees, floras and things you want to evenly cover the area in."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"BrownianNoise(PerlinNoise)"),", ",Object(r.b)("inlineCode",{parentName:"p"},"BrownianNoise(SimplexNoise)"),": use to create more complex, organic terrain by overlaying different layers of noise."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"BrownianNoise(Noise)"),": use to overlay different layers of noise to get more complex results."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"SubSampledNoise"),': use to smooth out the above noises by "zooming in" or "stretching" the values out.'))}p.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var i=t(0),o=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=i,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||r;return t?o.a.createElement(m,s(s({ref:n},c),{},{components:t})):o.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);