import {
  select,
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
  drag,
  zoom,
} from "d3";

const colors = [
  ["#9D4452", "#E6A6B0", "#BE6B78", "#812836", "#5B0D1A"],
  ["#A76C48", "#F4CAAF", "#C99372", "#884E2A", "#602E0E"],
  ["#2E6B5E", "#719D93", "#498175", "#1B584A", "#093E32"],
  ["#538E3D", "#A6D096", "#75AC61", "#3A7424", "#1F520C"],
];

const MAIN_NODE_SIZE = 40;
const CHILD_NODE_SIZE = 15;
const LEAF_NODE_SIZE = 5;
const DEFAULT_DISTANCE = 90;
const MAIN_NODE_DISTANCE = 90;
const LEAF_NODE_DISTANCE = 5;
const MANY_BODY_STRENGTH = -180;

let i = 0;

export let nodes = [
  {
    id: "Karachi",
    size: MAIN_NODE_SIZE,
    color: "#BE6B78",
    showChildren: true,
  },
];
export let links = [];

export const loadGraph = () => {
  const svg = select("#container");
  const width = +svg.attr("width");
  const height = +svg.attr("height");
  const centerX = width / 2;
  const centerY = height / 2;

  const childeNodesHashMap = new Map();
  childeNodesHashMap.set("Karachi", [
    {
      id: "Clifton",
      size: MAIN_NODE_SIZE,
      color: colors[i++ % colors.length][1],
      showChildren: true,
    },
    {
      id: "Defence",
      size: MAIN_NODE_SIZE,
      color: colors[i++ % colors.length][1],
      showChildren: true,
    },
    {
      id: "Saddar",
      size: MAIN_NODE_SIZE,
      color: colors[i++ % colors.length][1],
      showChildren: true,
    },
    {
      id: "Gulshan",
      size: MAIN_NODE_SIZE,
      color: colors[i++ % colors.length][1],
      showChildren: true,
    },
  ]);

  childeNodesHashMap.set("Clifton", [
    {
      id: "Boat Basin",
      size: MAIN_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[0].color,
      showChildren: true,
    },
    {
      id: "Sea View",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[0].color,
      showChildren: true,
    },
    {
      id: "Bilawal Chowrangi",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[0].color,
      showChildren: true,
    },
    {
      id: "Clifton Block 1",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[0].color,
      showChildren: true,
    },
    {
      id: "Clifton Block 2",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[0].color,
      showChildren: true,
    },
    {
      id: "Clifton Block 3",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[0].color,
      showChildren: true,
    },
    {
      id: "Clifton Block 4",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[0].color,
      showChildren: true,
    },
  ]);

  childeNodesHashMap.set("Defence", [
    {
      id: "DHA Phase 1",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[1].color,
      showChildren: true,
    },
    {
      id: "DHA Phase 2",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[1].color,
      showChildren: true,
    },
    {
      id: "DHA Phase 3",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[1].color,
      showChildren: true,
    },
    {
      id: "DHA Phase 4",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[1].color,
      showChildren: true,
    },
    {
      id: "DHA Phase 5",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[1].color,
      showChildren: true,
    },
    {
      id: "DHA Phase 6",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[1].color,
      showChildren: true,
    },
    {
      id: "DHA Phase 7",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[1].color,
      showChildren: true,
    },
  ]);

  childeNodesHashMap.set("Saddar", [
    {
      id: "Saddar Block 1",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[2].color,
      showChildren: true,
    },
    {
      id: "Saddar Block 2",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[2].color,
      showChildren: true,
    },
    {
      id: "Saddar Block 3",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[2].color,
      showChildren: true,
    },
    {
      id: "Saddar Block 4",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[2].color,
      showChildren: true,
    },
    {
      id: "Saddar Block 5",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[2].color,
      showChildren: true,
    },
    {
      id: "Saddar Block 6",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[2].color,
      showChildren: true,
    },
    {
      id: "Saddar Block 7",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[2].color,
      showChildren: true,
    },
  ]);

  childeNodesHashMap.set("Gulshan", [
    {
      id: "Gulshan Block 1",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[3].color,
      showChildren: true,
    },
    {
      id: "Gulshan Block 2",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[3].color,
      showChildren: true,
    },
    {
      id: "Gulshan Block 3",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[3].color,
      showChildren: true,
    },
    {
      id: "Gulshan Block 4",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[3].color,
      showChildren: true,
    },
    {
      id: "Gulshan Block 5",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[3].color,
      showChildren: true,
    },
    {
      id: "Gulshan Block 6",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[3].color,
      showChildren: true,
    },
    {
      id: "Gulshan Block 7",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Karachi")[3].color,
      showChildren: true,
    },
  ]);

  childeNodesHashMap.set("Boat Basin", [
    {
      id: "Boat Basin Block 1",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Clifton")[0].color,
      showChildren: false,
    },
    {
      id: "Boat Basin Block 2",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Clifton")[0].color,
      showChildren: false,
    },
    {
      id: "Boat Basin Block 3",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Clifton")[0].color,
      showChildren: false,
    },
    {
      id: "Boat Basin Block 4",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Clifton")[0].color,
      showChildren: false,
    },
    {
      id: "Boat Basin Block 5",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Clifton")[0].color,
      showChildren: false,
    },
    {
      id: "Boat Basin Block 6",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Clifton")[0].color,
      showChildren: false,
    },
    {
      id: "Boat Basin Block 7",
      size: CHILD_NODE_SIZE,
      color: childeNodesHashMap.get("Clifton")[0].color,
      showChildren: false,
    },
  ]);

  // Remove pushing nodes to nodes array when you don't want to show children on the first load
  nodes.push(...childeNodesHashMap.get("Karachi"));
  nodes.push(...childeNodesHashMap.get("Clifton"));
  nodes.push(...childeNodesHashMap.get("Defence"));
  nodes.push(...childeNodesHashMap.get("Saddar"));
  nodes.push(...childeNodesHashMap.get("Gulshan"));
  nodes.push(...childeNodesHashMap.get("Boat Basin"));

  const childLinksHashMap = new Map();
  childLinksHashMap.set("Karachi", [
    {
      source: "Karachi",
      target: "Clifton",
      distance: MAIN_NODE_DISTANCE,
      color: nodes[0].color,
    },
    {
      source: "Karachi",
      target: "Defence",
      distance: MAIN_NODE_DISTANCE,
      color: nodes[0].color,
    },
    {
      source: "Karachi",
      target: "Saddar",
      distance: MAIN_NODE_DISTANCE,
      color: nodes[0].color,
    },
    {
      source: "Karachi",
      target: "Gulshan",
      distance: MAIN_NODE_DISTANCE,
      color: nodes[0].color,
    },
  ]);

  childLinksHashMap.set("Clifton", [
    {
      source: "Clifton",
      target: "Boat Basin",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[0].color,
    },
    {
      source: "Clifton",
      target: "Sea View",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[0].color,
    },
    {
      source: "Clifton",
      target: "Bilawal Chowrangi",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[0].color,
    },
    {
      source: "Clifton",
      target: "Clifton Block 1",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[0].color,
    },
    {
      source: "Clifton",
      target: "Clifton Block 2",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[0].color,
    },
    {
      source: "Clifton",
      target: "Clifton Block 3",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[0].color,
    },
    {
      source: "Clifton",
      target: "Clifton Block 4",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[0].color,
    },
  ]);

  childLinksHashMap.set("Defence", [
    {
      source: "Defence",
      target: "DHA Phase 1",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[1].color,
    },
    {
      source: "Defence",
      target: "DHA Phase 2",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[1].color,
    },
    {
      source: "Defence",
      target: "DHA Phase 3",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[1].color,
    },
    {
      source: "Defence",
      target: "DHA Phase 4",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[1].color,
    },
    {
      source: "Defence",
      target: "DHA Phase 5",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[1].color,
    },
    {
      source: "Defence",
      target: "DHA Phase 6",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[1].color,
    },
    {
      source: "Defence",
      target: "DHA Phase 7",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[1].color,
    },
  ]);

  childLinksHashMap.set("Saddar", [
    {
      source: "Saddar",
      target: "Saddar Block 1",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[2].color,
    },
    {
      source: "Saddar",
      target: "Saddar Block 2",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[2].color,
    },
    {
      source: "Saddar",
      target: "Saddar Block 3",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[2].color,
    },
    {
      source: "Saddar",
      target: "Saddar Block 4",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[2].color,
    },
    {
      source: "Saddar",
      target: "Saddar Block 5",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[2].color,
    },
    {
      source: "Saddar",
      target: "Saddar Block 6",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[2].color,
    },
    {
      source: "Saddar",
      target: "Saddar Block 7",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[2].color,
    },
  ]);

  childLinksHashMap.set("Gulshan", [
    {
      source: "Gulshan",
      target: "Gulshan Block 1",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[3].color,
    },
    {
      source: "Gulshan",
      target: "Gulshan Block 2",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[3].color,
    },
    {
      source: "Gulshan",
      target: "Gulshan Block 3",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[3].color,
    },
    {
      source: "Gulshan",
      target: "Gulshan Block 4",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[3].color,
    },
    {
      source: "Gulshan",
      target: "Gulshan Block 5",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[3].color,
    },
    {
      source: "Gulshan",
      target: "Gulshan Block 6",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[3].color,
    },
    {
      source: "Gulshan",
      target: "Gulshan Block 7",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Karachi")[3].color,
    },
  ]);

  childLinksHashMap.set("Boat Basin", [
    {
      source: "Boat Basin",
      target: "Boat Basin Block 1",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Clifton")[0].color,
    },
    {
      source: "Boat Basin",
      target: "Boat Basin Block 2",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Clifton")[0].color,
    },
    {
      source: "Boat Basin",
      target: "Boat Basin Block 3",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Clifton")[0].color,
    },
    {
      source: "Boat Basin",
      target: "Boat Basin Block 4",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Clifton")[0].color,
    },
    {
      source: "Boat Basin",
      target: "Boat Basin Block 5",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Clifton")[0].color,
    },
    {
      source: "Boat Basin",
      target: "Boat Basin Block 6",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Clifton")[0].color,
    },
    {
      source: "Boat Basin",
      target: "Boat Basin Block 7",
      distance: DEFAULT_DISTANCE,
      color: childeNodesHashMap.get("Clifton")[0].color,
    },
  ]);

  // Remove pushing links to links array
  // when you don't want to show children on first load
  links.push(...childLinksHashMap.get("Karachi"));
  links.push(...childLinksHashMap.get("Clifton"));
  links.push(...childLinksHashMap.get("Defence"));
  links.push(...childLinksHashMap.get("Saddar"));
  links.push(...childLinksHashMap.get("Gulshan"));
  links.push(...childLinksHashMap.get("Boat Basin"));

  // Create a 'g' element within the 'svg' for your visualization

  const g = svg.append("g");

  let simulation = forceSimulation(nodes)
    .force("charge", forceManyBody().strength(MANY_BODY_STRENGTH))
    .force(
      "link",
      forceLink(links)
        .id(function (d) {
          return d.id;
        })
        .distance((link) => link.distance)
    )
    .force("center", forceCenter(centerX, centerY));

  let dragInteraction = drag().on("drag", (event, node) => {
    node.fx = event.x;
    node.fy = event.y;
    simulation.alpha(1);
    simulation.restart();
  });

  // Apply zoom behavior to the 'g' element
  svg.call(
    zoom().on("zoom", (event) => {
      g.attr("transform", event.transform);
    })
  );

  let lines = g
    .selectAll("line")
    .data(links, (link) => link.id)
    .enter()
    .append("line")
    .attr("stroke", (link) => {
      // console.log("link", link);
      console.log("link.color", link.color);
      console.log("node color", nodes[0].color);
      return link.color || "black";
    });

  let circles = g
    .selectAll("circle")
    .data(nodes, (node) => node.id)
    .enter()
    .append("circle")
    .attr("fill", (node) => node.color || "gray")
    .attr("r", (node) => node.size)
    .style("cursor", "pointer")
    .call(dragInteraction);

  circles
    .on("mouseover", (event, node) => {
      // Add tooltip on mouseover
      if (node.id !== "") {
        const tooltip = select("body")
          .append("div")
          .attr("class", "tooltip")
          .style("position", "absolute")
          .style("z-index", "10")
          .style("background-color", "white")
          .style("padding", "10px")
          .style("border", "1px solid #ccc")
          .style("border-radius", "5px")
          .style("font-size", "14px")
          .style("visibility", "visible")
          .html(`Node: ${node.id}`);

        // Move the tooltip to the mouse position
        tooltip
          .style("top", `${event.pageY}px`)
          .style("left", `${event.pageX + 10}px`);
      }
    })
    .on("mouseout", () => {
      // Remove tooltip on mouseout
      select(".tooltip").remove();
    });

  circles.on("click", (event, node) => {
    showChildren(node);
    console.log("node", node);
  });

  let text = g
    .selectAll("text")
    .data(nodes, (node) => node.id)
    .enter()
    .append("text")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .style("pointer-events", "none")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .text((node) => node.id);

  simulation.on("tick", () => {
    circles.attr("cx", (node) => node.x).attr("cy", (node) => node.y);
    text.attr("x", (node) => node.x).attr("y", (node) => node.y);

    lines
      .attr("x1", (link) => link.source.x)
      .attr("y1", (link) => link.source.y)
      .attr("x2", (link) => link.target.x)
      .attr("y2", (link) => link.target.y);
  });

  // Helper function to show/hide children
  function showChildren(node) {
    const childNodes = childeNodesHashMap.get(node.id);
    const childLinks = childLinksHashMap.get(node.id);

    if (childNodes && childLinks) {
      if (node.showChildren) {
        // Remove new nodes and their descendants
        const descendantNodes = getDescendantNodes(node.id);

        // all descendant nodes shoChildren = false
        descendantNodes.forEach((node) => (node.showChildren = false));

        // Remove new nodes and their descendants
        nodes = nodes.filter(
          (n) => !descendantNodes.some((d) => n.id === d.id)
        );

        // Remove new links and their descendants
        const descendantLinks = getDescendantLinks(node.id);
        links = links.filter(
          (l) =>
            !descendantLinks.some(
              (d) => l.source.id === d.source.id && l.target.id === d.target.id
            )
        );

        node.showChildren = false;
      } else {
        // Add new nodes
        nodes.push(...childNodes);

        // Add new links
        links.push(...childLinks);
        node.showChildren = true;
      }

      updateGraph();
    }
  }

  // Helper function to get all descendant nodes
  function getDescendantNodes(parentId) {
    let descendants = [];
    const queue = [parentId];
    while (queue.length > 0) {
      const currentId = queue.shift();
      const children = childeNodesHashMap.get(currentId);
      if (children) {
        descendants.push(...children);
        queue.push(...children.map((child) => child.id));
      }
    }
    return descendants;
  }

  // Helper function to get all descendant links
  function getDescendantLinks(parentId) {
    let descendants = [];
    const queue = [parentId];
    console.log("queue", queue.length);
    while (queue.length > 0) {
      const currentId = queue.shift();
      const children = childLinksHashMap.get(currentId);
      if (children) {
        descendants.push(...children);
        queue.push(...children.map((child) => child.target.id));
      }
    }
    return descendants;
  }

  // Helper function to update the graph
  function updateGraph() {
    simulation.nodes(nodes);
    simulation.force("link").links(links);

    circles = g.selectAll("circle").data(nodes, (node) => node.id);
    circles.exit().remove();
    circles = circles
      .enter()
      .append("circle")
      .attr("fill", (d) => d.color || "gray")
      .attr("r", (d) => d.size)
      .call(dragInteraction)
      .on("click", (event, clickedNode) => {
        showChildren(clickedNode);
      })
      .on("mouseover", (event, node) => {
        // Add tooltip on mouseover
        if (node.id !== "") {
          const tooltip = select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("background-color", "white")
            .style("padding", "10px")
            .style("border", "1px solid #ccc")
            .style("border-radius", "5px")
            .style("font-size", "14px")
            .style("visibility", "visible")
            .html(`Node: ${node.id}`);

          // Move the tooltip to the mouse position
          tooltip
            .style("top", `${event.pageY}px`)
            .style("left", `${event.pageX + 10}px`);
        }
      })
      .on("mouseout", () => {
        // Remove tooltip on mouseout
        select(".tooltip").remove();
      })
      .merge(circles);

    text = g.selectAll("text").data(nodes, (node) => node.id);
    text.exit().remove();
    text = text
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("pointer-events", "none")
      .text((d) => d.id)
      .merge(text);

    lines = g.selectAll("line").data(links, (link) => link.id);
    lines.exit().remove();
    lines = lines
      .enter()
      .append("line")
      .attr("stroke", (link) => link.color || "black")
      .merge(lines);

    simulation.alpha(1).restart();
  }
};
