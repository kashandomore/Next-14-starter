const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex justify-between w-full py-4 px-32">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
