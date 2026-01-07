const FormButton = ({
  disabled,
  type,
  className,
  title,
  children,
  ...props
}) => {
  const formButtonClassName = `${
    disabled
      ? "bg-sky-100 text-sky-300"
      : "bg-sky-100 text-sky-400 hover:border-[1px] border-[1px] border-transparent hover:border-sky-400"
  } font-bold min-w-[100px] px-2 flex justify-center items-center h-[40px] rounded-[10px] ${className}`;
  return (
    <button
      disabled={disabled}
      type={type}
      {...props}
      className={formButtonClassName}
    >
      {children ? children : title}
    </button>
  );
};

export default FormButton;
