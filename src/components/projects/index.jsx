import { ProjectLayout } from "./ProjectLayout";

export const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center">
      {projects.map((project) => {
        return <ProjectLayout key={project.id} {...project} />;
      })}
    </div>
  );
};
