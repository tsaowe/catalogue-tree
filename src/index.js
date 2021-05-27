import './index.less';

import * as d3 from 'd3';

const data = [4, 8, 15, 16, 23, 42];


(document.querySelector('#root') || document.body).innerHTML = 'hello taxonomic tree of all';

const div = d3.selectAll("div");
div.style("color", "red");
