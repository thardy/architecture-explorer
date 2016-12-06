var globalCy = {};

document.addEventListener('DOMContentLoaded', function() { // on dom ready
    // possible shape values: rectangle, roundrectangle, ellipse, triangle, pentagon, hexagon, heptagon, octagon, star, diamond, vee, rhomboid, or polygon
    var nodes = [
        //{ data: { id: 'service-bus', name: 'Service Bus', shape: 'roundrectangle', href: '' }, locked: false, position: { x: 900, y: 900 } },
        { data: { id: 'service-bus', name: 'Service Bus', shape: 'roundrectangle', href: '' } },
        { data: { id: 'dynamics', name: 'Microsoft Dynamics 365', shape: 'roundrectangle', href: '' } },
        { data: { id: 'dyn-365', name: 'Dynamics 365', parent: 'dynamics', shape: 'roundrectangle', href: '' } },
        { data: { id: 'rssu', name: 'RSSU', parent: 'dynamics', shape: 'roundrectangle', href: '' } },
        { data: { id: 'epi', name: 'EpiServer', shape: 'roundrectangle', href: '' } },
        { data: { id: 'epi-ecomm', name: 'Epi Ecomm', parent: 'epi', shape: 'roundrectangle', href: '' } },
        { data: { id: 'epi-db', name: 'Epi DB', parent: 'epi', shape: 'roundrectangle', image: '/it/SiteAssets/images/database-5-med.png', imageFaded: '/it/SiteAssets/images/database-5-med-faded.png', href: '' } },
        { data: { id: 'avensia', name: 'Avensia', parent: 'epi', shape: 'roundrectangle', href: '' } },
        { data: { id: 'dyn-crt', name: 'Dynamics CRT', parent: 'epi', shape: 'roundrectangle', href: '' } },
        { data: { id: 'pd', name: 'Premier Designs', shape: 'roundrectangle', href: '' } },
        { data: { id: 'spa-dash', name: 'SPA Dashboard', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'hierarchy-db', name: 'Hierarchy DB', parent: 'pd', shape: 'roundrectangle', image: '/it/SiteAssets/images/database-5-med.png', imageFaded: '/it/SiteAssets/images/database-5-med-faded.png', href: '' } },
        { data: { id: 'awards-service', name: 'Awards Service', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'email-service', name: 'Email Service', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'commissions-service', name: 'Commissions Service', parent: 'pd', shape: 'roundrectangle', href: '' } },
        { data: { id: 'commissions-db', name: 'Commissions DB', parent: 'pd', shape: 'roundrectangle', image: '/it/SiteAssets/images/database-5-med.png', imageFaded: '/it/SiteAssets/images/database-5-med-faded.png', href: '' } },
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
        { data: { source: 'avensia', target: 'dyn-crt' } },
        { data: { source: 'epi-ecomm', target: 'service-bus' } },
        { data: { source: 'dyn-crt', target: 'dyn-365' } },
        { data: { source: 'epi-ecomm', target: 'epi-db' } },
        { data: { source: 'epi-ecomm', target: 'propay' } },
        { data: { source: 'epi-ecomm', target: 'cc-proc' } },
        { data: { source: 'epi-ecomm', target: 'tax-proc' } },
        { data: { source: 'email-service', target: 'service-bus' } },
        { data: { source: 'email-service', target: 'email' } },
        { data: { source: 'spa-dash', target: 'avensia', label: '???' } },
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
            style: {
                'content': 'data(name)',
                //'width': 50,
                'text-valign': 'center',
                'text-halign': 'center',
                'color': 'white',
                'text-outline-width': 2,
                'background-color': '#999',
                'text-outline-color': '#999',
                 'height': 95,
                 'width': 95,
                'background-fit': 'cover',
                //'border-color': '#000',
                //'border-width': 3,
                //'border-opacity': 0.5
            }
        },
        // {
        //     selector: '#commissions-db',
        //     style: {
        //         'background-image': '/it/SiteAssets/images/database-5-med.png',
        //         'background-opacity': 0
        //     }
        // },
        {
            selector: 'node[image]',
            style: {
                'background-image': 'data(image)',
                'background-opacity': 0
            }
        },
        {
            selector: 'node[shape]',
            style: {
                'shape': 'data(shape)'
            }
        },
        {
            selector: '#service-bus',
            style: {
                'width': 800
            }
        },
        {
        selector: '$node > node',
            style: {
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
            style: {
                'curve-style': 'bezier',
                'target-arrow-shape': 'triangle',
                'target-arrow-color': '#ccc',
                'line-color': '#ccc',
                'width': 1
            }
        },
        {
            selector: 'edge[label]',
            style: {
                'label': 'data(label)'
            }
        },
        {
            selector: ':selected',
            style: {
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'black',
                'source-arrow-color': 'black'
            }
        },
        {
            selector: '.faded',
            style: {
                'opacity': 0.25,
                //'background-opacity': 1,
                'text-opacity': 0
            }
        }
    ];

    var cy = cytoscape({
        container: document.querySelector('#cy'),

        //tile: false,            
        boxSelectionEnabled: false,
        autounselectify: true,
        wheelSensitivity: 0.3,
        minZoom: 0.2,
        maxZoom: 10,
        
        style: styles,
        
        elements: {
            nodes: nodes,
            edges: edges
        },
        
        layout: {
            name: 'dagre'
        },
    });
    window.globalCy = cy;

    //cy.$('#commissions-db').addClass('shape-database');

    // testing animation
    

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
    console.log(cy.json());
    
    // highlight neighboring nodes on tap
    cy.on('tap', 'node', function(e) {
        var node = e.cyTarget; 
        var neighborhood = node.neighborhood().add(node);
        
        //cy.elements().not('$node > node').addClass('faded');
        //cy.elements().addClass('faded');
        
        // Fade out all non image, non compound nodes
        var nodesWithoutImagesAndNotCompounds = cy.elements().not('$node > node').not('node[image]');
        nodesWithoutImagesAndNotCompounds.addClass('faded');
        
        // fade out all image nodes
        var nodesWithImages = cy.elements('node[image]');
        for (var i = 0; i < nodesWithImages.length; i++) {
            var node = nodesWithImages[i];
            if (node.data('image')) {
                fadeImage(node);
            }
        } 
        
        // remove fade from neighbors (using class)
        neighborhood.removeClass('faded');
        // remove fade from neigbors with images
        var neighborhoodNodesWithImages = getNodesWithImages(neighborhood);
        for (var j = 0; j < neighborhoodNodesWithImages.length; j++) {
            removeImageFade(neighborhoodNodesWithImages[j]);
        }
        
    });

    cy.on('tap', function(e) {
        if( e.cyTarget === cy ){
            // remove fade class from all non image, non compound nodes
            var nodesWithoutImagesAndNotCompounds = cy.elements().not('$node > node').not('node[image]');
            nodesWithoutImagesAndNotCompounds.removeClass('faded');
            //cy.elements().removeClass('faded');

            // remove fade from all image nodes
            var nodesWithImages = cy.elements('node[image]');
            for (var i = 0; i < nodesWithImages.length; i++) {
                var node = nodesWithImages[i];
                if (node.data('image')) {
                    removeImageFade(node);
                }
            } 
            
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

    function fadeImage(node) {
        node.style('background-image', node.data('imageFaded'));
    }

    function removeImageFade(node) {
        node.style('background-image', node.data('image'));
    }

    function getNodesWithImages(array) {
        var nodesWithImages = [];
        for (var i = 0; i < array.length; i++) {
            var node = array[i];
            if (node.data("image")) {
                nodesWithImages.push(node);
            }
        }

        return nodesWithImages;
    }

}); // on dom ready

// We can use the exported json to take a snapshot of the node positions.  This can allow users
//  to move nodes around and export their locations.  We can then turn the auto-layout option off
//  and use these positions to manually recreate what the user configured. The json is imported 
//  using the same function - cy.json(importedJson);
function exportJson() {
    console.log(globalCy.json());
}

function zoomTo(nodeId) {
    var zoomOutLevel = .6;
    var zoomInLevel = 1;
    var duration = 500;
    //globalCy.animation({ zoom: zoomOutLevel, center: {eles: globalCy.filter('#cy')} }, { duration: duration }).play().promise()
    globalCy.animation({ fit: {} }, { duration: duration }).play().promise()
        .then(function(result) { 
            globalCy.animation(
                { 
                    zoom: zoomInLevel,
                     center: {
                         eles: globalCy.filter('#' + nodeId)
                     }
                },
                { 
                    duration: duration
                }
            ).play().promise(); 
        });
    
}