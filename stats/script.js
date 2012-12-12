google.load('visualization', '1', {packages: ['corechart']});
   
      function drawVisualization() {
        // Create and populate the data table.
        var tot=810;
        var clist=797;
        var dl=241;
        var click=47;
        var opto=1;
        
        var data = google.visualization.arrayToDataTable([
          ['What', 'how many'],
          ['Bounce', tot-clist],
        
          ['Download Images', dl],
          ['Clicked Link', click],
          ['Did Nothing', clist-(dl+click)]
        ]);
      
        // Create and draw the visualization.
        new google.visualization.PieChart(document.getElementById('viz')).
          draw(data, {title:"Results as of 3pm"});
      }
      

      google.setOnLoadCallback(drawVisualization);