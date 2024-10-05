import Link from "next/link";

export const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <Link
      target={"_blank"}
      href={demoLink}
      className="flex cursor-pointer justify-between items-center w-full relative rounded-lg overflow-hidden p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-foreground">{new Date(date).toDateString()}</p>
    </Link>
  );
};
