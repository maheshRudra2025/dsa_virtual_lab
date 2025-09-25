import Link from "next/link";

const experiments = [
  {
    title: "Stack",
    description: "Visualize the stack data structure and its operations.",
    link: "/experiments/stack",
  },
  {
    title: "Queue",
    description: "Visualize the queue data structure and its operations.",
    link: "/experiments/queue",
  },
  {
    title: "Binary Search Tree",
    description: "Visualize the binary search tree and its operations.",
    link: "/experiments/bst",
  },
  {
    title: "AVL Tree",
    description: "Visualize the AVL tree and its self-balancing operations.",
    link: "/experiments/avl",
  },
  {
    title: "B-Tree",
    description: "Visualize the B-tree data structure and its operations.",
    link: "/experiments/btree",
  },
  {
    title: "Graph BFS",
    description: "Visualize the Breadth-First Search algorithm on graphs.",
    link: "/experiments/bfs",
  },
  {
    title: "Graph DFS",
    description: "Visualize the Depth-First Search algorithm on graphs.",
    link: "/experiments/dfs",
  },
];

export default function Experiments() {
  return (
    <section className="experiments-list">
      <div className="container">
        <h1>List of Experiments</h1>
        <div className="card-container">
          {experiments.map((experiment, index) => (
            <div key={index} className="experiment-card">
              <h3>{experiment.title}</h3>
              <p>{experiment.description}</p>
              <Link href={experiment.link} className="btn">
                Visualize
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
