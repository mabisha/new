const index = ({ list, title }) => {
  return (
    <div className="mt-6 mb-3 grid-cols-2 gap-x-6 gap-y-5 space-y-5 md:grid md:space-y-0">
      <div
        className="flex p-4 mb-4 col-span-2 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">
            {title}
            Ensure that these requirements are met:
          </span>
          <ul className="mt-1.5 list-disc list-inside">
            {list.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
            <li>At least 6 characters (upto 10 characters)</li>
            <li>At least one digit character</li>
            <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
            <li>ex : admin123!@</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
