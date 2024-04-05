import Image from "next/image";

type Props = {
  parentClassName?: string;
  attribute: any;
  className?: string;
};

const Logo = ({ parentClassName, attribute, className }: Props) => {
  return (
    <div className={parentClassName}>
      <Image
        src="/logo/logo.svg"
        alt="Tabi Logo"
        {...attribute}
        className={className}
      />
    </div>
  );
};

export default Logo;
