Ext.define('Ext.ux.react.React', {
    extend: 'Ext.Component',
    xtype: 'ux-react',
    config: {
        component: null,
        rootID: null
    },

    updateData: function (data) {
        var me = this,
            component = React.createElement(me.getComponent(), data);
        ReactDOM.render(component, me.element.dom);
    }
});
