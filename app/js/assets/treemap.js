/*
 Highcharts JS v4.1.6 (2015-06-12)

 (c) 2014 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(g){var h=g.seriesTypes,l=g.merge,t=g.extendClass,u=g.getOptions().plotOptions,v=function(){},m=g.each,r=g.pick,p=g.Series,s=g.Color;u.treemap=l(u.scatter,{showInLegend:!1,marker:!1,borderColor:"#E0E0E0",borderWidth:1,dataLabels:{enabled:!0,defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||this.point.id},inside:!0},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.node.val}</b><br/>"},layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",
alternateStartingDirection:!1,levelIsConstant:!0,states:{hover:{borderColor:"#A0A0A0",brightness:h.heatmap?0:0.1,shadow:!1}},drillUpButton:{position:{align:"left",x:10,y:-50}}});h.treemap=t(h.scatter,l({pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",dashstyle:"borderDashStyle"},pointArrayMap:["value"],axisTypes:h.heatmap?["xAxis","yAxis","colorAxis"]:["xAxis","yAxis"],optionalAxis:"colorAxis",getSymbol:v,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",
translateColors:h.heatmap&&h.heatmap.prototype.translateColors},{type:"treemap",trackerGroups:["group","dataLabelsGroup"],pointClass:t(g.Point,{setState:function(a,b){g.Point.prototype.setState.call(this,a,b);a==="hover"?this.dataLabel&&this.dataLabel.attr({zIndex:1002}):this.dataLabel&&this.dataLabel.attr({zIndex:this.pointAttr[""].zIndex+1})},setVisible:h.pie.prototype.pointClass.prototype.setVisible}),handleLayout:function(){var a=this.tree,b;if(this.points.length)this.nodeMap=[],a=this.tree=this.getTree(),
this.rootNode=r(this.rootNode,""),this.levelMap=this.getLevels(),m(this.points,function(a){delete a.plotX;delete a.plotY}),b=this.getSeriesArea(a.val),this.nodeMap[""].values=b,this.calculateArea(a,b),this.setPointValues()},getTree:function(){var a=this,b=0,c=[],d=[],e,f=function(a){m(c[a],function(a){c[""].push(a)})},j=function(b,c,d,e,f,k,o){var g=[],h=0,q;q=f[c];var l,p;o&&(o=r(q&&q.visible,!0));p=r(q&&q.name,"");e[b]!==void 0&&m(e[b],function(c){l=j(f[c].id,c,d+1,e,f,b,o);if(l.visible||!a.options.ignoreHiddenPoint)h+=
l.val,a.insertElementSorted(g,l,function(a,b){return a.val>b.val})});q=r(f[c]&&f[c].value,h,0);o=q>0?o:!1;c={id:b,i:c,children:g,childrenTotal:h,val:q,level:d,parent:k,name:p,visible:o};return a.nodeMap[c.id]=c};m(this.points,function(a){var e="";d.push(a.id);if(a.parent!==void 0)e=a.parent;c[e]===void 0&&(c[e]=[]);c[e].push(b);b+=1});for(e in c)c.hasOwnProperty(e)&&e!==""&&HighchartsAdapter.inArray(e,d)===-1&&(f(e),delete c[e]);return j("",-1,0,c,this.points,null,!0)},calculateArea:function(a,b){var c=
[],d,e=this,f=e.options,j=f.layoutAlgorithm,g=f.alternateStartingDirection,w=this.nodeMap[this.rootNode].level,n=0,i,h=f.levelIsConstant?a.level:a.level-w,k,h=h>0?h:0;if(this.levelMap[h+1]){i=this.levelMap[h+1];if(i.layoutAlgorithm&&e[i.layoutAlgorithm])j=i.layoutAlgorithm;if(i.layoutStartingDirection)b.direction=i.layoutStartingDirection==="vertical"?0:1}c=e[j](b,a.children);m(a.children,function(a){h=f.levelIsConstant?a.level:a.level-w;k=e.points[a.i];k.level=h;d=c[n];d.val=a.childrenTotal;d.direction=
b.direction;if(g)d.direction=1-d.direction;a.values=d;k.node=a;k.isLeaf=!0;if(a.children.length)k.isLeaf=!1,e.calculateArea(a,d);n+=1})},setPointValues:function(){var a=this,b=a.xAxis,c=a.yAxis;a.nodeMap[""].values={x:0,y:0,width:100,height:100};m(a.points,function(d){var e=d.node,f=e.values,j,g,h;f.x/=a.axisRatio;f.width/=a.axisRatio;j=Math.round(b.translate(f.x,0,0,0,1));g=Math.round(b.translate(f.x+f.width,0,0,0,1));h=Math.round(c.translate(f.y,0,0,0,1));f=Math.round(c.translate(f.y+f.height,0,
0,0,1));if(e.visible||!a.options.ignoreHiddenPoint)d.shapeType="rect",d.shapeArgs={x:Math.min(j,g),y:Math.min(h,f),width:Math.abs(g-j),height:Math.abs(f-h)},d.plotX=d.shapeArgs.x+d.shapeArgs.width/2,d.plotY=d.shapeArgs.y+d.shapeArgs.height/2})},getSeriesArea:function(a){var b=this.options.layoutStartingDirection==="vertical"?0:1;return{x:0,y:0,width:100*(this.axisRatio=this.xAxis.len/this.yAxis.len),height:100,direction:b,val:a}},getLevels:function(){var a=[],b=this.options.levels;b&&m(b,function(b){b.level!==
void 0&&(a[b.level]=b)});return a},setColorRecursive:function(a,b){var c=this,d,e;if(a){d=c.points[a.i];e=c.levelMap[a.level];b=r(d&&d.options.color,e&&e.color,b);if(d)d.color=b;a.children.length&&m(a.children,function(a){c.setColorRecursive(a,b)})}},alg_func_group:function(a,b,c,d){this.height=a;this.width=b;this.plot=d;this.startDirection=this.direction=c;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,b){return Math.max(a/
b,b/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;this.direction===0?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=
this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0}},alg_func_calcPoints:function(a,b,c,d){var e,f,j,g,h=c.lW,n=c.lH,i=c.plot,l,k=0,o=c.elArr.length-1;b?(h=c.nW,n=c.nH):l=c.elArr[c.elArr.length-1];m(c.elArr,function(a){if(b||k<o)c.direction===0?(e=i.x,f=i.y,j=h,g=a/j):(e=i.x,f=i.y,g=n,j=a/g),d.push({x:e,y:f,width:j,height:g}),c.direction===0?i.y+=g:i.x+=j;k+=1});c.reset();c.direction===0?c.width-=h:c.height-=n;i.y=i.parent.y+
(i.parent.height-c.height);i.x=i.parent.x+(i.parent.width-c.width);if(a)c.direction=1-c.direction;b||c.addElement(l)},alg_func_lowAspectRatio:function(a,b,c){var d=[],e=this,f,j={x:b.x,y:b.y,parent:b},g=0,h=c.length-1,n=new this.alg_func_group(b.height,b.width,b.direction,j);m(c,function(c){f=b.width*b.height*(c.val/b.val);n.addElement(f);n.lP.nR>n.lP.lR&&e.alg_func_calcPoints(a,!1,n,d,j);g===h&&e.alg_func_calcPoints(a,!0,n,d,j);g+=1});return d},alg_func_fill:function(a,b,c){var d=[],e,f=b.direction,
j=b.x,g=b.y,h=b.width,n=b.height,i,l,k,o;m(c,function(c){e=b.width*b.height*(c.val/b.val);i=j;l=g;f===0?(o=n,k=e/o,h-=k,j+=k):(k=h,o=e/k,n-=o,g+=o);d.push({x:i,y:l,width:k,height:o});a&&(f=1-f)});return d},strip:function(a,b){return this.alg_func_lowAspectRatio(!1,a,b)},squarified:function(a,b){return this.alg_func_lowAspectRatio(!0,a,b)},sliceAndDice:function(a,b){return this.alg_func_fill(!0,a,b)},stripes:function(a,b){return this.alg_func_fill(!1,a,b)},translate:function(){p.prototype.translate.call(this);
this.handleLayout();this.colorAxis?this.translateColors():this.options.colorByPoint||this.setColorRecursive(this.tree,void 0)},drawDataLabels:function(){var a=this,b=a.dataLabelsGroup,c,d;m(a.points,function(b){d=a.levelMap[b.level];c={style:{}};if(!b.isLeaf)c.enabled=!1;if(d&&d.dataLabels)c=l(c,d.dataLabels),a._hasPointLabels=!0;if(b.shapeArgs)c.style.width=b.shapeArgs.width;b.dlOptions=l(c,b.options.dataLabels)});this.dataLabelsGroup=this.group;p.prototype.drawDataLabels.call(this);this.dataLabelsGroup=
b},alignDataLabel:h.column.prototype.alignDataLabel,drawPoints:function(){var a=this,b=a.points,c=a.options,d,e,f;m(b,function(b){f=a.levelMap[b.level];d={stroke:c.borderColor,"stroke-width":c.borderWidth,dashstyle:c.borderDashStyle,r:0,fill:r(b.color,a.color)};if(f)d.stroke=f.borderColor||d.stroke,d["stroke-width"]=f.borderWidth||d["stroke-width"],d.dashstyle=f.borderDashStyle||d.dashstyle;d.stroke=b.borderColor||d.stroke;d["stroke-width"]=b.borderWidth||d["stroke-width"];d.dashstyle=b.borderDashStyle||
d.dashstyle;d.zIndex=1E3-b.level*2;b.pointAttr=l(b.pointAttr);e=b.pointAttr.hover;e.zIndex=1001;e.fill=s(d.fill).brighten(c.states.hover.brightness).get();if(!b.isLeaf)r(c.interactByLeaf,!c.allowDrillToNode)?(d.fill="none",delete e.fill):(d.fill=s(d.fill).setOpacity(0.15).get(),e.fill=s(e.fill).setOpacity(0.75).get());if(b.node.level<=a.nodeMap[a.rootNode].level)d.fill="none",d.zIndex=0,delete e.fill;b.pointAttr[""]=g.extend(b.pointAttr[""],d);b.dataLabel&&b.dataLabel.attr({zIndex:b.pointAttr[""].zIndex+
1})});h.column.prototype.drawPoints.call(this);m(b,function(a){a.graphic&&a.graphic.attr(a.pointAttr[""])});c.allowDrillToNode&&a.drillTo()},insertElementSorted:function(a,b,c){var d=0,e=!1;a.length!==0&&m(a,function(f){c(b,f)&&!e&&(a.splice(d,0,b),e=!0);d+=1});e||a.push(b)},drillTo:function(){var a=this;m(a.points,function(b){var c,d;g.removeEvent(b,"click.drillTo");b.graphic&&b.graphic.css({cursor:"default"});if(c=a.options.interactByLeaf?a.drillToByLeaf(b):a.drillToByGroup(b))d=a.nodeMap[a.rootNode].name||
a.rootNode,b.graphic&&b.graphic.css({cursor:"pointer"}),g.addEvent(b,"click.drillTo",function(){b.setState("");a.drillToNode(c);a.showDrillUpButton(d)})})},drillToByGroup:function(a){var b=!1;if(a.node.level-this.nodeMap[this.rootNode].level===1&&!a.isLeaf)b=a.id;return b},drillToByLeaf:function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.isLeaf)for(a=a.node;!b;)if(a=this.nodeMap[a.parent],a.parent===this.rootNode)b=a.id;return b},drillUp:function(){var a=null;this.rootNode&&(a=this.nodeMap[this.rootNode],
a=a.parent!==null?this.nodeMap[a.parent]:this.nodeMap[""]);if(a!==null)this.drillToNode(a.id),a.id===""?this.drillUpButton=this.drillUpButton.destroy():(a=this.nodeMap[a.parent],this.showDrillUpButton(a.name||a.id))},drillToNode:function(a){var b=this.nodeMap[a].values;this.rootNode=a;this.xAxis.setExtremes(b.x,b.x+b.width,!1);this.yAxis.setExtremes(b.y,b.y+b.height,!1);this.isDirty=!0;this.chart.redraw()},showDrillUpButton:function(a){var b=this,a=a||"< Back",c=b.options.drillUpButton,d,e;if(c.text)a=
c.text;this.drillUpButton?this.drillUpButton.attr({text:a}).align():(e=(d=c.theme)&&d.states,this.drillUpButton=this.chart.renderer.button(a,null,null,function(){b.drillUp()},d,e&&e.hover,e&&e.select).attr({align:c.position.align,zIndex:9}).add().align(c.position,!1,c.relativeTo||"plotBox"))},buildKDTree:v,drawLegendSymbol:g.LegendSymbolMixin.drawRectangle,getExtremes:function(){p.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;p.prototype.getExtremes.call(this)},
getExtremesFromAll:!0,bindAxes:function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};p.prototype.bindAxes.call(this);g.extend(this.yAxis.options,a);g.extend(this.xAxis.options,a)}}))})(Highcharts);
