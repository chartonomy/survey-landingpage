import AOS from 'aos';
import 'aos/dist/aos.css';



export const useAOS = () => {
  /**
   * { duration: 1200 }
   * @param options
   * @return {*}
   */
  const init = (options) => AOS.init(options);
  return { impl: AOS, init }
}
