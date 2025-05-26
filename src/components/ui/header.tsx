export const Header = (props: React.PropsWithChildren) => {
  return (
    <div className="flex flex-row justify-center items-center gap-x-4 pb-8">
      <hr className="w-[120px] bg-neutral-500" />
      <h2 className="text-xl">{props.children}</h2>
      <hr className="w-[120px] bg-neutral-500" />
    </div>
  );
};
