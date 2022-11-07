import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
