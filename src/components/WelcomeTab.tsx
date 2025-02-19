import IconImg from "./IconImg";

const WelcomeTab = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <IconImg
        src="/icons/vscode.svg"
        className="w-64 h-64 drop-shadow-[0_0_15px_#5DBCFC]"
      />
      <div className="text-center text-white mt-4">
        <h1 className="text-3xl font-bold">Welcome to VS Code Clone</h1>
        <p className="text-gray-400">
          Your powerful coding environment, remained.
        </p>
      </div>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default WelcomeTab;
