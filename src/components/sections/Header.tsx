import { useContext } from "react";
import Switch from "react-switch";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext, ThemeContextInterface } from "@/contexts";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="h-[650px] w-[100%] bg-[#9dc9ac] dark:bg-[#494949]">

        <div className="flex gap-5 absolute right-2 top-2">
          <Icon
            className={clsx(
              "h-full cursor-pointer text-[50px] text-gray-dark ",
              i18n.language === "en" && "brightness-50",
            )}
            icon="twemoji-flag-for-flag-united-states"
            onClick={() => i18n.changeLanguage("en")}
          />

          <Icon
            className={clsx(
              "h-full cursor-pointer text-[50px] text-gray-dark ",
              i18n.language === "es" && "brightness-50",
            )}
            icon="twemoji-flag-for-flag-peru"
            onClick={() => i18n.changeLanguage("es")}
          />

          <div className="">
            <Switch
              checked={darkTheme}
              onChange={toggleTheme}
              offColor="#919167"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <Icon
                  className="ml-5 h-full text-end text-[25px] text-gray-dark"
                  icon="twemoji:owl"
                />
              }
              checkedIcon={
                <Icon
                  className="ml-5 h-full text-end text-[25px] text-gray-dark"
                  icon="noto-v1:sun-with-face"
                />
              }
            />
          </div>
        </div>
        
        <div className="flex h-full flex-row items-center justify-center gap-5">
          <div className="grid h-full">
            <div>
              <Icon
                className="text-[#fffec7]"
                icon="la:laptop-code"
                style={{
                  height: "100%",
                  fontSize: 150,
                }}
              />
            </div>
          </div>
          
          <div className="flex h-full flex-col items-center justify-center gap-5 w-70">
            
            <h1 className="text-5xl font-bold text-[#fffec7] dark:text-white">
              {t("basic_info.name")}
            </h1>

            <TypeAnimation
              sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
                (title: string) => [title, 1000],
              )}
              wrapper="span"
              speed={50}
              className="text-3x1 text-[#fffec7] dark:text-white"
              repeat={Infinity}
            />

          </div>
        </div>
        
      </header>

    </>
  );
};

export default Header;
