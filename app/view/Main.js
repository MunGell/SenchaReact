Ext.define('SenchaReact.view.Main', {
    extend: 'Ext.NavigationView',

    xtype: 'main',
    requires: [
        'SenchaReact.view.Board'
    ],
    config: {
        items: [
            {
                xtype: 'react-board',
                data: {
                    name: 'Bill'
                }
            }
        ]
    }
});
