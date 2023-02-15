import { useEffect, useRef } from "react";
import { radar_visualization } from "../lib/radar";
import styles from "./radar.module.css";

export default function Radar() {

  const config = {
    svg_id: "radar",
    width: 1130,
    height: 800,
    colors: {
      background: "#11191f",
      grid: "#dddde0",
      inactive: "#ddd",
    },
    title: "Tech Radar",
    date: "February 2023",
    quadrants: [
      { name: "Languages" },
      { name: "Infrastructure" },
      { name: "Datastores" },
      { name: "Data Management" },
    ],
    rings: [
      { name: "ADOPT", color: "#5ba300", radius: 130 },
      { name: "TRIAL", color: "#009eb0", radius: 220 },
      { name: "ASSESS", color: "#c7ba00", radius: 310 },
      { name: "HOLD", color: "#e09b96", radius: 400 },
    ],
    print_layout: true,
    links_in_new_tabs: true,
    //zoomed_quadrant: 0,
    //ENTRIES
    entries: [
      {
        quadrant: 3,
        ring: 2,
        label: "AWS Athena",
        active: true,
        moved: 0,
        x: 0,
        y: 0,
        id: 0,
        segment: null,
        color: ""
      },
      {
        quadrant: 3,
        ring: 3,
        label: "AWS Data Pipeline",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 0,
        label: "AWS EMR",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 2,
        label: "AWS Glue",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Airflow",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Databricks",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 1,
        label: "Flink",
        link: "https://engineering.zalando.com/tags/apache-flink.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 1,
        label: "Google BigQuery",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 3,
        label: "Hadoop",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 1,
        label: "Presto",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Spark",
        link: "https://engineering.zalando.com/tags/apache-spark.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 3,
        label: "YARN",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 2,
        label: "dbt",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 0,
        label: "AWS DynamoDB",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 0,
        label: "AWS S3",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Aerospike",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 2,
        label: "Amazon MemoryDB",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 1,
        label: "Amazon Redshift",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 1,
        label: "Amazon Feature Store",
        active: true,
        moved: 1,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Apache Cassandra",
        link: "https://engineering.zalando.com/tags/cassandra.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Consul",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "CouchBase",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 1,
        label: "Druid",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Elasticsearch",
        link: "https://engineering.zalando.com/tags/elasticsearch.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Exasol",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "HBase",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 1,
        label: "HDFS",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Hazelcast",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Memcached",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "MongoDB",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "MySQL",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Oracle DB",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 0,
        label: "PostgreSQL",
        link: "https://engineering.zalando.com/tags/postgresql.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Redis",
        link: "https://engineering.zalando.com/tags/redis.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 2,
        label: "RocksDB",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Solr",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 3,
        label: "ZooKeeper",
        active: true,
        moved: 0,
      },
      {
        quadrant: 2,
        ring: 0,
        label: "etcd",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 0,
        label: "AWS CloudFormation",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 0,
        label: "AWS CloudFront",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 1,
        label: "AWS Elemental MediaConvert",
        active: true,
        moved: 1,
      },
      {
        quadrant: 1,
        ring: 1,
        label: "AWS Lambda",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 1,
        label: "AWS Step Functions",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Amazon SageMaker",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Docker",
        link: "https://engineering.zalando.com/tags/docker.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Kubernetes",
        link: "https://engineering.zalando.com/tags/kubernetes.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 0,
        label: "OpenTracing",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 3,
        label: "STUPS",
        link: "https://engineering.zalando.com/tags/stups.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Skipper",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 2,
        label: "Slurm",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 2,
        label: "WebAssembly",
        active: true,
        moved: 0,
      },
      {
        quadrant: 1,
        ring: 3,
        label: "ZMON",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 3,
        label: "Clojure",
        link: "https://engineering.zalando.com/tags/clojure.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 1,
        label: "Dart",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Go",
        link: "https://engineering.zalando.com/tags/golang.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "GraphQL",
        link: "https://engineering.zalando.com/tags/graphql.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 3,
        label: "Haskell",
        link: "https://engineering.zalando.com/tags/haskell.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Java",
        link: "https://engineering.zalando.com/tags/java.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "JavaScript",
        link: "https://engineering.zalando.com/tags/javascript.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Kotlin",
        link: "https://engineering.zalando.com/tags/kotlin.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "OpenAPI (Swagger)",
        link: "https://engineering.zalando.com/tags/openapi.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Python",
        link: "https://engineering.zalando.com/tags/python.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 2,
        label: "R",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 3,
        label: "Rust",
        link: "https://engineering.zalando.com/tags/rust.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Scala",
        link: "https://engineering.zalando.com/tags/scala.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Swift",
        link: "https://engineering.zalando.com/tags/swift.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 0,
        ring: 0,
        label: "TypeScript",
        link: "https://engineering.zalando.com/tags/typescript.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 0,
        label: "AWS Kinesis",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 0,
        label: "AWS SNS",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 0,
        label: "AWS SQS",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Kafka",
        link: "https://engineering.zalando.com/tags/apache-kafka.html",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Nakadi",
        link: "https://nakadi.io",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 1,
        label: "RabbitMQ",
        link: "https://engineering.zalando.com/tags/rabbitmq.html",
        active: true,
        moved: 0,
      },
    ],
    //ENTRIES
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
    { x: 350, y: 290 },
    { x: -475, y: 290 },
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
    entry.segment = segment(entry.quadrant, entry.ring);
    var point = entry.segment.random();
    entry.x = point.x;
    entry.y = point.y;
    entry.color =
      entry.active || config.print_layout
        ? config.rings[entry.ring].color
        : config.colors.inactive;
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
    segmented[entry.quadrant][entry.ring].push(entry);
  }

  // assign unique sequential id to each entry
  var id = 1;
  for (var quadrant of [2, 3, 1, 0]) {
    for (var ring = 0; ring < 4; ring++) {
      var entries = segmented[quadrant][ring];
      entries.sort(function (a, b) {
        return a.label.localeCompare(b.label);
      });
      for (var i = 0; i < entries.length; i++) {
        entries[i].id = "" + id++;
      }
    }
  }

  return (
    <>
      <svg width={config.width} height={config.height} className={styles.svg}>
        <g transform={`translate(${config.width / 2}, ${config.height / 2})`}>
          <g>
            <line key="x" x1="0" y1="-400" x2="0" y2="400" className={styles.grid}></line>
            <line key="y" x1="-400" y1="0" x2="400" y2="0" className={styles.grid}></line>
            {config.rings.map((ring, index) => (
              <>
                <circle key={index} cx="0" cy="0" r={ring.radius} className={styles.ring} ></circle>
                <text key={ring.name} y={-ring.radius + 62} textAnchor="middle" className={styles.ringText} style={{ fill: ring.color }}>{ring.name}</text>
              </>
            ))}
          </g>
          <g>
            {config.quadrants.map((quadrant, index) => (
              <text key={index} className={styles.quadrantText} transform={`translate(${legend_offset[index].x}, ${legend_offset[index].y})`}>{quadrant.name}</text>
            ))}
          </g>
          <g>
            {config.entries.map((entry, index) => (
              <g key={index} transform={`translate(${entry.x}, ${entry.y})`}>
                <circle r="9" fill={config.rings[entry.ring].color}></circle>
                <text y="3" textAnchor="middle" className={styles.blip}>{entry.id}</text>
              </g>
            ))}
          </g>
        </g>
      </svg>
    </>
  );
}
