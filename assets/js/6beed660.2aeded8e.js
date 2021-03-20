(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/PluginLakes-2ea3cac25a0cbdecf3a72220008d5352.jpg"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(95)),i={id:"plugins",title:"Plugins"},l={unversionedId:"advanced/plugins",id:"advanced/plugins",isDocsHomePage:!1,title:"Plugins",description:"Now that we have completed our world full of stone houses.  How can we let other modules use this world and add some more fancy features?  Easy, with plugins!",source:"@site/docs/advanced/plugins.md",slug:"/advanced/plugins",permalink:"/TutorialWorldGeneration/docs/advanced/plugins",editUrl:"https://github.com/terasology/TutorialWorldGeneration/edit/develop/docs/docs/advanced/plugins.md",version:"current",sidebar:"someSidebar",previous:{title:"Troubleshooting",permalink:"/TutorialWorldGeneration/docs/troubleshooting"},next:{title:"Facets Across Borders",permalink:"/TutorialWorldGeneration/docs/advanced/facets-across-borders"}},s=[],c={toc:s};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that we have completed our world full of stone houses.  How can we let other modules use this world and add some more fancy features?  Easy, with plugins!"),Object(o.b)("p",null,"The general principal here is that a module can register a rasterizer or facet producer and have it inserted into the world generator at runtime. This is as simple as adding ",Object(o.b)("inlineCode",{parentName:"p"},".addPlugins()")," to our world builder initialization like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"    @Override\n    protected WorldBuilder createWorld() {\n        return new WorldBuilder(worldGeneratorPluginLibrary)\n                .setSeaLevel(0)\n                .addProvider(new SurfaceProvider())\n                .addProvider(new SeaLevelProvider(0))\n                .addProvider(new MountainsProvider())\n                .addProvider(new HouseProvider())\n                .addRasterizer(new TutorialWorldRasterizer())\n                .addRasterizer(new HouseRasterizer())\n                .addPlugins();\n    }\n")),Object(o.b)("p",null,"Now, all external modules will have their rasterizers and producers added in alongside the ones already specified."),Object(o.b)("p",null,"To create a plugin-able rasterizer you need 2 things: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Decorate the class with the annotation ",Object(o.b)("inlineCode",{parentName:"li"},"@RegisterPlugin")),Object(o.b)("li",{parentName:"ol"},"Inherit from the special ",Object(o.b)("inlineCode",{parentName:"li"},"WorldRasterizerPlugin"))),Object(o.b)("p",null,"Here is a sample rasterizer that will make all space that is below the sea level and above the surface into water..."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@RegisterPlugin\npublic class LakesRasterizer implements WorldRasterizerPlugin {\n    private Block water;\n\n    @Override\n    public void initialize() {\n        water = CoreRegistry.get(BlockManager.class).getBlock("CoreAssets:Water");\n    }\n\n    @Override\n    public void generateChunk(CoreChunk chunk, Region chunkRegion) {\n        ElevationFacet elevationFacet = chunkRegion.getFacet(ElevationFacet.class);\n        SeaLevelFacet seaLevelFacet = chunkRegion.getFacet(SeaLevelFacet.class);\n        int seaLevel = seaLevelFacet.getSeaLevel();\n        for (Vector3i position : chunkRegion.getRegion()) {\n            float surfaceHeight = elevationFacet.getWorld(position.x, position.z);\n            // check to see if the surface is under the sea level and if we are dealing with something above the surface\n            if (position.y < seaLevel && position.y >= surfaceHeight) {\n                chunk.setBlock(ChunkMath.calcBlockPos(position), water);\n            }\n        }\n    }\n}\n')),Object(o.b)("p",null,"Looks much like our other rasterizers."),Object(o.b)("p",null,"However, in order to make our lakes more prominent we need to alter the surface to dip down an extra amount to hold our water.  We do this by supplying a facet provider plugin.  Pluggable facet providers also need 2 things:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Decorate the class with the annotation ",Object(o.b)("inlineCode",{parentName:"li"},"@RegisterPlugin")),Object(o.b)("li",{parentName:"ol"},"Inherit from the special ",Object(o.b)("inlineCode",{parentName:"li"},"FacetProviderPlugin"))),Object(o.b)("p",null,"Here is a modified mountain provider that instead creates dips in the surface..."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@RegisterPlugin\n@Updates(@Facet(ElevationFacet.class))\npublic class LakesProvider implements FacetProviderPlugin {\n\n    private Noise lakeNoise;\n\n    @Override\n    public void setSeed(long seed) {\n        lakeNoise = new SubSampledNoise(new BrownianNoise(new PerlinNoise(seed + 3), 4), new Vector2f(0.001f, 0.001f), 1);\n    }\n\n    @Override\n    public void process(GeneratingRegion region) {\n        ElevationFacet facet = region.getRegionFacet(ElevationFacet.class);\n        float lakeDepth = 40;\n        // loop through every position on our 2d array\n        Rect2i processRegion = facet.getWorldRegion();\n        for (BaseVector2i position : processRegion.contents()) {\n            float additiveLakeDepth = lakeNoise.noise(position.x(), position.y()) * lakeDepth;\n            // dont bother adding lake height,  that will allow unaffected regions\n            additiveLakeDepth = TeraMath.clamp(additiveLakeDepth, -lakeDepth, 0);\n\n            facet.setWorld(position, facet.getWorld(position) + additiveLakeDepth);\n        }\n    }\n}\n")),Object(o.b)("p",null,"Note: make sure to use a different seed value than other noise or you could cancel each other out."),Object(o.b)("p",null,"Run that!"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Lakes Plugin",src:n(151).default})))}d.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,g=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(g,l(l({ref:t},c),{},{components:n})):a.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);