import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5 bg-[#fffec7] dark:bg-[#7f7f7f] md:py-10">
      <h2 className="text-center text-xl font-medium uppercase tracking-widest ">
        {t("about_me.title")}
      </h2>

      <div className="flex flex-col items-center justify-center gap-10 px-10 pb-10 md:flex-row md:pb-0">
        <div className="md:w-2/3">
          <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
            <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
              <Icon icon="emojione:red-circle" width={10} />
              <Icon icon="twemoji:yellow-circle" width={10} />
              <Icon icon="twemoji:green-circle" width={10} />
            </div>
            <div className="bg-[#fffedd] dark:bg-[#000000] font-['Consolas'] p-1 text-justify dark:text-white">
              <p>dvera@Dvera-MacBook-Air ~ % {t("about_me.greeting")} :){" "}</p>
              <p>
                {t("about_me.content")}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center md:w-1/3">
          <div className="bg-[#ffffff] mb-[30px] mt-[55px] inline-block p-4 pb-10 shadow-card ">
            <img
              src={`images/${t("about_me.image")}`}
              alt="Profile"
              height="250px"
              className="w-[225px]"
            />
            <div className="mt-3 flex justify-between gap-1">
              {t("about_me.tech_stacks", { returnObjects: true })?.map(
                (tech: string) => (
                  <Icon
                    key={tech}
                    icon={tech}
                    style={{
                      fontSize: 50,
                    }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
