import logo from "../../favicon.svg";

type Props = {
  message: string;
};

const LoadingIndicator = ({ message }: Props) => (
  <div className="fixed top-0 left-0 flex flex-col gap-10 h-screen w-full items-center justify-center bg-gray-800 opacity-90 z-10">
    <span className="text-5xl text-white">{message}</span>
    <img src={logo} alt="" className="h-40 w-40 animate-bounce" />
  </div>
);

export default LoadingIndicator;
