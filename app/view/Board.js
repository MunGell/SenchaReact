Ext.define('SenchaReact.view.Board', {
    extend: 'Ext.Container',
    xtype: 'react-board',
    requires: [],
    config: {},

    updateData: function(data) {
        var me = this;
        ReactDOM.render(React.createElement(ReactViewMain, data), me.element.dom);
    }
});
