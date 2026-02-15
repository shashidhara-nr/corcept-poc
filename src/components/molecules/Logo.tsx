import logo from './../../assets/corcept-logo.svg';


export default function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className="font-semibold tracking-wide">
      <img src={logo} alt="Company Logo" className={className ?? ' h-16, h-20'} />
    </a>
  );
}