import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const AboutDetails = () => {
  return (
    <section className="p-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light">
            klasjdlksajd lkajsdlkajsdlk lkajsdlkjasd lkajsdlkasjdlk
            aksjdlkasalksdj klasjdklajs lkasjdlkasjdlk askldjaslkdj
            laksjdlkasdjl lkajsdklajsd laksjdklasjdlkjas lkajsdlkjaskdl
            alksjdaklsdj jskaj jsj sjsajj sjasjd sjajowqe
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};
