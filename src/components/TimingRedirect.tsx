import { navigate } from "astro:transitions/client";
const TimingRedirect = ({
  redirectUrl,
  delay,
}: {
  redirectUrl: string;
  delay: number;
}) => {
  setTimeout(() => {
    navigate(redirectUrl);
  }, 1000 * delay);
};

export default TimingRedirect;
