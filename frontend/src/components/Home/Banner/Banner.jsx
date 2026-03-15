function Banner({ title, subtitle }) {
  return (
    <div className="w-full h-[11rem] px-10  flex justify-end gap-[4px] flex-col items-start">
      <span className="font-semibold tracking-[0.02rem] uppercase text-lg">
        Life At Rosebud
      </span>
      <span className={`font-semibold text-4xl sm:text-5xl text-gray-400`}>
        {title}
      </span>
      <h1 className="font-semibold text-4xl  sm:text-5xl text-secondary pl-0">
        {subtitle}
      </h1>
    </div>
  );
}

export default Banner;
