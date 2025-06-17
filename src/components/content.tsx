type ContentProps = {
  fullName: string;
  message: string;
};

const Content = ({ fullName, message }: ContentProps) => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-emerald-800 flex items-center justify-center text-white">
        <div className="text-center px-6 py-12 rounded-2xl shadow-2xl bg-slate-800 bg-opacity-80 max-w-2xl w-full animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Hello, {fullName}!</h1>
          <p className="text-xl font-light">{message}</p>
          <p className="mt-6 text-sm text-slate-300">
            This is the start of something great. Explore and enjoy!
          </p>
        </div>
      </section>
    </>
  );
};
export default Content;
