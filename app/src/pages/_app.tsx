import type { AppProps, NextWebVitalsMetric } from "next/app";
import Layout from "../components/Layout";
import { config, library } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "../styles/globals.scss";
import 'react-notifications-component/dist/theme.css'

library.add(fas);
library.add(fab);

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    console.log(metric);
  }
}

export default function SearchpetsApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}