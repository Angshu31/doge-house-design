import Left from "./images/Left.png";
import Right from "./images/Right.png";
import GitHubIcon from "./images/GitHub.png";
import TwitterIcon from "./images/Twitter.svg";
import GoogleIcon from "./images/Google.png";
import DiscordIcon from "./images/Discord.svg";

const Link = ({ to, children }: { to: string; children: any }) => (
  <a href={to} className="text-orange-500 hover:underline">
    {children}
  </a>
);

function App() {
  return (
    <div className="w-screen h-screen bg-dark text-white">
      <img className="absolute top-0 left-0" src={Left} width="200" alt="" />
      <img className="absolute top-0 right-0" src={Right} width="200" alt="" />

      <main className="w-full h-full flex justify-center items-center">
        <div className="bg-gray-800 p-10 w-96 rounded-md">
          <h3 className="text-3xl mb-10 font-semibold">Welcome</h3>

          <p className="text-lg">
            By logging in, you accept the <Link to="/">Privacy Policy</Link> and{" "}
            <Link to="/">Terms of service</Link>
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5">
            <button className="bg-gray-700 p-3 w-full rounded font-semibold">
              <img src={GitHubIcon} alt="" className="w-5 inline mr-2" /> Login
              With GitHub
            </button>
            <button className="bg-gray-700 p-3 w-full rounded font-semibold">
              <img src={TwitterIcon} alt="" className="w-5 inline mr-2" /> Login
              With Twitter
            </button>
            <button className="bg-gray-700 p-3 w-full rounded font-semibold">
              <img src={GoogleIcon} alt="" className="w-5 inline mr-3" />
              Login With Google
            </button>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-5 px-10 p-2 text-orange-400 w-full text-lg">
        <span className="font-semibold">DogeHouse</span>

        <div className="float-right flex">
          {/* Links */}
          <div className="flex gap-8">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Report a bug</Link>
            <Link to="/">Investors</Link>
          </div>
          {/* Icon Links */}
          <div className="flex gap-5 ml-10">
            <Link to="/">
              <img src={TwitterIcon} alt="Twitter" className="w-4 inline" />
            </Link>
            <Link to="/">
              <img src={GitHubIcon} alt="GitHub" className="w-4 inline" />
            </Link>
            <Link to="/">
              <img src={DiscordIcon} alt="GitHub" className="w-4 inline" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
