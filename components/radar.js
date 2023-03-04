import styles from "./radar.module.css";

export default function Radar({ technologies }) {

  const config = {
    svg_id: "radar",
    width: 1130,
    height: 800,
    colors: {
      background: "#11191f",
      grid: "#dddde0",
      inactive: "#ddd",
    },
    quadrants: [
      { name: "Languages & Frameworks" },
      { name: "Tools" },
      { name: "Platforms" },
      { name: "Techniques" },
    ],
    rings: [
      { name: "ADOPT", color: "#5ba300", radius: 130 },
      { name: "TRIAL", color: "#009eb0", radius: 220 },
      { name: "ASSESS", color: "#c7ba00", radius: 310 },
      { name: "HOLD", color: "#e09b96", radius: 400 },
    ],
    entries: technologies,
  };

  const quadrants = [
    { radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1 },
    { radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1 },
    { radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1 },
    { radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1 },
  ];

  const rings = [
    { radius: 130 },
    { radius: 220 },
    { radius: 310 },
    { radius: 400 },
  ];

  const legend_offset = [
    { x: 340, y: 290 },
    { x: -405, y: 290 },
    { x: -475, y: -210 },
    { x: 370, y: -210 },
  ];

  var seed = 42;
  function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  function random_between(min, max) {
    return min + random() * (max - min);
  }

  function normal_between(min, max) {
    return min + (random() + random()) * 0.5 * (max - min);
  }

  function polar(cartesian) {
    var x = cartesian.x;
    var y = cartesian.y;
    return {
      t: Math.atan2(y, x),
      r: Math.sqrt(x * x + y * y),
    };
  }

  function cartesian(polar) {
    return {
      x: polar.r * Math.cos(polar.t),
      y: polar.r * Math.sin(polar.t),
    };
  }

  function bounded_interval(value, min, max) {
    var low = Math.min(min, max);
    var high = Math.max(min, max);
    return Math.min(Math.max(value, low), high);
  }

  function bounded_ring(polar, r_min, r_max) {
    return {
      t: polar.t,
      r: bounded_interval(polar.r, r_min, r_max),
    };
  }

  function bounded_box(point, min, max) {
    return {
      x: bounded_interval(point.x, min.x, max.x),
      y: bounded_interval(point.y, min.y, max.y),
    };
  }

  function legend_transform(quadrant, ring, index = null) {
    var dx = ring < 2 ? 0 : 140;
    var dy = index == null ? -16 : index * 12;
    if (ring % 2 === 1) {
      dy = dy + 36 + segmented[quadrant][ring - 1].length * 12;
    }
    return {
      x: legend_offset[quadrant].x + dx,
      y: legend_offset[quadrant].y + dy
    };
  }

  function segment(quadrant, ring) {
    var polar_min = {
      t: quadrants[quadrant].radial_min * Math.PI,
      r: ring === 0 ? 30 : rings[ring - 1].radius,
    };
    var polar_max = {
      t: quadrants[quadrant].radial_max * Math.PI,
      r: rings[ring].radius,
    };
    var cartesian_min = {
      x: 15 * quadrants[quadrant].factor_x,
      y: 15 * quadrants[quadrant].factor_y,
    };
    var cartesian_max = {
      x: rings[3].radius * quadrants[quadrant].factor_x,
      y: rings[3].radius * quadrants[quadrant].factor_y,
    };
    return {
      clipx: function (d) {
        var c = bounded_box(d, cartesian_min, cartesian_max);
        var p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15);
        d.x = cartesian(p).x; // adjust data too!
        return d.x;
      },
      clipy: function (d) {
        var c = bounded_box(d, cartesian_min, cartesian_max);
        var p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15);
        d.y = cartesian(p).y; // adjust data too!
        return d.y;
      },
      random: function () {
        return cartesian({
          t: random_between(polar_min.t, polar_max.t),
          r: normal_between(polar_min.r, polar_max.r),
        });
      },
    };
  }

  // position each entry randomly in its segment
  for (var i = 0; i < config.entries.length; i++) {
    var entry = config.entries[i];
    entry.segment = segment(entry.category, entry.ring);
    var point = entry.segment.random();
    entry.x = point.x;
    entry.y = point.y;
    entry.color = config.rings[entry.ring].color;
  }

  // partition entries according to segments
  var segmented = new Array(4);
  for (var quadrant = 0; quadrant < 4; quadrant++) {
    segmented[quadrant] = new Array(4);
    for (var ring = 0; ring < 4; ring++) {
      segmented[quadrant][ring] = [];
    }
  }
  for (var i = 0; i < config.entries.length; i++) {
    var entry = config.entries[i];
    segmented[entry.category][entry.ring].push(entry);
  }

  return (
    <>
      <svg width={config.width} height={config.height} className={styles.svg}>
        <g key="frame" transform={`translate(${config.width / 2}, ${config.height / 2})`}>
          <g>
            <line x1="0" y1="-400" x2="0" y2="400" className={styles.grid}></line>
            <line x1="-400" y1="0" x2="400" y2="0" className={styles.grid}></line>
            {config.rings.map((ring) => (
              <g key={ring.radius}>
                <circle cx="0" cy="0" r={ring.radius} className={styles.ring} ></circle>
                <text y={-ring.radius + 62} textAnchor="middle" className={styles.ringText} style={{ fill: ring.color }}>{ring.name}</text>
              </g>
            ))}
          </g>
          <g>
            {config.quadrants.map((quadrant, index) => (
              <text key={quadrant.name} className={styles.quadrantText} transform={`translate(${legend_offset[index].x}, ${legend_offset[index].y})`}>{quadrant.name}</text>
            ))}
          </g>
          <g>
            {config.entries.map((entry) => (
              <g key={entry.id} transform={`translate(${Math.round((entry.x + Number.EPSILON) * 100) / 100}, ${Math.round((entry.y + Number.EPSILON) * 100) / 100})`}>
                <circle r="9" fill={config.rings[entry.ring].color}></circle>
                <text y="3" textAnchor="middle" className={styles.blip}>{entry.order}</text>
              </g>
            ))}
          </g>
        </g>
      </svg>
      <div>
        {config.quadrants.map((quadrant, quadrantIndex) => (
          <div key={quadrant.name}>
            <h5 className={styles.category}>{quadrant.name}</h5>
            <div className="grid">
              {config.rings.map((ring, ringIndex) => (

                <div key={ring.radius}>
                  <h6 className={styles.ringTitle}>{ring.name}</h6>
                  <ul className={styles.technologyList}>
                    {config.entries.filter(e => e.category === quadrantIndex && e.ring === ringIndex).map(entry => (
                      <li key={entry.order} className={styles.listItem}>{entry.order}. {entry.name}</li>
                    ))}
                  </ul>
                </div>

              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
