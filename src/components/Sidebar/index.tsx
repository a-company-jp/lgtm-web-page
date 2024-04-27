import React from "react";
import Logo from "../atoms/Logo";
import { Divider } from "@yamada-ui/react";
import ButtonToGitHub from "../atoms/ButtonToGitHub";
import CopyrightPolicyButton from "../atoms/CopyrightPolicyButton";
import SendImageButton from "../SendImageButton";

interface Props {
  className: string;
}

const Sidebar = ({ className }: Props) => {
  const styles = {
    container: "flex flex-col h-full justify-between shadow-lg",
    top: "flex flex-col items-center text-center",
    subTitle: "text-[#D9ACAC] font-bold",
    divider: "my-8",
    bottom: "flex justify-center my-8",
  };

  return (
    <div className={className}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Logo />
          <p className={styles.subTitle}>
            Let's give team members awesome LGTM easily
          </p>
          <Divider className={styles.divider} width="80%" />
          <ButtonToGitHub />
          <CopyrightPolicyButton />
        </div>
        <div className={styles.bottom}>
          <SendImageButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
