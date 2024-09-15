import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
    isPinned: true
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
    isPinned: true
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
    isPinned: false
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
    isPinned: true
  }
];

// Yalnızca pinli projeleri görüntülemek için filter ve map kullanın
export default function PinnedProjects() {
  const pinnedProjects=projects.filter(project=>project.isPinned);
  return (
    <div className="projects-wrapper">
      <h2 className="projects-title">Pinlenmiş Projeler</h2>
      <ul className="projects-list">
        {pinnedProjects.map((project)=>(
        <li key={project.name} className="project-list-item">
          <div className={` project-initials ${project.bgColor}`}>{project.initials}</div>
          <div className="project-content-wrapper">
            <div className="project-content">
              <a href={project.href} className="project-link">
                {project.name}
              </a>
              <p className="project-members">{projects.members} Üye</p>
            </div>
            <div className="project-button-wrapper">
              <button type="button" className="project-button">
                <EllipsisVerticalIcon className="project-icon" />
              </button>
            </div>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}
