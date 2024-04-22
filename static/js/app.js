// declare the website
const URL = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// get the data and set up the subsequent functions with the data they need
function initialize() {
    d3.json(URL).then(function(data) {
        popDropdown(data.names);
        optionChanged(data.names[0]);
    });
}

// register the change and feed subjectId to other functions
function optionChanged(subjectID) {
    console.log(`optionChanged ${subjectID}`);
    d3.json(URL).then(function(data) {
        popDemos(subjectID, data.metadata);
        barChart(subjectID, data.samples);
        bubbleChart(subjectID, data.samples);
    });
}

// populate the the dropdown with the list of subjectIDs
function popDropdown(subjectIDs) {
   console.log(subjectIDs);
   let selectTag = d3.select("#selDataset"); 
   subjectIDs.forEach(id => {
        selectTag.append("option").attr("value", id).text(id);
   });
}

// populate the demographic data for each subjectID
function popDemos(subjectID, metadata) {
    let demoTag = d3.select("#sample-metadata");
    demoTag.html("");
    metadata.forEach(demo => {
        if (demo.id == subjectID) {
            console.log(demo)
            Object.entries(demo).forEach(([key, value]) => {
                demoTag.append("H6").text(`${key.toUpperCase()}: ${value}`);
            });
        }
    });
};

// populate the bar chart with the data for each subjectID
function barChart(subjectID, samples) {
    // prepare the data
    samples.forEach(sample => {
        if (sample.id == subjectID) {
            let x_sample = sample.sample_values.slice(0, 10).reverse();
            let y_otu_ids = sample.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
            let otu_labels = sample.otu_labels.slice(0, 10).reverse();
            var trace1 = {
                x: x_sample,
                y: y_otu_ids,
                text: otu_labels,
                type: 'bar',
                orientation: 'h'
            };
            // create the bar chart
            var data1 = [trace1];
            var layout1 = {
                title: "Top 10 Bacteria Cultures Found",
                showlegend: false,
            };
            Plotly.newPlot('bar', data1, layout1);
        };
    });
}

// populate the bubble chart with the data for each subjectID
function bubbleChart(subjectID, samples) {
    // prepare the data
    samples.forEach(sample => {
        if (sample.id == subjectID) {
            var trace2 = {
                x: sample.otu_ids,
                y: sample.sample_values,
                mode: 'markers',
                marker: {
                    size: sample.sample_values,
                    color: sample.otu_ids,
                }
            };
            // create the bubble chart
            var data2 = [trace2];
            var layout2 = {
                title: "Bacteria Cultures per Sample",
                showlegend: false,
            };
            Plotly.newPlot('bubble', data2, layout2);
        };
    });
}

// set the thing in motion
initialize();