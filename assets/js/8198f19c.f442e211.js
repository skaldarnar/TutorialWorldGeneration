(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(95)),s={title:"Facets Across Borders"},i={unversionedId:"advanced/facets-across-borders",id:"advanced/facets-across-borders",isDocsHomePage:!1,title:"Facets Across Borders",description:"Basic topics",source:"@site/docs/advanced/facets-across-borders.md",slug:"/advanced/facets-across-borders",permalink:"/TutorialWorldGeneration/docs/advanced/facets-across-borders",editUrl:"https://github.com/terasology/TutorialWorldGeneration/edit/develop/docs/docs/advanced/facets-across-borders.md",version:"current",sidebar:"someSidebar",previous:{title:"Plugins",permalink:"/TutorialWorldGeneration/docs/advanced/plugins"},next:{title:"Zones",permalink:"/TutorialWorldGeneration/docs/advanced/zones"}},c=[{value:"<strong>Basic topics</strong>",id:"basic-topics",children:[]},{value:"<strong>Basic setup</strong>",id:"basic-setup",children:[]},{value:"<strong>Adding the Meat!</strong>",id:"adding-the-meat",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"basic-topics"},Object(o.b)("strong",{parentName:"h2"},"Basic topics")),Object(o.b)("p",null,"Many people have issues understanding what's going on with the facets across borders.\nThis is a short tutorial to help you understand it better, pictures included in the following tutorials.\nFirst of all, you need to understand the structure of how the world generation works. The Terasology developers have made a clear structure in this, so everyone is able to add new and great world generators. You have:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Facets"),Object(o.b)("li",{parentName:"ul"},"FacetProviders"),Object(o.b)("li",{parentName:"ul"},"Rasterizers")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What is a Facet?"),"\nA facet, is a side of a many-sided object. Take for instance a map of the Earth. You have a facet (or side) of the Earth that's all about population. Meanwhile, you also have a facet that's about differences in species across the globe!\nA facet is one of these things. What does this have to do with our dear game Terasology you ask? Well, 3D-worlds are as you know not plain 3D fields with only dirt! The worlds contain objects, have properties and so on. One 'facet' of the world might be the biomes. Another one could be where that certain fruit grows."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What is a FacetProvider?"),"\nA FacetProvider is, as the name itself says, a class that providers the world with the appropriate facet for a certain region. What you typically do in here is scan through the blocks and check for a condition. If that condition is true, you do something, such as placing a facet on that particular coordinate which you scanned through."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What is a Rasterizer?"),"\nThis is where it gets intresting. A rasterizer is what interprets the Facet data. The rasterizer is where you place the blocks in the world."),Object(o.b)("p",null,"Simple enough? Well, let's get started with some tips on how to make some more complex shapes, such as pyramids.\nLet us start with a problem definition, what do we want?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We want to have a good looking pyramid to show off to my friends. It must have some sort of path to get to the center. No more than a few pyramids should spawn on a short distance, so it doesn't get too crowded. We also want to make sure that the pyramid isn't floating!")),Object(o.b)("p",null,"Okay. That seems a whole lot of work. First things first.\nWe should start out with creating our classes. (Try to find the solution on these issues yourself first before copying it from here! It's the best practice!)"),Object(o.b)("h2",{id:"basic-setup"},Object(o.b)("strong",{parentName:"h2"},"Basic setup")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Our Facet")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public class TempleFacet extends SparseObjectFacet3D<Temple> {\n\n    public TempleFacet(Region3i targetRegion, Border3D border) {\n        super(targetRegion, border);\n    }\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Our FacetProvider")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@Requires(@Facet(value = SurfacesFacet.class, border = @FacetBorder(sides = 28, bottom = 28, top = 28)))\n@Produces(TempleFacet.class)\npublic class TempleFacetProvider implements FacetProvider {\n    private WhiteNoise noise;\n\n    @Override\n    public void process(GeneratingRegion region) {\n    }\n\n    @Override public void setSeed(long seed) {\n    }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public class TempleRasterizer implements WorldRasterizer {\n\n    public static int getSize() {\n    }\n\n    @Override\n    public void initialize() {\n    }\n\n    @Override\n    public void generateChunk(CoreChunk chunk, Region chunkRegion) {\n        \n    }\n}\n\n")),Object(o.b)("p",null,"Now we have set up you can continue.\nWe only have to change two classes basically, the provider and the rasterizer."),Object(o.b)("h2",{id:"adding-the-meat"},Object(o.b)("strong",{parentName:"h2"},"Adding the Meat!")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The TempleFacetProvider")),Object(o.b)("p",null,"First of all, you want to make sure you have added a border on the @Requires annotation Facet. What this does is make sure the Facet provides enough space."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@Requires(@Facet(value = SurfacesFacet.class, border = @FacetBorder(sides = 28, bottom = 28, top = 28)))\n")),Object(o.b)("p",null,"You should add a field with type ",Object(o.b)("inlineCode",{parentName:"p"},"WhiteNoise "),". We use this to generate randomly.\nThis gets the border of the TempleFacet and adds 30 by it on the sides/top/bottom."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"Border3D border = region.getBorderForFacet(TempleFacet.class).extendBy(30, 30, 30);\n")),Object(o.b)("p",null,"Create a temple facet with the specified region and borders (You have made a variable above (border))"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"TempleFacet facet = new TempleFacet(region.getRegion(), border);\n")),Object(o.b)("p",null,"This takes the SurfacesFacet from the region. It's used to get the location of the land's surfaces, as that's where the temples are"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"SurfacesFacet surfacesFacet = region.getRegionFacet(SurfacesFacet.class);\n")),Object(o.b)("p",null,"We will iterate over the locations where both facets are defined. Which of them is defined over a larger area may depend on other parts of the world generator, so we iterate over the locations in one, then check that they're also in the other."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"Region3i worldRegion = surfacesFacet.getWorldRegion();\n")),Object(o.b)("p",null,"That's about all we need to start looping and doing the nice stuff.",Object(o.b)("br",{parentName:"p"}),"\n","Loop through the surface points within this region."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"for (int wx = worldRegion.minX(); wx <= worldRegion.maxX(); wx++) {\n    for (int wz = worldRegion.minZ(); wz <= worldRegion.maxZ(); wz++) {\n        for (int wy : surfacesFacet.getWorldColumn(wx, wz)) {\n            if (facet.getWorldRegion().encompasses(wx, wy, wz)) {\n                // Content here\n            }\n        }\n    }\n}\n")),Object(o.b)("p",null,"Then, inside of the inner for-loop, put this piece of code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"if (noise.noise(wx, wy, wz) > 0.9999) {\n    templeFacet.setWorld(wx, wy, wz, new Temple());\n}\n")),Object(o.b)("p",null,"Finally, outside of the two for loops write "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"region.setRegionFacet(TempleFacet.class, templeFacet); \n")),Object(o.b)("p",null,"Don't forget to add this. It takes the seed and generates a new WhiteNoise object with it."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@Override public void setSeed(long seed) {\n    noise = new WhiteNoise(seed);\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The TempleRasterizer")),Object(o.b)("p",null,"This is the best part, really. Make a Block field inside of the Rasterizer, and in the Initialize method, set this field equal to something like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'stone = CoreRegistry.get(BlockManager.class).getBlock("CoreAssets:Stone");\n')),Object(o.b)("p",null,"We will be using this Block to fill our pyramid.\nCall the getFacet(); method on the chunkRegion and assign it to a new TempleFacet. Like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"chunkRegion.getFacet(TempleFacet.class);\n")),Object(o.b)("p",null,"Loop through the WorldEntries like so"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"for (Entry<BaseVector3i, Temple> entry : templeFacet.getWorldEntries().entrySet()) {\n")),Object(o.b)("p",null,"This is the most vital part. If you go check locally on the chunk itself you will get buildings cut in half!"),Object(o.b)("p",null,"Perform these really basic operations to get the size and such for the pyramid"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"Vector3i basePosition = new Vector3i(entry.getKey());\nint size = TempleRasterizer.getSize();\nint min = 0;\nint height = (TempleRasterizer.getSize() + 1) / 2;\n")),Object(o.b)("p",null,"We then can start looping through our locations! This is the algorithm I used to generate the pyramid."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"for (int i = 0; i <= height; i++) {\n    for (int x = min; x <= size; x++) {\n        for (int z = min; z <= size; z++) {\n            Vector3i chunkBlockPosition = new Vector3i(x, i, z).add(basePosition);\n            if (chunk.getRegion().encompasses(chunkBlockPosition) && !region3i1.encompasses(chunkBlockPosition) &&     !region3i2.encompasses(chunkBlockPosition))\n                chunk.setBlock(ChunkMath.calcBlockPos(chunkBlockPosition), stone);\n\n        }\n    }\n    min++;\n    size--;\n}\n")),Object(o.b)("p",null,"//TODO: add repo location."))}p.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,h=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(h,i(i({ref:t},l),{},{components:a})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);