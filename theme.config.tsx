import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Donate from "./components/Donate";
import Logo from "./components/Logo";
// Theme config
const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/Hazrat-Ali9/React-Bangla-Documentation",
  },
  chat: {
    link: "discordapp.com/users/1130470559042506847",
  },
  docsRepositoryBase:
    "https://github.com/Hazrat-Ali9/React-Bangla-Documentation",
  footer: {
    text: "React Bangla Tutorial",
  },
  // ✅ Add this block
  components: {
    Donate,
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – React Bangla Documentation",
      };
    }
    return { titleTemplate: "React Bangla Documentation" };
  },
  head: () => {
    const { asPath } = useRouter();
    const { route } = useRouter();
    const { title, ...meta } = useConfig().frontMatter;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://react-bangla.vercel.app" />
        <meta
          property="og:url"
          content={`https://react-bangla.vercel.app${asPath}`}
        />
        <meta property="og:site_name" content="React Bangla Tutorial" />
        <meta name="og:title" content="React Bangla Tutorial" />
        <meta httpEquiv="Content-Language" content="bn" />
        <meta name="viewport" content="width=device-width" />
        <meta name="keywords" content="React, Bangla, Tutorial" />
        <meta
          property="description"
          content={
            meta.description ||
            "React Bangla Tutorial - স্টেপ বাই স্টেপ ফলো করে রিয়েক্ট শিখুন."
          }
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "React Bangla Tutorial - স্টেপ বাই স্টেপ ফলো করে রিয়েক্ট শিখুন."
          }
        />
      </>
    );
  },
};

export default config;
