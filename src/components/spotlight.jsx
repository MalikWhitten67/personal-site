import { A, useEffect, useState } from "vaderjs";
export default function spotlight() {
  let items = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Projects",
      url: "/projects",
    },
  ];
  const [currentItem, setCurrentItem] = useState(null);

  const [recentSearches, setRecentSearches] = useState([], true);
  function _currentItem(){
    return currentItem
  }
  useEffect(() => {
    if (isServer) return void 0;
    const handleKeyDown = (event) => { 
      console.log(_currentItem())
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault(); // Prevent default behavior if needed
        document.getElementById("spotlight").showModal();
      } else if (event.key === "Escape") {
        document.getElementById("spotlight").close();
      }else if(event.key == "Enter"){
        console.log("true")
        window.location.href = currentItem.url;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  console.log(this)
  return (
    <dialog class="modal bg-transparent " id="spotlight">
      <div class="modal-content rounded-xl w-[400px] p-5 h-fit g-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
        <div class="modal-header">
          <input
            type="text"
            class="input bg-transparent input-bordered focus:outline-none w-full"
            placeholder="Search"
            onInput={(e) => {
              const value = e.target.value.trim().toLowerCase(); // Trim and normalize input
              const item = items.find((item) =>
                item.name.toLowerCase().includes(value)
              );
            
              if (item) {
                const alreadySearched = recentSearches.some(
                  (it) => it.name === item.name
                );
            
                if (!alreadySearched) {
                  setRecentSearches([item, ...recentSearches]); // Add to recent searches if not already present
                }
            
                setCurrentItem(item); // Set the current item
              } else {
                 
              }
            }}
            
          />
        </div>
        <div class="text-sm mt-2">
          {currentItem ? (
            <div class="flex justify-between items-center">
              <h1 class=" text-white">{currentItem.name}</h1>
              <A href={currentItem.url} openInNewTab={true}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                  onClick={() => {
                    window.location.href = currentItem.url;
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </A>
            </div>
          ) : (
            <div>
              <h1 class=" text-white">Try: "About " </h1>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
