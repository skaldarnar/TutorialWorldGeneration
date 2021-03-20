(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),i=t(7),r=(t(0),t(95)),a={title:"Biomes"},s={unversionedId:"topics/biomes",id:"topics/biomes",isDocsHomePage:!1,title:"Biomes",description:"Biomes in Terasology represent region-specific world metadata of sorts. They",source:"@site/docs/topics/biomes.md",slug:"/topics/biomes",permalink:"/docs/topics/biomes",editUrl:"https://github.com/terasology/TutorialWorldGeneration/edit/develop/docs/docs/topics/biomes.md",version:"current",sidebar:"someSidebar",previous:{title:"World Viewer",permalink:"/docs/advanced/world-viewer"},next:{title:"Randomness",permalink:"/docs/topics/randomness"}},l=[],c={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Biomes in Terasology represent region-specific world metadata of sorts. They\ncan be used in runtime as means of scheduling music to play/mobs to spawn/\nselecting color of unicorns/whatever to fit the surroundings, and thus\nimproving player experience (you don't want whales to spawn in every pond).\nBiomes can also be used as sorts of additional data used when generating\nworlds, for instance to help you decide which kind of flowers to spawn where.\nPlease note, that unlike in minecraft, biomes can be set on per-block basis,\nmeaning you can have different biomes at different heights within the same\n",Object(r.b)("inlineCode",{parentName:"p"},"xz")," coordinate. Also note, that unlike Terraria, biomes are set during world\ngeneration and not computed on the run from surrounding blocks, meaning you\nhave to update block's biome manually if you ever find it necessary to. In\nthis tutorial, we will set up our world with three different biomes: ",Object(r.b)("inlineCode",{parentName:"p"},"Land"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"Water"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"Sky")," (the latest starting at 10 blocks above terrain and\nspanning the whole rest of the world)."),Object(r.b)("p",null,"Firstly, since biomes are no longer part of the base engine, you need to\nchange the ",Object(r.b)("inlineCode",{parentName:"p"},"module.txt")," of your module to depend on the ",Object(r.b)("inlineCode",{parentName:"p"},"BiomesAPI")," module\n(if you are depending on ",Object(r.b)("inlineCode",{parentName:"p"},"CoreWorlds"),", you are already implicitly depending on\n",Object(r.b)("inlineCode",{parentName:"p"},"BiomesAPI"),", but it is a good idea to denote this dependency explicitly)."),Object(r.b)("p",null,"Then, to get started, first create the biomes themselves. Biomes are easiest\ncreated as different values of enum, so let's do just that!"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public enum TutorialBiome implements Biome {\n    LAND, WATER, SKY;\n    \n    @Override\n    public String getId() {\n        return null;\n    }\n    \n    @Override\n    public String getName() {\n        return null;\n    }\n}\n")),Object(r.b)("p",null,"You already got two methods required by the ",Object(r.b)("inlineCode",{parentName:"p"},"Biome")," interface, what should\nthose return? By checking their documentation in your IDE you can see that\n",Object(r.b)("inlineCode",{parentName:"p"},"getId()")," should return the gestalt-style unique ID of your biome, including\nthe module-name, and ",Object(r.b)("inlineCode",{parentName:"p"},"getName()")," ought return human-friendly name of the\nbiome. The simplest and proven way of implementing those methods is thus:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public enum TutorialBiome implements Biome {\n    LAND("Land"), WATER("Water"), SKY("Sky");\n\n    TutorialBiome(String name) {\n        this.name = name;\n    }\n\n    private final String name;\n\n    @Override\n    public String getId() {\n        return "TutorialWorldGeneration:" + this.toString();\n    }\n\n    @Override\n    public String getName() {\n        return name;\n    }\n}\n')),Object(r.b)("p",null,"Looking at the Biome interface, you can also see a third method, ",Object(r.b)("inlineCode",{parentName:"p"},"biomeHash"),",\nwith a default implementation. A good practice is however to override this\nmethod too to hardcoded values, so that leaves us with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public enum TutorialBiome implements Biome {\n    LAND("Land", (short) 1), WATER("Water", (short) 2), SKY("Sky", (short) 3);\n\n    TutorialBiome(String name, short biomeHash) {\n        this.name = name;\n        this.biomeHash = biomeHash;\n    }\n\n    private final String name;\n    private final short biomeHash;\n\n    @Override\n    public String getId() {\n        return "TutorialWorldGeneration:" + this.toString();\n    }\n\n    @Override\n    public String getName() {\n        return name;\n    }\n    \n    @Override\n    public short biomeHash() {\n        return biomeHash;\n    }\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: The biome hashes have to be explicitly casted to ",Object(r.b)("inlineCode",{parentName:"p"},"short")," due to how\nJava handles numerical literals")),Object(r.b)("p",null,"Now that you have created your biomes, you also need to register them with the\nBiomesAPI module. To do that, create a plain old ComponentSystem, and in its\n",Object(r.b)("inlineCode",{parentName:"p"},"preBegin")," method, register each of the biomes as following"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@RegisterSystem\npublic class TutorialBiomes extends BaseComponentSystem {\n    @In\n    BiomeRegistry registry;\n    \n    @Override\n    public void preBegin() {\n        for (TutorialBiome biome : TutorialBiome.values()) {\n            registry.registerBiome(biome);\n        }\n    }\n}\n")),Object(r.b)("p",null,"Now that you have the biomes all set up and ready to use, you can finally get\nto the last step, populating the world with the biomes. You do this as you\nwould populate the world with blocks, by creating a new rasterizer. For the\nbehaviour as used by this tutorial, the rasterizer can look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@Requires({@Facet(SeaLevelFacet.class), @Facet(ElevationFacet.class)})\npublic class BiomeRasterizer implements WorldRasterizer {\n    private BiomeRegistry biomeRegistry;\n\n    @Override\n    public void initialize() {\n        biomeRegistry = CoreRegistry.get(BiomeRegistry.class);\n    }\n    \n    @Override\n    public void generateChunk(CoreChunk chunk, Region chunkRegion) {\n        ElevationFacet elevationFacet = chunkRegion.getFacet(ElevationFacet.class);\n        SeaLevelFacet seaLevelFacet = chunkRegion.getFacet(SeaLevelFacet.class);\n        for (Vector3i position : chunkRegion.getRegion()) {\n            if (position.y > Math.max(seaLevelFacet.getSeaLevel(), elevationFacet.getWorld(position.x, position.z)) + 10) {\n                biomeRegistry.setBiome(TutorialBiome.SKY, position);\n            } else if (elevationFacet.getWorld(position.x, position.z) + 1 > seaLevelFacet.getSeaLevel()) {\n                biomeRegistry.setBiome(TutorialBiome.LAND, position);\n            }\n            else {\n                biomeRegistry.setBiome(TutorialBiome.WATER, position);\n            }\n        }\n    }\n}\n")),Object(r.b)("p",null,"You can of course also create a 2d/3d ",Object(r.b)("inlineCode",{parentName:"p"},"Facet"),", its respective ",Object(r.b)("inlineCode",{parentName:"p"},"FacetProvider"),"\nand do lots of more interesting things with designating biomes, but after\ngoing through this tutorial, you should already have high enough grasp of the\nprinciples used when dealing with biomes to figure that out by yourself."))}u.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,b=m["".concat(a,".").concat(d)]||m[d]||p[d]||r;return t?i.a.createElement(b,s(s({ref:n},c),{},{components:t})):i.a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);