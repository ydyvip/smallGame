var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LayerManager = (function (_super) {
    __extends(LayerManager, _super);
    function LayerManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerManager.inst = function () {
        var _inst = _super.single.call(this);
        return _inst;
    };
    LayerManager.prototype.iniaizlize = function (p) {
        p.addChild(LayerManager.MAP_LAYER);
        LayerManager.MAP_LAYER.name = "layer_map";
        LayerManager.MAP_LAYER.touchEnabled = true;
        // LayerManager.MAP_LAYER.touchThrough = true;
        p.addChild(LayerManager.UI_Main);
        LayerManager.UI_Main.name = "layer_main";
        LayerManager.UI_Main.touchThrough = true;
        p.addChild(LayerManager.UI_MAIN_NAV);
        LayerManager.UI_MAIN_NAV.name = "layer_nav";
        LayerManager.UI_MAIN_NAV.touchThrough = true;
        p.addChild(LayerManager.UI_Pop);
        LayerManager.UI_Pop.name = "layer_pop";
        LayerManager.UI_Pop.touchThrough = true;
        p.addChild(LayerManager.TIPS_LAYER);
        LayerManager.TIPS_LAYER.name = "tips";
        LayerManager.TIPS_LAYER.touchThrough = true;
        p.addChild(LayerManager.UI_TOP);
        LayerManager.UI_TOP.name = "top";
        LayerManager.UI_TOP.touchThrough = true;
    };
    LayerManager.MAP_LAYER = new eui.UILayer();
    LayerManager.UNIT_LAYER = new eui.UILayer();
    LayerManager.EFFECT_LAYER = new eui.UILayer();
    LayerManager.UI_Main = new eui.UILayer();
    LayerManager.UI_MAIN_NAV = new eui.UILayer();
    LayerManager.UI_Pop = new eui.UILayer();
    LayerManager.TIPS_LAYER = new eui.UILayer();
    LayerManager.UI_TOP = new eui.UILayer();
    return LayerManager;
}(BaseClass));
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map