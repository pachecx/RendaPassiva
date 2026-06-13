import { useInView } from "react-intersection-observer";

export const useScrollAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return { ref, inView };
};
