export const styles = {
  menuContainer: "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50",
  backdrop: "fixed right-0 top-0 w-full h-screen opacity-0",
  navbarMenu:
    "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in ease-out duration-500 flex flex-col",
  navbarMenuClosed: "fixed right-[-75%] top-0 p-10 ease-in duration-200",
  menuHeader: "flex w-full items-center justify-between",
  divider: "border-b border-gray-300 my-4",
  menuMain: "py-4 flex flex-col flex-1",
  menuFooter: "",
  footerTitle: "uppercase tracking-widest text-[#f43f5e]",
  connectIconContainer:
    "flex items-center justify-between my-4 w-full sm:w-[80%]",
  connectIcon:
    "rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200",
};
