import { ProjectLayout } from "./ProjectLayout";

export const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-auto lg:max-w-4xl px-4 mx-auto pt-8  lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center">
      {projects.map((project) => {
        return <ProjectLayout key={project.id} {...project} />;
      })}
    </div>
  );
};
