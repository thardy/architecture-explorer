document.addEventListener('DOMContentLoaded', function() { // on dom ready
    // possible shape values: rectangle, roundrectangle, ellipse, triangle, pentagon, hexagon, heptagon, octagon, star, diamond, vee, rhomboid, or polygon
    var nodes = [
        { data: { id: 'service-bus', name: 'Service Bus', shape: 'roundrectangle', href: '' }, locked: true, position: { x: 900, y: 900 } },
        
        { data: { id: 'dynamics', name: 'Microsoft Dynamics 365', shape: 'roundrectangle', href: '' } },
        { data: { id: 'dyn-365', name: 'Dynamics 365', parent: 'dynamics', shape: 'roundrectangle', href: '' } },
        { data: { id: 'rssu', name: 'RSSU', parent: 'dynamics', shape: 'roundrectangle', href: '' } },
        { data: { id: 'epi', name: 'EpiServer', shape: 'roundrectangle', href: '' } },
        { data: { id: 'epi-ecomm', name: 'Epi Ecomm', parent: 'epi', shape: 'roundrectangle', href: '' } },
        { data: { id: 'epi-db', name: 'Epi DB', parent: 'epi', shape: 'roundrectangle', href: '' } },
        { data: { id: 'avensia', name: 'Avensia', parent: 'epi', shape: 'roundrectangle', href: '' } },
        { data: { id: 'pd', name: 'Premier Designs', shape: 'roundrectangle', href: '' } },
        { data: { id: 'spa-dash', name: 'SPA Dashboard', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'hierarchy-db', name: 'Hierarchy DB', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'awards-service', name: 'Awards Service', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'email-service', name: 'Email Service', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'commissions-service', name: 'Commissions Service', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'commissions-db', name: 'Commissions DB', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'commissions-sftp', name: 'Commissions SFTP', shape: 'roundrectangle', href: '' } },
        { data: { id: 'commissions-ala', name: 'Commissions Azure Logic App', shape: 'roundrectangle', href: '' } },
        { data: { id: 'third-party', name: 'Third Party', shape: 'roundrectangle', href: '' } },
        { data: { id: 'email', name: 'Email', parent: 'third-party', shape: 'roundrectangle', href: '' } },
        { data: { id: 'propay', name: 'Pro Pay', parent: 'third-party', shape: 'roundrectangle', href: '' } },
        { data: { id: 'cc-proc', name: 'CC Proc', parent: 'third-party', shape: 'roundrectangle', href: '' } },
        { data: { id: 'tax-proc', name: 'Tax Proc', parent: 'third-party', shape: 'roundrectangle', href: '' } },
        { data: { id: 'email-service', name: 'Email Service', parent: 'pd', shape: 'roundrectangle', href: '' } },
        
        ];
    var edges = [
        { data: { source: 'dyn-365', target: 'rssu' } },
        { data: { source: 'rssu', target: 'avensia' } },
        { data: { source: 'avensia', target: 'rssu' } },
        { data: { source: 'avensia', target: 'epi-ecomm' } },
        { data: { source: 'avensia', target: 'epi-db' } },
        { data: { source: 'avensia', target: 'spa-dash' } },
        { data: { source: 'epi-ecomm', target: 'service-bus' } },
        { data: { source: 'epi-ecomm', target: 'epi-db' } },
        { data: { source: 'epi-ecomm', target: 'propay' } },
        { data: { source: 'epi-ecomm', target: 'cc-proc' } },
        { data: { source: 'epi-ecomm', target: 'tax-proc' } },
        { data: { source: 'email-service', target: 'service-bus' } },
        { data: { source: 'email-service', target: 'email' } },
        { data: { source: 'spa-dash', target: 'epi-ecomm' } },
        { data: { source: 'spa-dash', target: 'service-bus' } },
        { data: { source: 'spa-dash', target: 'hierarchy-db' } },
        { data: { source: 'spa-dash', target: 'commissions-db' } },
        { data: { source: 'awards-service', target: 'hierarchy-db' } },
        { data: { source: 'awards-service', target: 'service-bus' } },
        { data: { source: 'commissions-service', target: 'commissions-sftp' } },
        { data: { source: 'commissions-service', target: 'service-bus' } },
        { data: { source: 'commissions-service', target: 'commissions-db' } },
        { data: { source: 'commissions-sftp', target: 'commissions-ala' } },
        { data: { source: 'commissions-ala', target: 'dyn-365' } },
        ];
    var styles = [
        {
            selector: 'node',
            css: {
                'content': 'data(name)',
                'width': 50,
                'text-valign': 'center',
                'text-halign': 'center',
                'color': 'white',
                'text-outline-width': 2,
                'background-color': '#999',
                'text-outline-color': '#999'
            }
        },
        {
            selector: 'node[shape]',
            css: {
                'shape': 'data(shape)'
            }
        },
        {
            selector: '#service-bus',
            css: {
                'width': 800
            }
        },
        {
        selector: '$node > node',
        css: {
            'padding-top': '10px',
            'padding-left': '10px',
            'padding-bottom': '10px',
            'padding-right': '10px',
            'text-valign': 'top',
            'text-halign': 'center',
            'background-color': '#bcbcbc'
        }
        },
        {
            selector: 'edge',
            css: {
                'curve-style': 'bezier',
                'target-arrow-shape': 'triangle',
                'target-arrow-color': '#ccc',
                'line-color': '#ccc',
                'width': 1
            }
        },
        {
            selector: ':selected',
            css: {
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'black',
                'source-arrow-color': 'black'
            }
        },
        {
            selector: '.faded',
            css: {
                'opacity': 0.25,
                'text-opacity': 0
            }
        }
    ];

    var cy = cytoscape({
        container: document.querySelector('#cy'),

        //tile: false,            
        boxSelectionEnabled: false,
        autounselectify: true,
        wheelSensitivity: 0.4,
        minZoom: 0.2,
        maxZoom: 10,
        
        style: styles,
        
        elements: {
            nodes: nodes,
            edges: edges
        },
        
        layout: {
            name: 'dagre',
            // name: 'breadthfirst',
            // directed: true,
            // padding: 10
        },
    });

    // define double tap
    var tappedBefore;
    var tappedTimeout;
    cy.on('tap', function(event) {
        var tappedNow = event.cyTarget;
        if (tappedTimeout && tappedBefore) {
            clearTimeout(tappedTimeout);
        }
        if(tappedBefore === tappedNow) {
            tappedNow.trigger('doubleTap');
            tappedBefore = null;
        } else {
            tappedTimeout = setTimeout(function(){ tappedBefore = null; }, 300);
            tappedBefore = tappedNow;
        }
    });
    
    // highlight neighboring nodes on tap
    cy.on('tap', 'node', function(e) {
        var node = e.cyTarget; 
        var neighborhood = node.neighborhood().add(node);
        
        cy.elements().not('$node > node').addClass('faded');
        //cy.elements().addClass('faded');
        neighborhood.removeClass('faded');
    });

    cy.on('tap', function(e) {
        if( e.cyTarget === cy ){
            cy.elements().removeClass('faded');
        }
    });

    // navigate to url on double tap
    cy.on('doubleTap', 'node', function(event) { 
        try { // your browser may block popups
            window.open( this.data('href') );
        } catch (e) { // fall back on url change
            window.location.href = this.data('href'); 
        } 
 
    });


}); // on dom ready


