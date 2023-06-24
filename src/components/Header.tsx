type HeaderProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export default function Header({ searchValue, setSearchValue }: HeaderProps) {
  return (
    <header className="bg-white fixed top-0 w-full">
      <nav
        className="mx-auto flex items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:flex-1">
          <a href="#" className="p-1.5">
            <img className="h-20 w-auto" src="/logo.png" alt="" />
          </a>
        </div>
        <div className="relative flex lg:flex-1 w-full m-5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border"
            placeholder="Search product..."
            required
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
